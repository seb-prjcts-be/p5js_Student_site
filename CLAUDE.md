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
| p5.js | 1.7.0 via CDN | `cdnjs.cloudflare.com` |
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
│   ├── if-statements.html
│   ├── loops.html
│   ├── functies.html
│   ├── muis-interactie.html
│   ├── toetsenbord.html
│   ├── animatie.html
│   ├── arrays.html
│   ├── 3d-basis.html
│   ├── p5js-2.0.html
│   ├── strudel.html
│   └── vera-molnar.html
├── examples/           ← p5.js sketch scripts (window.sketch_* pattern)
│   ├── example-basis.js
│   ├── example-generative.js
│   ├── example-over-p5js.js
│   ├── example-interactie.js
│   ├── example-3d.js
│   └── example-p5js2.js
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
4. `loadP5Examples(onderwerpId)` → finds `.p5-canvas-wrapper` divs → `loadExample()`
5. `window.P5Editor.init()` (with 100ms delay) → initializes `.p5-editor` elements

### Navigation (`buildNav`)

Topics are grouped by `categorie`. Categories are defined in:
```javascript
const navCategories = ["Generative Design", "p5.js", "Strudel", "Inspiratie"];
```

Each group renders as a collapsible `<li class="nav-group">` with hover + click-to-pin behavior.

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

Code runs inside an `srcdoc` iframe that loads p5.js 1.7.0 from CDN. The iframe is fully isolated — no shared state with the page.

---

## Topic Data Structure (`main.js`)

```javascript
{
    id: "mijn-onderwerp",         // Used in URL hash and file names
    titel: "Mijn Onderwerp",      // Displayed in nav and page h1
    samenvatting: "...",          // Used in search results
    tags: ["tag1", "tag2"],       // Used in search
    contentFile: "content/mijn-onderwerp.html",
    categorie: "p5.js"            // Must match a value in navCategories[]
}
```

Valid `categorie` values: `"Generative Design"`, `"p5.js"`, `"Strudel"`, `"Inspiratie"`

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
        const canvas = p.createCanvas(600, 400);
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
    categorie: "p5.js"
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

p5.js 2.0 features — must be in `content/p5js-2.0.html`:

- Breaking changes en migratie van 1.x
- Async asset loading (`loadImage`, `loadFont` met await)
- Nieuwe typografie API
- Improved curves en splines
- WebGL shader verbeteringen
- Pointer events (vervangt mouse/touch events)
- `beginShape`/`endShape` verbeteringen

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

### Content styling classes

| Class | Usage |
|---|---|
| `.intro` | First paragraph of a topic — slightly styled intro block |
| `.p5-example` | Wrapper for an interactive canvas demo |
| `.p5-example-container` | Inner container for the canvas |
| `.p5-canvas-wrapper` | Direct container for the p5 instance (needs `id`) |
| `.p5-editor` | Live editor container (processed by `editor.js`) |
| `section` | Main content sections within a topic |
| `pre > code` | Inline code display |

### CSS variables

Defined in `:root` in `style.css`. Use these for colors and spacing instead of hardcoded values.

---

## Navigation Categories

Current categories and their topics:

```
Generative Design
  ├── Generative Design & Geschiedenis   (generative-design)
  ├── Over p5.js                         (over-p5js)
  └── Vera Molnar                        (vera-molnar)

p5.js
  ├── setup() en draw()                  (setup-draw)
  ├── Vormen Tekenen                     (vormen)
  ├── Kleur                              (kleur)
  ├── Variabelen                         (variabelen)
  ├── If-Statements                      (if-statements)
  ├── Loops                              (loops)
  ├── Functies                           (functies)
  ├── Muis Interactie                    (muis-interactie)
  ├── Toetsenbord Input                  (toetsenbord)
  ├── Animatie                           (animatie)
  ├── Arrays                             (arrays)
  ├── 3D Basis                           (3d-basis)
  └── p5.js 2.0: Nieuwe Features         (p5js-2.0)

Strudel
  └── Strudel: Live Coding Muziek        (strudel)

Inspiratie
  └── Vera Molnar                        (vera-molnar)
```

To add a new category: add its name to `navCategories[]` in `main.js`.

---

## p5.js Version Notes

### Current: p5.js 1.7.0

- CDN: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js`
- Loaded in `index.html` `<head>` — available globally on the page
- Also loaded inside each editor iframe independently

### p5.js 2.0

- Covered in `content/p5js-2.0.html` as a separate topic
- Do NOT upgrade the site's CDN to 2.0 without verifying all examples still work
- The `p5js2_handleiding.pdf` documents the differences

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

### XAMPP / local server required

The site uses `fetch()` to load content files. This requires HTTP — opening `index.html` directly as a `file://` URL will fail with CORS errors. Always serve via Apache/XAMPP.

---

## Topics Still to Complete / Expand

Based on the PDF source material, these topics likely need more depth:

- **Functies** — add examples with parameters and return values
- **Arrays** — add object arrays, `map()`, particle systems
- **Animatie** — expand with Lissajous curves, easing, noise
- **3D Basis** — add lighting (`ambientLight`, `pointLight`), materials, camera
- **p5.js 2.0** — ensure all features from `p5js2_handleiding.pdf` are covered
- **Vera Molnar** — deepen with practical generative art exercises
- **Strudel** — add more examples: polyrhythm, samples, effects

Topics not yet created that the PDF may cover:

- **Objecten & Classes** — OOP in p5.js sketches
- **Geluid** — `p5.sound` library
- **Afbeeldingen** — `loadImage()`, `image()`, pixel manipulation
- **Text & Typografie** — `text()`, `textSize()`, `loadFont()`
- **Noise** — `noise()`, Perlin noise patterns

---

## Testing Checklist Before Committing

For any content or code change:

- [ ] Open `http://localhost/p5_cursus_site/` — welcome page loads
- [ ] Navigate to changed topic via sidebar — content loads correctly
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
