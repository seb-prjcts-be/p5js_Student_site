# p5.js Cursus Website

Een statische website met een complete p5.js cursus voor leerlingen (16+), gebouwd met HTML, CSS en JavaScript.

## Installatie onder XAMPP

1. **Kopieer de map naar htdocs**
   - Kopieer de hele `p5_cursus_site` map naar `C:\xampp\htdocs\`
   - Of gebruik de map waar je XAMPP hebt geïnstalleerd

2. **Start Apache**
   - Open XAMPP Control Panel
   - Start de Apache service

3. **Open de website**
   - Open je browser
   - Ga naar: `http://localhost/p5_cursus_site/`
   - Of als je de map direct als documentroot gebruikt: `http://localhost/`

## Structuur

```
p5_cursus_site/
├── index.html          # Hoofdpagina met navigatie en content
├── style.css           # Styling voor de hele website
├── main.js             # JavaScript met router, zoekfunctie en data
├── editor.js           # p5.js live editor module
├── editor.css          # Styling voor de editor
├── content/            # HTML content bestanden per onderwerp
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
│   └── p5js-2.0.html
├── examples/           # p5.js voorbeelden per onderwerp
│   ├── example-over-p5js.js
│   ├── example-basis.js
│   ├── example-interactie.js
│   ├── example-3d.js
│   └── example-p5js2.js
├── data/               # Cursus documenten (PDF's)
│   ├── Lab44_EDU - p5.js_FULL_def_Update_25.pdf
│   └── p5js2_handleiding.pdf
└── README.md           # Deze file
```

## Functionaliteiten

### Navigatie
- Sidebar met alle onderwerpen
- Hash-based routing (bijv. `#basis-p5js`)
- Actieve onderwerp wordt gemarkeerd
- Categorieën tonen geen aantalteller meer, alleen naam en open/dicht-icoon

### Zoekfunctie
- Client-side zoeken in titels, samenvattingen en tags
- Resultaten worden getoond met highlights zonder extra spatie binnen woorden
- Klik op resultaat om naar onderwerp te gaan

### Trefwoordenkolom
- Rechterkolom met trefwoorden per onderwerp
- Tags verschijnen in de volgorde van `onderwerp.tags`
- Bovenste trefwoordenlijst gebruikt compacte tagknoppen
- De sidebar-DOM blijft bewust eenvoudig: directe `.tags-chip-flow` en `#tag-context`
- Klik op een tag om gerelateerde secties, bredere trefwoorden en `Gerelateerde onderwerpen` te tonen

### Layout
- Desktop gebruikt de volle breedte van het scherm
- Verdeling op desktop is ongeveer 20% navigatie, 50% inhoud en 30% trefwoordenkolom
- Op smallere schermen stapelt de layout weer onder elkaar

### Onderwerpen
De cursus bevat de volgende onderwerpen (opgesplitst in kleinere pagina's):

**Basis:**
1. **Generative Design & Geschiedenis** - Geschiedenis van creative coding
2. **Over p5.js** - Introductie tot p5.js en Processing
3. **setup() en draw()** - De twee belangrijkste functies
4. **Vormen Tekenen** - Cirkels, rechthoeken, lijnen, etc.
5. **Kleur** - RGB, HSB, transparantie
6. **Variabelen** - Waarden opslaan en gebruiken
7. **If-Statements** - Beslissingen maken
8. **Loops** - Code herhalen
9. **Functies** - Herbruikbare code

**Interactie & Gevorderd:**
10. **Muis Interactie** - Reageren op muisbewegingen
11. **Toetsenbord Input** - Toetsenbord besturing
12. **Animatie** - Beweging en tijd
13. **Arrays** - Meerdere waarden opslaan
14. **3D Basis** - WEBGL en 3D graphics
15. **Moderne p5.js** - Async assets, pointer input, curves en shaders

### p5.js Voorbeelden
Elk onderwerp heeft werkende p5.js voorbeelden die direct in de pagina draaien. De voorbeelden worden dynamisch geladen wanneer je naar een onderwerp navigeert.

## Technische Details

### Geen Build Stap Nodig
- Pure HTML/CSS/JavaScript
- Geen Node.js, bundler of build tools nodig
- Werkt direct onder Apache/XAMPP

### p5.js CDN
De website gebruikt p5.js via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/p5@2.2.3/lib/p5.min.js"></script>
```

Alle nieuwe lesvoorbeelden vertrekken van moderne p5.js 2.x. Oudere patronen zoals `preload()` mogen nog vermeld worden, maar alleen als context bij bestaand materiaal.

### Browser Ondersteuning
- Moderne browsers (Chrome, Firefox, Edge, Safari)
- Werkt op desktop en tablet
- Responsive design voor verschillende schermformaten

## Aanpassen van Content

### Nieuwe Onderwerp Toevoegen

1. **Maak een HTML bestand** in de `content/` map:
   - Bestandsnaam: `mijn-onderwerp.html`
   - Gebruik dezelfde structuur als andere content bestanden

2. **Voeg het onderwerp toe** aan de `onderwerpen` array in `main.js`:

```javascript
{
    id: "mijn-onderwerp",
    titel: "Mijn Onderwerp",
    samenvatting: "Korte beschrijving",
    tags: ["tag1", "tag2", "tag3"],
    contentFile: "content/mijn-onderwerp.html",
    categorie: "p5.js"
}
```

3. **HTML Structuur** - Gebruik deze structuur in je content bestand:

```html
<div class="intro">
    <p>Korte inleiding...</p>
</div>

<section>
    <h2>Titel Sectie</h2>
    <p>Content...</p>
    
    <h3>Subsectie</h3>
    <pre><code>// Code voorbeeld</code></pre>
</section>

<div class="p5-example">
    <h3>Voorbeeld</h3>
    <div class="p5-example-container">
        <div class="p5-canvas-wrapper" id="example-mijn-voorbeeld"></div>
    </div>
</div>
```

### Nieuw p5.js Voorbeeld Toevoegen
1. Maak een nieuw bestand in `examples/` (bijv. `example-mijn-voorbeeld.js`)
2. Gebruik het volgende template:

```javascript
window.sketch_example_mijn_voorbeeld = function(p) {
    p.setup = function() {
        p.createCanvas(600, 400);
    };

    p.draw = function() {
        p.background(220);
        // Je code hier
    };
};
```

3. Voeg een div toe in het `content/<id>.html` fragment van je onderwerp:
```html
<div class="p5-canvas-wrapper" id="example-mijn-voorbeeld"></div>
```

### p5.js Live Editor Toevoegen

Je kunt een interactieve code editor toevoegen waar leerlingen direct kunnen experimenteren:

**Optie 1: Inline code (kort)**
```html
<div class="p5-editor" data-code="function setup() { createCanvas(400, 300); } function draw() { background(220); circle(mouseX, mouseY, 50); }">
</div>
```

**Optie 2: Code in script tag (aanbevolen voor langere code)**
```html
<div class="p5-editor" data-width="600" data-height="400" data-autorun="true">
  <script type="text/p5">
function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(240);
  circle(mouseX, mouseY, 50);
}
  </script>
</div>
```

**Data-attributen:**
- `data-code`: Startcode (alternatief voor script tag)
- `data-width`: Canvas breedte (default: 600)
- `data-height`: Canvas hoogte (default: 400)
- `data-autorun`: Auto-run bij laden (default: true, gebruik "false" om uit te schakelen)

De editor heeft automatisch Run en Reset knoppen. Leerlingen kunnen de code aanpassen en direct zien wat er gebeurt!

## Licentie

Deze cursus website is gemaakt voor educatieve doeleinden.

