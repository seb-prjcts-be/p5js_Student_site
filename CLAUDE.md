# CLAUDE.md — p5.js Cursus Site

Authoritative guide for AI-assisted development of this project. Read this before touching any file.

---

## Project Overview

A static Dutch-language p5.js educational website for students aged 16+. Built with plain HTML, CSS, and JavaScript — no build tools, no Node.js, no frameworks. Runs directly under Apache/XAMPP.

- **URL (local):** `http://localhost/p5_cursus_site/`
- **Language:** Dutch throughout (UI, content, comments)
- **Audience:** Leerlingen 16+, creative coding beginners
- **Organisation:** Lab44 EDU

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| HTML | HTML5 semantic | Single `index.html` entry point |
| CSS | CSS Grid + custom vars | `style.css` + `editor.css` |
| JS | Vanilla ES6+ | `main.js` (router/data) + `editor.js` (IIFE module) |
| p5.js | 2.2.1 via CDN | `cdn.jsdelivr.net` |
| Bootstrap | 5.3.3 via CDN | Layout utilities, loaded before `style.css` |
| Strudel | ES module `strudel-mini.js` | For the Strudel live-coding lesson |

---

## Directory Structure

```
p5_cursus_site/
├── index.html          ← Single entry point, never add pages
├── main.js             ← Topic data array + router + search
├── editor.js           ← p5 live editor IIFE module
├── style.css           ← Site-wide styling (CSS Grid layout)
├── editor.css          ← Editor split-pane styling
├── strudel-mini.js     ← Strudel live-coding module (ES module)
├── CLAUDE.md           ← This file
├── README.md
├── knowledge_base.md
├── strategy.md
├── content/            ← One HTML fragment per topic (no <html>/<body> tags)
│   ├── generative-design.html
│   ├── over-p5js.html
│   ├── setup-draw.html
│   ├── vormen.html
│   ├── kleur.html
│   ├── variabelen.html
│   ├── berekeningen.html
│   ├── if-statements.html
│   ├── loops.html
│   ├── functies.html
│   ├── muis-interactie.html
│   ├── toetsenbord.html
│   ├── animatie.html
│   ├── datum-tijd.html
│   ├── arrays.html
│   ├── 3d-basis.html
│   ├── afbeeldingen.html
│   ├── text-typografie.html
│   ├── geluid.html
│   ├── p5js-2.0.html
│   ├── strudel.html
│   ├── vera-molnar.html
│   ├── sol-lewitt.html
│   ├── objecten.html
│   ├── noise.html
│   ├── random-walk.html
│   ├── lissajous.html
│   ├── recursie.html
│   ├── l-systems.html
│   ├── game-of-life.html
│   ├── langtons-ant.html
│   ├── 1d-automaten.html
│   ├── boids.html
│   ├── circle-packing.html
│   ├── kleurenfamilie.html
│   ├── quine.html
│   ├── turtle.html
│   ├── ai-ecologische-kost.html
│   ├── ai-tools.html
│   ├── ai-modellen.html
│   └── vibe-coding.html
├── examples/           ← p5.js sketch scripts (window.sketch_* pattern)
│   ├── example-basis.js
│   ├── example-generative.js
│   ├── example-over-p5js.js
│   ├── example-interactie.js
│   ├── example-animatie.js
│   ├── example-berekeningen.js
│   ├── example-datum-tijd.js
│   ├── example-arrays.js
│   ├── example-functies.js
│   ├── example-objecten.js
│   ├── example-noise.js
│   ├── example-3d.js
│   ├── example-p5js2.js
│   ├── example-ai-ecologische-kost.js
│   ├── example-afbeeldingen.js
│   ├── example-text-typografie.js
│   ├── example-geluid.js
│   ├── example-datum-tijd.js
│   ├── example-vera-molnar.js
│   ├── example-sol-lewitt.js
│   ├── example-turtle.js
│   ├── example-random-walk.js
│   ├── example-lissajous.js
│   ├── example-recursie.js
│   ├── example-l-systems.js
│   ├── example-game-of-life.js
│   ├── example-langtons-ant.js
│   ├── example-1d-automaten.js
│   ├── example-boids.js
│   ├── example-circle-packing.js
│   ├── example-kleurenfamilie.js
│   └── example-quine.js
├── assets/             ← Afbeeldingen per onderwerp
│   ├── generative-design/   (generative-byob.jpg, generative-demo.jpg, generative-fractal.jpg, generative-lines.png)
│   ├── inspiratie/          (vera-molnar-desordres.png, vera-molnar-hero.jpg, vera-molnar-interruptions.png)
│   └── strudel/             (strudel-drums.png, strudel-sounds.png)
├── data/               ← Source PDFs (read-only reference material)
│   ├── Lab44_EDU - p5.js_FULL_def_Update_25.pdf   (15 MB — full curriculum)
│   └── p5js2_handleiding.pdf                       (190 KB — p5.js 2.0 guide)
└── backup/             ← Manual backups (do not edit)
```

