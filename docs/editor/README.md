# p5.js Live Editor — Technische Documentatie

Herbruikbare, zelfstandige live code editor voor p5.js sketches. Geen dependencies buiten p5.js zelf. Werkt als drop-in component in elke statische HTML-pagina.

---

## Bestanden

| Bestand | Functie |
|---|---|
| `editor.js` | IIFE module — alle logica, exposeert `window.P5Editor` |
| `editor.css` | Split-pane layout en stijl — volledig losstaand van site-CSS |

Beide bestanden zijn volledig onafhankelijk van het rest van het project. Kopieer ze as-is.

---

## Hoe het werkt

```
.p5-editor div in HTML
        ↓
editor.js detecteert via querySelectorAll('.p5-editor')
        ↓
Leest code uit <script type="text/p5"> of data-code attribuut
        ↓
Vervangt container innerHTML met split-pane UI
  ├── Textarea (links)  — bewerkbare code
  └── iframe (rechts)  — live preview via srcdoc
        ↓
Voert sketch uit in geïsoleerde iframe met eigen p5.js CDN-instantie
```

### Isolatie

De preview-iframe heeft **geen** verbinding met de omliggende pagina. Elke sketch laadt zijn eigen p5.js exemplaar via CDN. Fouten in de sketch crashen nooit de host-pagina.

### Herinitialisatie

De module luistert via een `MutationObserver` op `#content`. Zodra nieuwe `.p5-editor` elementen dynamisch worden ingevoegd (bijv. via `fetch` + `innerHTML`), worden ze automatisch geïnitialiseerd — geen handmatige aanroep nodig.

---

## Integratie in een HTML-pagina

### 1. Laad de bestanden

```html
<link rel="stylesheet" href="editor.css">
<script src="editor.js"></script>
```

`editor.js` initialiseert zichzelf zodra de DOM gereed is. Geen `new` of `init()` aanroep nodig (tenzij je dynamisch content laadt — zie [API](#api)).

### 2. Voeg een editor toe

**Optie A — `<script type="text/p5">` (aanbevolen voor meerdere regels)**

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

**Optie B — `data-code` attribuut (voor korte snippets)**

```html
<div class="p5-editor"
     data-code="function setup(){createCanvas(400,300);} function draw(){background(220);circle(mouseX,mouseY,40);}">
</div>
```

---

## Data-attributen

| Attribuut | Type | Standaard | Omschrijving |
|---|---|---|---|
| `data-width` | integer | `600` | Canvas breedte in pixels |
| `data-height` | integer | `400` | Canvas hoogte in pixels |
| `data-autorun` | `"true"` / `"false"` | `"true"` | Sketch automatisch uitvoeren bij laden |
| `data-code` | string | — | Inline code (gebruik `<script type="text/p5">` voor meerdere regels) |

---

## Code-modus: global p5.js

Code in de editor draait in **global mode** — geen `p.` prefix nodig:

```javascript
// ✓ Correct in de editor
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50);
}
```

Dit werkt omdat de code in een geïsoleerde iframe draait met zijn eigen p5.js instantie.

**Let op:** als je elders op dezelfde pagina p5.js instanties gebruikt met instance mode (`new p5(fn)`), heeft dat geen effect op de editor-iframes.

---

## API

`editor.js` exposeert `window.P5Editor`:

```javascript
// Initialiseer alle .p5-editor elementen op de pagina
// (wordt automatisch gedaan, maar handig na dynamisch laden)
window.P5Editor.init();

// Maak één editor handmatig aan
const id = window.P5Editor.create(containerElement, {
    code: 'function setup(){createCanvas(400,300);} function draw(){background(220);}',
    width: 400,
    height: 300,
    autorun: true
});

// Map met alle actieve editor instances (key = interne editorId)
window.P5Editor.editors; // Map<string, {container, codeTextarea, previewIframe, originalCode, runSketch}>
```

---

## UI-elementen (gegenereerde HTML)

```html
<div class="p5-editor-container">
    <div class="p5-editor-controls">
        <button class="p5-editor-btn p5-editor-run"   data-action="run">Run</button>
        <button class="p5-editor-btn p5-editor-reset" data-action="reset">Reset</button>
    </div>
    <div class="p5-editor-split">
        <div class="p5-editor-code-panel">
            <textarea class="p5-editor-code" id="editor-XXXXX-code"></textarea>
        </div>
        <div class="p5-editor-preview-panel">
            <iframe class="p5-editor-preview" id="editor-XXXXX-preview"></iframe>
        </div>
    </div>
</div>
```

Stijl via de klassen in `editor.css`, of overschrijf ze in je eigen CSS.

---

## p5.js versie aanpassen

De CDN-URL staat in `editor.js` in de iframe-HTML:

```javascript
<script src="https://cdn.jsdelivr.net/npm/p5@2.2.1/lib/p5.min.js"></script>
```

Pas het versienummer in de jsDelivr-URL aan als je expliciet naar een andere p5.js-release wilt pinnen.

---

## Aanpassen voor een andere library

De editor is niet exclusief voor p5.js. Vervang de CDN-URL in de iframe-HTML (`runSketch()`) door een andere library (bijv. Tone.js, Three.js, ml5.js). De rest van de editor werkt ongewijzigd.

```javascript
// In editor.js, zoek naar:
<script src="https://cdn.jsdelivr.net/npm/p5@2.2.1/lib/p5.min.js"></script>
// Vervang door bijv.:
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

---

## Foutafhandeling

Sketch-fouten worden opgevangen met `try/catch` en zichtbaar weergegeven in de preview-iframe:

```
Fout:
<foutmelding hier>
```

De host-pagina blijft altijd functioneel.

---

## Browserondersteuning

Vereist:
- `srcdoc` op `<iframe>` (alle moderne browsers)
- `MutationObserver` (alle moderne browsers)
- Geen polyfills nodig

Fallback: als `srcdoc` faalt, wordt een `Blob URL` gebruikt.

---

## Bekende beperkingen

- `loadImage()`, `loadFont()`, `loadSound()` en andere p5.js asset-laad functies werken **niet** in de editor zonder een externe URL, omdat de iframe geen toegang heeft tot het lokale bestandssysteem.
- De editor slaat code **niet** op tussen paginareloads. Gebruik `localStorage` als je dat wilt toevoegen.
- Tab-toets in de textarea springt naar het volgende focusbare element (browserstandaard). Tab-inspringing werkt niet automatisch.
