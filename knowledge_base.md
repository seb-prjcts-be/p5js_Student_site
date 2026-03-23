# Knowledge Base - p5.js Cursus Website

## Code Insights & Technische Details

### Router Implementatie

De router gebruikt hash-based routing:
```javascript
window.addEventListener('hashchange', loadOnderwerp);
```

**Waarom hash routing?**
- Werkt zonder server-side configuratie
- Browser back/forward buttons werken automatisch
- Bookmarkable URLs
- Geen page reload nodig

**Hash format**: `#onderwerp-id` (bijv. `#basis-p5js`)

### Data Structuur

Onderwerpen worden opgeslagen als JavaScript objecten:
```javascript
{
    id: "unieke-id",           // Voor routing
    titel: "Titel",            // Display naam
    samenvatting: "...",       // Voor zoekfunctie
    tags: ["tag1", "tag2"],    // Voor zoekfunctie
    inhoudHtml: "..."          // HTML content
}
```

**Design beslissing**: HTML als string in plaats van aparte HTML bestanden
- **Voordeel**: Alles in één bestand, makkelijker te onderhouden
- **Nadeel**: Minder handig voor grote content blokken
- **Alternatief**: Aparte HTML bestanden per onderwerp (niet gekozen voor eenvoud)

### p5.js Voorbeeld Loading

**Probleem**: Meerdere p5.js sketches op één pagina kunnen conflicteren

**Oplossing**: 
1. Dynamisch scripts laden per pagina
2. p5 instances maken per container element
3. Oude instances verwijderen bij navigatie

**Code flow**:
```javascript
loadP5Examples() → find containers → loadExample() → create p5 instance
```

**Belangrijk**: p5.js instances moeten gekoppeld worden aan een DOM element om conflicten te voorkomen.

### Zoekfunctie Algoritme

**Implementatie**: Eenvoudige string matching
```javascript
onderwerp.titel.toLowerCase().includes(query)
```

**Waarom niet complexer?**
- Voor deze scope is eenvoudige matching voldoende
- Performance is goed genoeg voor ~10 onderwerpen
- Geen fuzzy matching nodig voor leerlingen

**Zoekgebied**:
1. Titel (hoogste prioriteit)
2. Samenvatting
3. Tags (elk tag afzonderlijk)

### CSS Grid Layout

**Grid structuur**:
```css
grid-template-areas: 
    "header header"
    "nav search"
    "nav content"
    "footer footer";
```

**Voordelen**:
- Duidelijke structuur
- Eenvoudig responsive te maken
- Geen floats of positioning hacks nodig

**Responsive breakpoint**: 768px
- Onder 768px: alles stapelt verticaal
- Boven 768px: sidebar + content naast elkaar

### p5.js CDN Keuze

**Gebruikt**: cdnjs.cloudflare.com
- **Reden**: Betrouwbaar, snel, wereldwijd CDN
- **Versie**: 1.7.0 (stabiel)
- **Alternatief**: Lokale copy (niet nodig voor deze use case)

### Code Organisatie

**Functie groepering**:
1. Data definitie (onderwerpen array)
2. Router functies
3. Render functies
4. Zoekfunctie
5. p5.js loading
6. Initialisatie

**Waarom deze volgorde?**
- Data eerst (wordt gebruikt door andere functies)
- Router en render (core functionaliteit)
- Zoek en loading (extra features)
- Initialisatie laatste (roept alles aan)

### Error Handling

**Huidige implementatie**: Minimale error handling
- Script loading errors worden gelogd naar console
- Ontbrekende voorbeelden worden genegeerd (geen crash)

**Verbetering mogelijk**: 
- Gebruikersvriendelijke error messages
- Fallback content bij ontbrekende voorbeelden

### Performance Overwegingen

**Lazy loading**: p5.js voorbeelden worden alleen geladen wanneer nodig
- **Voordeel**: Snellere initiële page load
- **Trade-off**: Kleine vertraging bij eerste keer bekijken onderwerp

**Script caching**: Scripts worden gecached na eerste load
- Browser cache zorgt hiervoor automatisch
- Geen extra implementatie nodig

### Browser Compatibiliteit

**Getest/Verwacht te werken**:
- Chrome/Edge (moderne versies)
- Firefox (moderne versies)
- Safari (moderne versies)

**Niet getest**:
- IE11 (niet ondersteund - gebruikt moderne JavaScript)
- Oudere browsers (geen polyfills toegevoegd)

**Moderne features gebruikt**:
- ES6+ (let, const, arrow functions, template literals)
- CSS Grid
- addEventListener

### Security Overwegingen

**Geen server-side code**: Geen security risico's van server-side
**Client-side alleen**: 
- XSS risico bij `innerHTML` gebruik
- **Mitigatie**: Content is statisch, geen user input in HTML
- **Toekomst**: Overweeg `textContent` waar mogelijk

### Onderhoudbaarheid

**Code structuur**: 
- Duidelijke functie namen
- Comments waar nodig
- Consistente formatting

**Content updates**:
- Eenvoudig: pas `onderwerpen` array aan
- Geen build stap nodig
- Direct zichtbaar na refresh

**Nieuwe features toevoegen**:
- Duidelijke scheiding tussen data, routing, rendering
- Makkelijk uit te breiden zonder bestaande code te breken

## Lessen Geleerd

1. **p5.js instances**: Altijd koppelen aan container element
2. **Hash routing**: Eenvoudig maar krachtig voor statische sites
3. **Data structuur**: JavaScript objecten zijn flexibeler dan verwacht
4. **CSS Grid**: Moderne layout oplossing, veel eenvoudiger dan floats
5. **Dynamisch script loading**: Werkt goed maar vereist aandacht voor timing

## Bekende Beperkingen

1. **PDF content**: Niet automatisch geëxtraheerd (handmatig overgenomen)
2. **Zoekfunctie**: Geen fuzzy matching of typo-tolerantie
3. **Offline**: Werkt alleen online (geen Service Worker)
4. **Progress**: Geen voortgang tracking
5. **Code editor**: Geen in-browser code editing mogelijkheid

## Tips voor Gebruikers

1. **Navigatie**: Gebruik sidebar of zoekfunctie
2. **Voorbeelden**: Klik op voorbeelden om te zien hoe code werkt
3. **Zoeken**: Minimaal 2 karakters nodig voor zoekresultaten
4. **Bookmarks**: Je kunt direct naar onderwerp bookmarken via URL hash