---

## How the SPA Works

### Routing (`main.js`)

Hash-based. `window.location.hash` drives everything.

```
URL: http://localhost/p5_cursus_site/#setup-draw
                                       ↑
                                       topic id
```

Flow:
1. `DOMContentLoaded` → `buildNav()` → `initNavGroups()` → `initRouter()` → `initSearch()`
2. `hashchange` or initial load → `loadOnderwerp()` → finds topic in `onderwerpen[]`
3. `renderOnderwerp(onderwerp)` → `fetch(onderwerp.contentFile)` → inject into `#content`
4. `ensureContentAnchors()` adds stable ids to `.intro`, `section`, and `.p5-example` blocks for tag-based in-page navigation
5. `renderOnderwerp()` builds a right-hand `tags-sidebar` when `onderwerp.tags` exists
6. `updateTagContext(activeTag)` computes:
   - matching blocks on the current page
   - broader related tags from other topics
   - related topics ranked by overlap and text matches
7. `loadP5Examples(onderwerpId)` → finds `.p5-canvas-wrapper` divs → `loadExample()`
8. `window.P5Editor.init()` (with 100ms delay) → initializes `.p5-editor` elements

### Navigation (`buildNav`)

Topics are grouped by `categorie`. Categories are defined in:
```javascript
const navCategories = ["Introductie", "p5.js basis", "p5.js +", "Code concepten", "Strudel", "Inspiratie"];
```

Each group renders as a collapsible `<li class="nav-group">` in a click-to-toggle accordion. The active topic's group auto-opens; opening another group closes the others. The menu shows the category title and expand/collapse icon only; there is no per-group counter badge.

### Tag System (`main.js`)

Each topic page can render a right-hand `tags-sidebar` with the topic's own tags plus a dynamic context panel based on the active tag.

Important behavior:
- Tags in `onderwerp.tags` render in source order
- Tag order matters: put the most page-specific tags first
- The static tags and dynamic chip results render together in one compact chip flow inside `aside.tags-sidebar`
- Clicking a tag updates the sidebar context in place; results are **not** rendered at the bottom of the page
- The context panel can surface matching blocks on the current page, then broader related tags, then `Gerelateerde onderwerpen`
- Matching blocks on the current page and broader related tags should render as one continuous result flow, not as separate visual panels
- The sidebar markup is intentionally shallow: direct chip flow plus `#tag-context`, without extra panel/group wrappers
- Only `Gerelateerde onderwerpen` keeps an explicit heading; the other relation blocks are shown without extra label text
- Rapid clicking between tags is supported: only the latest click should win, and re-clicking the already active tag should do nothing

### p5.js Example Loading

Each example file exports a function on the `window` object:
```javascript
window.sketch_example_<id_with_underscores> = function(p) { ... }
```

The ID-to-function-name mapping uses `replace(/-/g, '_')`:
- container id `example-muis-interactie` → function `sketch_example_muis_interactie`
- Script file: `examples/example-muis-interactie.js`

Scripts are lazy-loaded (appended to `<body>`) and cached by the browser.

### Live Editor (`editor.js`)

IIFE module, exposes `window.P5Editor`.

Each `.p5-editor` div becomes a split-pane editor: textarea (left) + iframe preview (right).

Code runs inside an `srcdoc` iframe that loads p5.js 2.2.1 from CDN. The iframe is fully isolated — no shared state with the page.

---

## Topic Data Structure (`main.js`)

```javascript
{
    id: "mijn-onderwerp",         // Used in URL hash and file names
    titel: "Mijn onderwerp",      // Displayed in nav and page h1
    samenvatting: "...",          // Used in search results
    tags: ["tag1", "tag2"],       // Used in search and tag relations
    contentFile: "content/mijn-onderwerp.html",
    categorie: "p5.js basis"      // Must match a value in navCategories[]
}
```

Valid `categorie` values: `"Introductie"`, `"p5.js basis"`, `"p5.js +"`, `"Code concepten"`, `"Strudel"`, `"Inspiratie"`, `"AI"`

