# AI-prompt: p5.js Live Editor bouwen

Gebruik deze prompt om de editor te laten nabouwen, aanpassen of uitbreiden in een nieuw project.

---

## Basisprompt — volledige editor from scratch

```
Bouw een zelfstandige live code editor voor p5.js sketches. Geen frameworks, geen build tools — alleen vanilla HTML, CSS en JavaScript.

Vereisten:

1. **Twee bestanden**: `editor.js` (IIFE module) en `editor.css` (split-pane stijl).

2. **Activering via HTML-klasse**: elk element met klasse `.p5-editor` wordt automatisch een editor.

3. **Code-invoer via twee methodes**:
   - `<script type="text/p5">` binnen het container-element (voor meerdere regels)
   - `data-code="..."` attribuut op het container-element (voor korte snippets)

4. **Data-attributen**: `data-width` (int), `data-height` (int), `data-autorun` ("true"/"false").

5. **Split-pane UI**: textarea links (bewerkbaar), iframe rechts (live preview).

6. **Run-knop**: voert de code uit in de iframe via `srcdoc`.

7. **Reset-knop**: herstelt de originele code en voert opnieuw uit.

8. **Iframe-isolatie**: de preview laadt p5.js 2.2.1 van CDN in een volledig geïsoleerde iframe. Geen gedeelde state met de host-pagina.

9. **Foutafhandeling**: sketch-fouten worden opgevangen met try/catch en getoond als leesbare melding in de preview, zonder de host-pagina te crashen.

10. **Publieke API**: `window.P5Editor.init()` en `window.P5Editor.create(el, options)`.

11. **Auto-init**: initialiseert bij DOMContentLoaded én luistert via MutationObserver op dynamisch toegevoegde editors (handig bij SPA's die content via fetch laden).

12. **Code-modus in iframe**: global p5.js mode (geen `p.` prefix). Instance mode is niet nodig omdat elke iframe zijn eigen p5 instantie heeft.

Stijl: minimalistisch, zwart-wit, geen ronde hoeken. De editor-stijl mag niet lekken naar de rest van de pagina.
```

---

## Aanpassingsprompts

### Andere library (bijv. Three.js)

```
Pas de p5.js live editor aan voor Three.js. Vervang de p5.js CDN-URL in de iframe-HTML door Three.js r128. De textarea accepteert nu vanilla Three.js code (geen p5.js functies). Pas de foutmelding aan zodat die Three.js-fouten duidelijk toont.
```

### Tab-toets als inspringing

```
Voeg tab-ondersteuning toe aan de textarea in de p5.js editor. Wanneer de gebruiker Tab drukt in de textarea, voeg dan 2 spaties in op de cursorpositie in plaats van focus te verplaatsen naar het volgende element.
```

### Meerdere editors met gedeelde staat

```
Breid de p5.js live editor uit zodat editors een variabele kunnen delen via een globaal `window.__editorState` object. Voeg een optioneel `data-shared="true"` attribuut toe. Editors met dit attribuut lezen en schrijven naar dezelfde state.
```

### Code opslaan in localStorage

```
Voeg automatisch opslaan toe aan de p5.js live editor. Wanneer de gebruiker code wijzigt, sla die op in localStorage met de editor-ID als key. Bij laden: herstel de opgeslagen code als die beschikbaar is. Voeg een "Wis opgeslagen code" knop toe naast Reset.
```

### Syntaxkleuring toevoegen

```
Voeg basis syntaxkleuring toe aan de p5.js live editor zonder externe dependencies. Gebruik een transparante `div` als overlay boven de textarea voor de kleuring (vergelijkbaar met de aanpak van Prism.js overlays). Kleur: keywords blauw, strings groen, comments grijs, p5.js-functies paars.
```

### Volledig scherm knop

```
Voeg een "Volledig scherm" knop toe aan de p5.js editor-toolbar. Klik hierop wisselt de editor naar een fullscreen overlay (100vw × 100vh) met Escape als sluiten. De preview-iframe schaalt mee.
```

---

## Context voor de AI: hoe de editor werkt

Geef dit mee als context bij complexere aanpassingsvragen:

```
De editor werkt als volgt:

- editor.js is een IIFE (Immediately Invoked Function Expression) die window.P5Editor exposeert.
- Elke .p5-editor div wordt door createEditor() omgezet naar een split-pane UI.
- Code staat in een <textarea class="p5-editor-code">.
- De preview is een <iframe class="p5-editor-preview"> met srcdoc.
- De iframe-HTML bevat een volledige HTML-pagina met p5.js CDN en de gebruikerscode in een try/catch.
- Originele code wordt opgeslagen in de variabele `originalCode` voor de Reset-functie.
- Elke editor krijgt een unieke ID (editor-XXXXXXX) voor getElementById.
- Een MutationObserver herinitialiseerd editors die dynamisch worden ingevoegd.
- window.P5Editor.editors is een Map met alle actieve instances.
```

---

## Checklist bij hergebruik in een nieuw project

- [ ] `editor.js` en `editor.css` gekopieerd naar het nieuwe project
- [ ] `<link rel="stylesheet" href="editor.css">` in `<head>`
- [ ] `<script src="editor.js"></script>` vóór `</body>` of in `<head>`
- [ ] p5.js CDN-versie in `editor.js` regel 91 aangepast indien gewenst
- [ ] Getest dat `window.P5Editor.init()` aangeroepen wordt na dynamisch laden van content
- [ ] `loadImage()` / `loadFont()` vervangen door externe URLs (lokale assets werken niet in iframe)
- [ ] Responsief gedrag getest op mobiel (editor.css heeft breakpoints op 768px en 480px)
