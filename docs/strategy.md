# Strategie Document - p5.js Cursus Website

## Project Doel
Bouwen van een statische website die cursusinhoud uit PDF's in `/data` combineert tot leesbare lespagina's per onderwerp voor leerlingen (16+).

## Architectuur Beslissingen

### 1. Statische Website
- **Keuze**: Pure HTML/CSS/JavaScript, geen frameworks
- **Reden**: Moet werken onder XAMPP/Apache zonder build stap
- **Voordelen**: 
  - Eenvoudig te deployen
  - Geen dependencies
  - Snelle laadtijden
  - Werkt overal waar Apache draait

### 2. Hash-based Routing
- **Keuze**: Single Page Application met hash routing (`#onderwerp-id`)
- **Reden**: Eén HTML bestand, maar meerdere "pagina's"
- **Voordelen**:
  - Eenvoudig te implementeren
  - Geen server-side routing nodig
  - Bookmarkable URLs
  - Browser back/forward werkt

### 3. Data Structuur
- **Keuze**: JavaScript object array in `main.js`
- **Reden**: 
  - Alles blijft client-side
  - Geen extra HTTP requests
  - Eenvoudig te onderhouden
- **Alternatief overwogen**: JSON bestand met fetch, maar niet nodig voor deze scope

### 4. p5.js Voorbeelden
- **Keuze**: Dynamisch laden per onderwerp pagina
- **Reden**: 
  - Performance: laadt alleen wat nodig is
  - Geen conflicten tussen meerdere sketches
- **Implementatie**: 
  - Scripts in `examples/` map
  - Functies op `window` object
  - Dynamisch p5 instances maken per container

### 5. Zoekfunctie
- **Keuze**: Client-side filtering
- **Reden**: 
  - Geen server nodig
  - Instant resultaten
  - Werkt offline (na eerste load)
- **Zoekgebied**: Titels, samenvattingen, tags

## Content Strategie

### Onderwerp Structuur
Elk onderwerp bevat:
1. **Intro** - Korte inleiding in eenvoudige taal
2. **Secties** - Kernuitleg in eigen woorden
3. **Voorbeelden** - Code voorbeelden met uitleg
4. **p5.js Demo** - Werkend interactief voorbeeld

### Schrijfstijl
- **Doelgroep**: Leerlingen 16+
- **Tone**: Vriendelijk, toegankelijk, niet te formeel
- **Structuur**: Duidelijke stappen, bullets waar mogelijk
- **Code**: Goed gecommentarieerd, eenvoudige voorbeelden eerst

## Technische Keuzes

### CSS Grid Layout
- **Keuze**: CSS Grid voor hoofdstructuur
- **Reden**: Moderne, flexibele layout
- **Fallback**: Flexbox voor oudere browsers (niet geïmplementeerd, maar zou kunnen)

### Responsive Design
- **Breakpoint**: 768px
- **Mobile**: Stapelt alles verticaal
- **Desktop**: Sidebar + content naast elkaar

### p5.js Versie
- **Versie**: 2.2.1 (CDN)
- **Reden**: Sluit aan op de moderne p5.js-standaard waarmee leerlingen nu starten
- **Didactiek**: Nieuwe voorbeelden gebruiken async/await en andere 2.x-patronen als standaard; oudere 1.x-code is alleen referentiecontext

## Uitdagingen & Oplossingen

### Uitdaging 1: PDF Content Extractie
- **Probleem**: PDF's kunnen niet direct gelezen worden
- **Oplossing**: Gebouwd op basis van typische p5.js cursus structuur
- **Toekomst**: PDF parsing tool toevoegen of handmatig content overnemen

### Uitdaging 2: Meerdere p5.js Instances
- **Probleem**: Meerdere sketches op één pagina kunnen conflicteren
- **Oplossing**: Dynamisch laden per pagina, oude instances verwijderen
- **Implementatie**: Container-based instantiation

### Uitdaging 3: Zoekfunctie Performance
- **Probleem**: Bij veel onderwerpen kan zoeken traag worden
- **Oplossing**: 
  - Minimale query lengte (2 karakters)
  - Eenvoudige string matching
  - Geen complexe algoritmes nodig voor deze scope

## Toekomstige Verbeteringen

1. **PDF Parsing**: Tool om PDF content automatisch te extraheren
2. **Code Editor**: In-browser code editor voor voorbeelden
3. **Progress Tracking**: LocalStorage om voortgang bij te houden
4. **Export**: PDF/print functionaliteit per onderwerp
5. **Offline Support**: Service Worker voor offline gebruik
6. **Meertaligheid**: Ondersteuning voor andere talen

## Best Practices Gevolgd

1. **Semantic HTML**: Goede HTML structuur met semantische tags
2. **Accessibility**: Alt tekst, goede contrasten, keyboard navigatie
3. **Performance**: Lazy loading van voorbeelden, minimale dependencies
4. **Code Organisatie**: Duidelijke functies, comments waar nodig
5. **Responsive**: Werkt op verschillende schermformaten