**Titelconventie:**
- Gebruik sentence case voor `titel` en categorienamen in `main.js`
- Alleen eigennamen, API-namen en vaste titels houden hun interne hoofdletters, zoals `p5.js`, `Game of Life` en `Langton's Ant`

**Tag ordering convention:**
- Put the most accurate/current-page keywords first
- Continue with broader related concepts, API names, or adjacent concepts
- Prefer specific → broad ordering, e.g. `["mouseX", "mouseY", "muis", "interactie", "events"]`
- Avoid filler tags that are too generic to create useful relations

---

## Adding a New Topic: Complete Checklist

### 1. Create the content file: `content/<id>.html`

This is an HTML fragment — no `<html>`, `<head>`, or `<body>` tags.

**Required structure:**
```html
<div class="intro">
    <p>Korte inleiding in eenvoudige taal voor leerlingen 16+.</p>
</div>

<section>
    <h2>Eerste concept</h2>
    <p>Uitleg...</p>
    <pre><code>// Code voorbeeld
function setup() {
  createCanvas(400, 300);
}</code></pre>

    <h3>Subsectie</h3>
    <ul>
        <li>Bullet punt</li>
    </ul>
</section>

<!-- Optioneel: interactief demo canvas -->
<div class="p5-example">
    <h3>Interactief Voorbeeld</h3>
    <div class="p5-example-container">
        <div class="p5-canvas-wrapper" id="example-<id>"></div>
    </div>
</div>

<!-- Interactieve live editor (verplicht voor p5.js onderwerpen) -->
<section>
    <h2>Experimenteer Zelf</h2>
    <p>Pas de code aan en kijk wat er verandert!</p>
    <div class="p5-editor" data-width="600" data-height="400" data-autorun="true">
        <script type="text/p5">
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  // Jouw code hier
}
        </script>
    </div>
</section>
```

### 2. Create the example sketch: `examples/example-<id>.js`

```javascript
// Beschrijving van wat dit voorbeeld doet
window.sketch_example_<id_with_underscores> = function(p) {
    // Variabelen buiten setup/draw declareren
    let x, y;

    p.setup = function() {
        p.createCanvas(600, 400);
        // Initialisatie hier
    };

    p.draw = function() {
        p.background(220);
        // Animatie/tekening hier
    };

    // Optionele event handlers
    p.mousePressed = function() { };
    p.keyPressed = function() { };
};
```

**Critical rules for examples:**
- Always use `p.` prefix for ALL p5.js functions (instance mode, not global mode)
- Declare variables outside `setup`/`draw` for persistence across frames
- Always call `p.createCanvas()` inside `p.setup()`
- 3D sketches: use `p.createCanvas(600, 400, p.WEBGL)`
- No `console.log` spam — examples run silently

### 3. Register the topic in `main.js`

Add to the `onderwerpen` array in the correct position (order matters for nav display):

```javascript
{
    id: "mijn-onderwerp",
    titel: "Mijn Onderwerp",
    samenvatting: "Korte beschrijving voor zoekresultaten (1-2 zinnen).",
    tags: ["tag1", "tag2", "trefwoord"],
    contentFile: "content/mijn-onderwerp.html",
    categorie: "p5.js basis"
}
```

---

## Live Editor: Usage Patterns

### Option A — Script tag (preferred for multi-line code)

```html
<div class="p5-editor" data-width="600" data-height="400" data-autorun="true">
    <script type="text/p5">
function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(240);
  fill(mouseX, 100, 200);
  circle(mouseX, mouseY, 60);
}
    </script>
</div>
```

### Option B — `data-code` attribute (for very short snippets only)

```html
<div class="p5-editor" data-code="function setup(){createCanvas(400,300);} function draw(){background(220);circle(mouseX,mouseY,40);}"></div>
```

### Data attributes

| Attribute | Default | Description |
|---|---|---|
| `data-width` | `600` | Canvas width in pixels |
| `data-height` | `400` | Canvas height in pixels |
| `data-autorun` | `"true"` | Auto-execute on load (`"false"` to disable) |
| `data-code` | — | Inline code string (use script tag instead when possible) |

**Important:** Editor code uses **global p5.js mode** (no `p.` prefix), because it runs in an isolated iframe with its own p5.js instance.

---

## Example Sketch: Global vs Instance Mode

| Context | Mode | Syntax |
|---|---|---|
| `examples/*.js` | Instance mode | `p.setup`, `p.draw`, `p.ellipse(...)` |
| `content/*.html` editor | Global mode | `function setup()`, `ellipse(...)` |

This is intentional: editors run in iframes (global mode is safe there), examples run on the main page (instance mode prevents conflicts).

---

## PDF Integration: Source Material

The PDFs in `data/` are the authoritative curriculum source. All topic content **must** be derived from and consistent with these documents.

### Lab44_EDU - p5.js_FULL_def_Update_25.pdf (15 MB)

Full curriculum. Topics it covers that must be reflected in the site:

- Generatieve design geschiedenis (John Whitney, Harold Cohen, Vera Molnár, fractals)
- p5.js introductie, de editor, projectstructuur
- `setup()` en `draw()`, canvas, frameRate
- Vormen: `ellipse`, `circle`, `rect`, `line`, `triangle`, `point`, `quad`, `arc`
- Kleur: RGB, HSB, `fill`, `stroke`, `noFill`, `noStroke`, `background`, alpha/transparantie
- Variabelen: `let`, `const`, ingebouwde variabelen (`width`, `height`, `mouseX`, `mouseY`, `frameCount`)
- If-statements, vergelijkingsoperatoren, logische operatoren (`&&`, `||`, `!`)
- Loops: `for`, `while`, geneste loops, patronen maken
- Functies: definitie, parameters, return values, scope
- Muis-interactie: `mouseX`, `mouseY`, `mouseIsPressed`, `mousePressed()`, `mouseDragged()`, `mouseReleased()`
- Toetsenbord: `keyIsDown()`, `keyPressed()`, `key`, `keyCode`
- Animatie: `frameCount`, `millis()`, `sin()`, `cos()`, beweging, `translate()`, `rotate()`
- Arrays: aanmaken, indexeren, `push()`, `length`, door array lopen
- 3D met WEBGL: `box()`, `sphere()`, `cylinder()`, `translate()`, `rotateX/Y/Z()`, belichting
- Object-georiënteerd: classes, constructors, methoden (als dit in de PDF staat)

### p5js2_handleiding.pdf (190 KB)

p5.js 2.x features — must be taught as the default approach across the site, with `content/p5js-2.0.html` as a consolidation lesson:

- Async asset loading (`loadImage`, `loadFont`, `loadShader` met await)
- Pointer events voor muis en touch
- Moderne typografie API
- Improved curves en splines
- WebGL shader verbeteringen
- `beginShape`/`endShape` verbeteringen
- Oudere 1.x-patronen zoals `preload()` alleen als context bij bestaand materiaal

**When writing content:** read the relevant PDF sections, translate concepts into student-friendly Dutch, provide working code examples at each concept.

---

## Content Writing Standards

### Language and tone

- Dutch throughout — no code-switching to English mid-sentence
- Friendly, accessible tone: "je" not "u", not overly formal
- Technical terms stay in English (p5.js convention): `setup()`, `draw()`, `mouseX`, etc.
- Short sentences, bullet points over paragraphs

### Code examples in `<pre><code>`

- Every concept gets a minimal working code snippet
- Comments in Dutch where helpful
- Show the simplest possible version first, complexity later
- Always test that snippets are syntactically correct before committing
- Default to modern p5.js 2.x patterns; mention `preload()` only when clarifying older code students may still encounter

### Live editor examples

- Every p5.js topic page **must** have at least one `.p5-editor` block
- The editor code should demonstrate the topic's core concept clearly
- Start with `createCanvas(600, 400)` unless there's a good reason not to
- Include a comment inviting students to experiment: `// Probeer dit aan te passen!`

### Example canvases (`examples/*.js`)

- Must be visually interesting and immediately comprehensible
- Should animate or respond to mouse interaction where appropriate
- Canvas size: `600 × 400` default, `600 × 600` for square compositions
- Must be fully self-contained and work without any external assets

---

## CSS Patterns

### Grid layout areas (in `style.css`)

```css
grid-template-areas:
    "header header"
    "nav search"
    "nav content"
    "footer footer";
```

Breakpoint: `768px` — below this, all areas stack vertically.

Desktop layout currently uses the full available width with an approximate 20% / 50% / 30% flow:
- `nav`: about 20% of the viewport width
- topic content: about 50% of the viewport width
- tags sidebar: about 30% of the viewport width

**Tag sidebar layout note:** below `900px`, `.onderwerp-layout` stacks vertically and the tag sidebar becomes full-width below the content. It is no longer hidden on smaller screens.

### Content styling classes

| Class | Usage |
|---|---|
| `.intro` | First paragraph of a topic — slightly styled intro block |
| `.p5-example` | Wrapper for an interactive canvas demo |
| `.p5-example-container` | Inner container for the canvas |
| `.p5-canvas-wrapper` | Direct container for the p5 instance (needs `id`) |
| `.p5-editor` | Live editor container (processed by `editor.js`) |
| `.tags-sidebar` | Right column for topic tags and dynamic relations |
| `.tags-chip-flow` | Combined chip flow for the topic's own tags and dynamic chip results |
| `.tag-context` | Dynamic relation panel for the active tag |
| `.tag-page-link` | Button that scrolls to a matching block on the current page |
| `.tag-topic-item` | Link card to a related topic |
| `section` | Main content sections within a topic |
| `pre > code` | Inline code display |

### Typography

Fonts are loaded via Google Fonts in `index.html` (`<head>`):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Alegreya:ital,wght@0,400;0,700;1,400&display=swap">
```

| Role | Font | Weight/Style | CSS var |
|---|---|---|---|
| Titels, nav, subtitels | Oswald | 300 (Light), 400 (Regular) | `--font-title` |
| Bodytekst, alinea's | Alegreya | 400, 700, italic 400 | `--font-body` |
| Code blocks (`pre`, `code`) | Courier New | — | hardcoded |

**Gebruik:**
- `--font-title` → `font-family: 'Oswald', Arial, sans-serif`
- Gebruik Oswald 300 voor hoofdtitels zoals de site title en pagina-`h1`
- Gebruik Oswald 400 voor navigatie, subtitels en tussenkoppen zodat de hiërarchie duidelijker blijft
- `--font-body` → `font-family: 'Alegreya', Georgia, serif` — `body`, lopende tekst
- Koppen schalen mee via `em` eenheden zodat de lettergrootte-knoppen correct werken

**Lettergrootte-switcher** (knoppen in header, opgeslagen in `localStorage`):

| Waarde `data-fontsize` | `font-size` op `body` |
|---|---|
| `klein` | 16px |
| `medium` | 20px |
| `groot` | 24px |

Alle kopgroottes zijn in `em` zodat ze meeschalen met de body-fontsize.

### CSS variables

Defined in `:root` in `style.css`. Use these for colors and spacing instead of hardcoded values.

---

## Navigation Categories

Current categories and their topics:

```
Introductie
  ├── Generative design & geschiedenis   (generative-design)
  └── Over p5.js                         (over-p5js)

p5.js basis
  ├── setup() en draw()                  (setup-draw)
  ├── Vormen tekenen                     (vormen)
  ├── Kleur                              (kleur)
  ├── Variabelen                         (variabelen)
  ├── Berekeningen                       (berekeningen)
  ├── If-statements                      (if-statements)
  ├── Loops                              (loops)
  ├── Functies                           (functies)
  └── Muis interactie                    (muis-interactie)

p5.js +
  ├── Toetsenbord input                  (toetsenbord)
  ├── Animatie                           (animatie)
  ├── Datum en tijd                      (datum-tijd)
  ├── Arrays                             (arrays)
  ├── 3D basis                           (3d-basis)
  ├── Objecten & classes                 (objecten)
  ├── Noise & Perlin noise               (noise)
  ├── Afbeeldingen                       (afbeeldingen)
  ├── Text & typografie                  (text-typografie)
  ├── Geluid                             (geluid)
  └── Moderne p5.js                      (p5js-2.0)

Code concepten
  ├── 1D cellulaire automaten            (1d-automaten)
  ├── Boids                              (boids)
  ├── Circle packing                     (circle-packing)
  ├── Game of Life                       (game-of-life)
  ├── Kleurenfamilie                     (kleurenfamilie)
  ├── L-systemen                         (l-systems)
  ├── Langton's Ant                      (langtons-ant)
  ├── Lissajous-figuren                  (lissajous)
  ├── Quine                              (quine)
  ├── Random walk                        (random-walk)
  ├── Recursie                           (recursie)
  └── Turtle geometry                    (turtle)

Strudel
  └── Strudel: live coding muziek        (strudel)

Inspiratie
  ├── Vera Molnar                        (vera-molnar)
  ├── Sol LeWitt — instructies als kunst (sol-lewitt)
  └── Links & bronnen                    (inspiratie-links)

AI
  ├── AI & ecologische kost              (ai-ecologische-kost)
  ├── AI-tools en playgrounds            (ai-tools)
  ├── AI-modellen vergelijken            (ai-modellen)
  └── Vibe coding                        (vibe-coding)
```

To add a new category: add its name to `navCategories[]` in `main.js`. Current order: `["Introductie", "p5.js basis", "p5.js +", "Code concepten", "Strudel", "Inspiratie", "AI"]`.

---

## p5.js Version Notes

### Current: p5.js 2.2.1

- CDN: `https://cdn.jsdelivr.net/npm/p5@2.2.1/lib/p5.min.js`
- Loaded in `index.html` `<head>` — available globally on the page
- Also loaded inside each editor iframe independently

### Older 1.x Patterns

- Older patterns such as `preload()` may still be referenced to help students read existing code
- New lessons and examples should treat async asset loading in `setup()` as the default
- The `p5js2_handleiding.pdf` documents the shift toward the modern API

---

## Common Pitfalls

### p5.js instance conflicts

Never put two `.p5-canvas-wrapper` elements with the same `id` on the same page. The `loadExample()` function finds them by `id`.

### Editor code vs example code

Editor code (in `content/*.html` inside `<script type="text/p5">`) uses **global mode** — no `p.` prefix.
Example code (in `examples/*.js`) uses **instance mode** — always `p.` prefix.
Mixing these up will break sketches silently.

### Script loading timing

`loadExample()` uses `setTimeout` delays. If an example doesn't appear, it's usually a timing issue or a wrong function name. Check:
1. The file is at `examples/example-<id>.js`
2. The function is `window.sketch_example_<id_with_underscores>`
3. The wrapper div has `id="example-<id>"`

### Content files are fragments, not full HTML

`content/*.html` files are fetched and injected via `innerHTML`. They must NOT contain `<html>`, `<head>`, `<body>`, `<script src="">`, or `<link>` tags. Inline `<script type="text/p5">` inside `.p5-editor` is the only script tag allowed.

### Tag system depends on meaningful sections

The relation panel scans `.intro`, `section`, and `.p5-example` blocks on the current page.

- Use real `section` blocks for major concepts
- Prefer clear `h2` / `h3` headings so in-page relation labels are meaningful
- Do not flatten an entire lesson into one giant undivided block if you want tag relations to work well

### XAMPP / local server required

The site uses `fetch()` to load content files. This requires HTTP — opening `index.html` directly as a `file://` URL will fail with CORS errors. Always serve via Apache/XAMPP.

---

## Topics Still to Complete / Expand

- **Vera Molnar** — deepen with practical generative art exercises
- **Strudel** — add more examples: polyrhythm, samples, effects

All core p5.js topics are complete as of 2026-03-24. New Inspiratie topics added: ai-tools, ai-modellen (2026-03-24).

---

## Testing Checklist Before Committing

For any content or code change:

- [ ] Open `http://localhost/p5_cursus_site/` — welcome page loads
- [ ] Navigate to changed topic via sidebar — content loads correctly
- [ ] Navigation accordion opens one group clearly at a time, the active topic stays visible, and no category counter badge is shown
- [ ] Right-hand tag sidebar appears for topics with tags
- [ ] Tags render in `onderwerp.tags` order at the start of the chip flow; the earliest tags are the most page-specific keywords
- [ ] The sidebar DOM stays shallow: direct `.tags-chip-flow` plus `#tag-context`, without extra panel/group wrappers
- [ ] Click a tag — in-page relations, broader tags, and `Gerelateerde onderwerpen` update in the sidebar
- [ ] Click two different tags quickly — only the latest clicked tag remains active and the panel stays coherent
- [ ] Desktop layout uses the intended wide 20 / 50 / 30 flow and still stacks correctly on smaller screens
- [ ] `.p5-example` canvas renders and animates
- [ ] `.p5-editor` shows textarea + iframe, auto-runs
- [ ] Click Reset — code reverts and re-runs
- [ ] Modify code in editor, click Run — new output appears
- [ ] Search for a keyword from the topic — result appears
- [ ] Resize browser below 768px — layout stacks correctly
- [ ] No JavaScript errors in browser console

---

## Do Not

- Do not add a backend, Node.js, or build step — the site must run with just Apache
- Do not add frameworks (React, Vue, etc.) — plain JS only
- Do not use global p5.js mode in `examples/*.js` — always instance mode there
- Do not hardcode Dutch content in English — keep everything in Dutch
- Do not add content that is not derived from the PDFs or clearly in scope
- Do not remove or rename existing topic `id` values — it breaks bookmarks
- Do not edit files in `backup/` — those are historical snapshots
- Do not add `console.log` to production code in content files or examples
