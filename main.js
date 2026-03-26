// === i18n - tweetalig NL/EN ===
let currentLang = localStorage.getItem('lang') || 'nl';

const i18n = {
    nl: {
        siteTitle: "p5.js Cursus",
        subtitle: "Creative coding voor creatieve leerlingen",
        pageTitle: "p5.js Cursus - Leer Creative Coding",
        searchPlaceholder: "Zoek op trefwoord...",
        navHeading: "Onderwerpen",
        noResults: "Geen resultaten gevonden.",
        loading: "Laden...",
        topicNotFound: "Topic data niet gevonden. Controleer of het JSON-bestand bestaat.",
        contentNotFound: "Content niet gevonden. Maak een HTML bestand aan in de content/ map.",
        loadError: "Er is een fout opgetreden bij het laden van de content.",
        relatedTopics: "Gerelateerde onderwerpen",
        intro: "Intro",
        example: "Voorbeeld",
        section: "Sectie",
        contains: "bevat",
        shared: "gedeeld",
        relatedVia: "verwant via",
        welcomeTitle: "Welkom bij de p5.js Cursus",
        welcomeText1: "Deze cursus helpt je stap voor stap creative coding leren met p5.js. Kies een onderwerp uit het menu om te beginnen, of gebruik de zoekfunctie om specifieke onderwerpen te vinden.",
        welcomeText2: "p5.js is een JavaScript bibliotheek die creative coding toegankelijk maakt. Je kunt er interactieve animaties, visuele kunst, games en meer mee maken.",
        welcomeQuote: "Creative coding is vandaag een vorm van geletterdheid: je leert niet alleen tools gebruiken, je leert systemen begrijpen, sturen en verbeelden. In een tijd waarin alles software wordt, van beeld tot beleid, geeft creative coding je agency: je kan experimenteren, kritisch kijken naar algoritmes, en je eigen taal bouwen om ideeën zichtbaar te maken.",
        welcomeQuote2: "En net als in de allegorie met de boeken is \"alles begrijpen\" niet het punt. Elke schets, elke mislukte iteratie en elke kleine tweak spoelt iets door je denken: patronen, timing, gevoel voor structuur, en het vertrouwen dat je een complex probleem kan kneden tot iets dat werkt, of op z'n minst iets dat spreekt. De langetermijnwinst zit in die herhaalde aha's: een brein dat wendbaar wordt, dat verbanden ziet, en dat met onzekerheid kan spelen, precies de spier die je nodig hebt in een wereld die blijft veranderen.",
        welcomeAuthor: "Frederick De Bleser - Luca Gent",
        fontSizeLabel: "Lettergrootte",
        fontSizeSmall: "Kleine letters",
        fontSizeMedium: "Normale letters",
        fontSizeLarge: "Grote letters",
        editorError: "Fout:",
        editorPreviewError: "Fout bij laden van preview:",
        learningGoals: "Leerdoelen",
        exercises: "Oefeningen",
        hint: "Hint",
        starterCode: "Startcode",
        niveauLabels: { 1: 'Nabootsen', 2: 'Variëren', 3: 'Creëren' },
        niveauBeschrijvingen: {
            1: 'Pas bestaande code aan - verander één waarde en bekijk het resultaat.',
            2: 'Breid een voorbeeld uit met eigen aanpassingen.',
            3: 'Bouw iets nieuws met de concepten die je hebt geleerd.'
        },
        categories: {
            "Introductie": "Introductie",
            "p5.js basis": "p5.js basis",
            "p5.js +": "p5.js +",
            "Code concepten": "Code concepten",
            "Strudel": "Strudel",
            "AI": "AI",
            "Inspiratie": "Inspiratie"
        },
        tags: "Tags"
    },
    en: {
        siteTitle: "p5.js Course",
        subtitle: "Creative coding for creative students",
        pageTitle: "p5.js Course - Learn Creative Coding",
        searchPlaceholder: "Search by keyword...",
        navHeading: "Topics",
        noResults: "No results found.",
        loading: "Loading...",
        topicNotFound: "Topic data not found. Check if the JSON file exists.",
        contentNotFound: "Content not found. Create an HTML file in the content/ folder.",
        loadError: "An error occurred while loading the content.",
        relatedTopics: "Related topics",
        intro: "Intro",
        example: "Example",
        section: "Section",
        contains: "contains",
        shared: "shared",
        relatedVia: "related via",
        welcomeTitle: "Welcome to the p5.js Course",
        welcomeText1: "This course helps you learn creative coding step by step with p5.js. Pick a topic from the menu to get started, or use the search to find specific subjects.",
        welcomeText2: "p5.js is a JavaScript library that makes creative coding accessible. You can create interactive animations, visual art, games and more.",
        welcomeQuote: "Creative coding is a form of literacy today: you don't just learn to use tools, you learn to understand, steer and imagine systems. In a time where everything becomes software, from visuals to policy, creative coding gives you agency: you can experiment, look critically at algorithms, and build your own language to make ideas visible.",
        welcomeQuote2: "And just like the allegory of the books, \"understanding everything\" isn't the point. Every sketch, every failed iteration and every little tweak flushes something through your thinking: patterns, timing, a feel for structure, and the confidence that you can shape a complex problem into something that works, or at least something that speaks. The long-term gain lies in those repeated aha moments: a mind that becomes agile, that sees connections, and that can play with uncertainty - exactly the muscle you need in a world that keeps changing.",
        welcomeAuthor: "Frederick De Bleser - Luca Gent",
        fontSizeLabel: "Font size",
        fontSizeSmall: "Small text",
        fontSizeMedium: "Normal text",
        fontSizeLarge: "Large text",
        editorError: "Error:",
        editorPreviewError: "Error loading preview:",
        learningGoals: "Learning goals",
        exercises: "Exercises",
        hint: "Hint",
        starterCode: "Starter code",
        niveauLabels: { 1: 'Imitate', 2: 'Vary', 3: 'Create' },
        niveauBeschrijvingen: {
            1: 'Modify existing code - change one value and see the result.',
            2: 'Extend an example with your own tweaks.',
            3: 'Build something new with the concepts you have learned.'
        },
        categories: {
            "Introductie": "Introduction",
            "p5.js basis": "p5.js basics",
            "p5.js +": "p5.js +",
            "Code concepten": "Code concepts",
            "Strudel": "Strudel",
            "AI": "AI",
            "Inspiratie": "Inspiration"
        },
        tags: "Tags"
    }
};

// Tag-vertalingen: NL → EN (tags die al Engels zijn, hoeven hier niet in)
const tagTranslations = {
    "geschiedenis": "history",
    "vormen": "shapes",
    "kleur": "colour",
    "variabelen": "variables",
    "berekeningen": "calculations",
    "operatoren": "operators",
    "rekenen": "arithmetic",
    "voorwaarden": "conditions",
    "logica": "logic",
    "beslissingen": "decisions",
    "herhalen": "repetition",
    "patronen": "patterns",
    "functies": "functions",
    "herbruikbaar": "reusable",
    "organisatie": "organisation",
    "muis": "mouse",
    "interactie": "interaction",
    "toetsenbord": "keyboard",
    "animatie": "animation",
    "beweging": "movement",
    "tijd": "time",
    "datum": "date",
    "klok": "clock",
    "lijsten": "lists",
    "opslag": "storage",
    "rotatie": "rotation",
    "transformatie": "transformation",
    "instantie": "instance",
    "methoden": "methods",
    "willekeur": "randomness",
    "organisch": "organic",
    "textuur": "texture",
    "landschap": "landscape",
    "afbeelding": "image",
    "tekst": "text",
    "typografie": "typography",
    "geluid": "sound",
    "muziek": "music",
    "ritme": "rhythm",
    "introductie": "introduction",
    "basis": "basics",
    "fundamenten": "fundamentals",
    "cellulair automaat": "cellular automaton",
    "binaire regels": "binary rules",
    "code concepten": "code concepts",
    "zwerm": "swarm",
    "vectoren": "vectors",
    "emergentie": "emergence",
    "cirkels": "circles",
    "overlapping": "overlap",
    "groeien": "growing",
    "algoritme": "algorithm",
    "simulatie": "simulation",
    "palet": "palette",
    "harmonie": "harmony",
    "bereik": "range",
    "schildpad": "turtle",
    "spiraal": "spiral",
    "ster": "star",
    "zelfverwijzing": "self-reference",
    "recursie": "recursion",
    "boom": "tree",
    "zelfde patroon": "same pattern",
    "stopvoorwaarde": "base case",
    "toeval": "chance",
    "stappen": "steps",
    "pad": "path",
    "golven": "waves",
    "wiskunde": "mathematics",
    "rooster": "grid",
    "raster": "grid",
    "algoritmes": "algorithms",
    "kunstgeschiedenis": "art history",
    "instructie": "instruction",
    "conceptuele kunst": "conceptual art",
    "lijnen": "lines",
    "systeem": "system",
    "boeken": "books",
    "bronnen": "resources",
    "energie": "energy",
    "ecologie": "ecology",
    "klimaat": "climate",
    "duurzaamheid": "sustainability",
    "koffie": "coffee",
    "programmeren": "programming",
    "vergelijking": "comparison",
    "modellen": "models",
    "projectstructuur": "project structure",
    "1d automaten": "1d automata"
};

function t(key) {
    return i18n[currentLang][key] || i18n['nl'][key] || key;
}

function tTag(tag) {
    if (currentLang === 'nl') return tag;
    const lower = tag.toLowerCase();
    if (tagTranslations[lower]) {
        // Behoud hoofdlettergebruik van het origineel
        if (tag[0] === tag[0].toUpperCase() && tag[0] !== tag[0].toLowerCase()) {
            const translated = tagTranslations[lower];
            return translated[0].toUpperCase() + translated.slice(1);
        }
        return tagTranslations[lower];
    }
    return tag;
}

function tCat(categorie) {
    return i18n[currentLang].categories[categorie] || categorie;
}

function topicTitle(onderwerp) {
    if (currentLang !== 'nl' && onderwerp.en && onderwerp.en.titel) {
        return onderwerp.en.titel;
    }
    return onderwerp.titel;
}

function topicSummary(onderwerp) {
    if (currentLang !== 'nl' && onderwerp.en && onderwerp.en.samenvatting) {
        return onderwerp.en.samenvatting;
    }
    return onderwerp.samenvatting;
}

function topicContentFile(onderwerp) {
    if (currentLang !== 'nl' && onderwerp.contentFile) {
        return onderwerp.contentFile.replace('content/', 'content/en/');
    }
    return onderwerp.contentFile;
}

// Data structuur met alle onderwerpen
const onderwerpen = [
    {
        id: "generative-design",
        titel: "Generative design & geschiedenis",
        samenvatting: "Ontdek de geschiedenis van generative design, van John Whitney tot moderne creative coding.",
        en: {
            titel: "Generative design & history",
            samenvatting: "Discover the history of generative design, from John Whitney to modern creative coding."
        },
        tags: ["geschiedenis", "generative design", "Whitney", "fractals", "DEMO", "BYOB", "creative coding"],
        contentFile: "content/generative-design.html",
        categorie: "Introductie"
    },
    {
        id: "over-p5js",
        titel: "Over p5.js",
        samenvatting: "Wat is p5.js, waar komt het vandaan, en hoe gebruik je het?",
        en: {
            titel: "About p5.js",
            samenvatting: "What is p5.js, where does it come from, and how do you use it?"
        },
        tags: ["p5.js", "Processing", "editor", "reference", "projectstructuur", "introductie"],
        contentFile: "content/over-p5js.html",
        categorie: "Introductie"
    },
    {
        id: "setup-draw",
        titel: "setup() en draw()",
        samenvatting: "Leer de twee belangrijkste functies: setup() voor initialisatie en draw() voor animatie.",
        en: {
            titel: "setup() and draw()",
            samenvatting: "Learn the two most important functions: setup() for initialisation and draw() for animation."
        },
        tags: ["setup", "draw", "createCanvas", "frameRate", "background", "basis", "fundamenten", "canvas"],
        contentFile: "content/setup-draw.html",
        categorie: "p5.js basis"
    },
    {
        id: "vormen",
        titel: "Vormen tekenen",
        samenvatting: "Leer hoe je basisvormen tekent: cirkels, rechthoeken, lijnen en meer.",
        en: {
            titel: "Drawing shapes",
            samenvatting: "Learn how to draw basic shapes: circles, rectangles, lines and more."
        },
        tags: ["vormen", "ellipse", "rect", "line", "triangle", "arc", "quad", "beginShape", "vertex", "endShape", "splineVertex", "bezierVertex", "quadraticVertex", "basis"],
        contentFile: "content/vormen.html",
        categorie: "p5.js basis"
    },
    {
        id: "kleur",
        titel: "Kleur",
        samenvatting: "Ontdek hoe je kleuren gebruikt in p5.js: RGB, HSB, transparantie en meer.",
        en: {
            titel: "Colour",
            samenvatting: "Discover how to use colours in p5.js: RGB, HSB, transparency and more."
        },
        tags: ["kleur", "fill", "stroke", "background", "RGB", "HSB"],
        contentFile: "content/kleur.html",
        categorie: "p5.js basis"
    },
    {
        id: "variabelen",
        titel: "Variabelen",
        samenvatting: "Leer hoe je variabelen gebruikt om waarden op te slaan en je code flexibel te maken.",
        en: {
            titel: "Variables",
            samenvatting: "Learn how to use variables to store values and make your code flexible."
        },
        tags: ["variabelen", "let", "const", "width", "height", "windowWidth", "windowHeight", "windowResized", "data", "basis"],
        dataFile: "data/topics/variabelen.json",
        categorie: "p5.js basis"
    },
    {
        id: "berekeningen",
        titel: "Berekeningen",
        samenvatting: "Leer rekenen in p5.js: de vier basisoperatoren, modulo %, samengestelde operatoren en handige functies zoals map(), constrain() en dist().",
        en: {
            titel: "Calculations",
            samenvatting: "Learn arithmetic in p5.js: the four basic operators, modulo %, compound operators and handy functions like map(), constrain() and dist()."
        },
        tags: ["berekeningen", "operatoren", "modulo", "map", "constrain", "dist", "floor", "ceil", "round", "abs", "random", "%", "rekenen"],
        contentFile: "content/berekeningen.html",
        categorie: "p5.js basis"
    },
    {
        id: "if-statements",
        titel: "If-statements",
        samenvatting: "Maak beslissingen in je code met if-statements en voorwaarden.",
        en: {
            titel: "If statements",
            samenvatting: "Make decisions in your code with if statements and conditions."
        },
        tags: ["if", "else", "voorwaarden", "logica", "beslissingen"],
        contentFile: "content/if-statements.html",
        categorie: "p5.js basis"
    },
    {
        id: "loops",
        titel: "Loops",
        samenvatting: "Herhaal code met for-loops en while-loops om patronen te maken.",
        en: {
            titel: "Loops",
            samenvatting: "Repeat code with for loops and while loops to create patterns."
        },
        tags: ["loops", "for", "while", "herhalen", "patronen"],
        contentFile: "content/loops.html",
        categorie: "p5.js basis"
    },
    {
        id: "functies",
        titel: "Functies",
        samenvatting: "Maak herbruikbare code met functies. Organiseer je code en maak het overzichtelijker.",
        en: {
            titel: "Functions",
            samenvatting: "Create reusable code with functions. Organise your code and keep it clear."
        },
        tags: ["functies", "function", "herbruikbaar", "organisatie"],
        contentFile: "content/functies.html",
        categorie: "p5.js basis"
    },
    {
        id: "muis-interactie",
        titel: "Muis interactie",
        samenvatting: "Leer hoe je reageert op muisbewegingen en klikken.",
        en: {
            titel: "Mouse interaction",
            samenvatting: "Learn how to respond to mouse movements and clicks."
        },
        tags: ["muis", "mouseX", "mouseY", "pmouseX", "pmouseY", "mousePressed", "mouseDragged", "mouseReleased", "pointerPressed", "interactie", "events"],
        contentFile: "content/muis-interactie.html",
        categorie: "p5.js basis"
    },
    {
        id: "toetsenbord",
        titel: "Toetsenbord input",
        samenvatting: "Gebruik toetsenbord input om je sketches te besturen.",
        en: {
            titel: "Keyboard input",
            samenvatting: "Use keyboard input to control your sketches."
        },
        tags: ["toetsenbord", "keyboard", "keyPressed", "input"],
        contentFile: "content/toetsenbord.html",
        categorie: "p5.js +"
    },
    {
        id: "animatie",
        titel: "Animatie",
        samenvatting: "Maak animaties door waarden te veranderen in draw(). Leer over tijd, beweging en sinus/cosinus.",
        en: {
            titel: "Animation",
            samenvatting: "Create animations by changing values in draw(). Learn about time, movement and sine/cosine."
        },
        tags: ["animatie", "frameCount", "translate", "rotate", "angleMode", "beweging", "tijd", "millis", "sin", "cos", "tan"],
        contentFile: "content/animatie.html",
        categorie: "p5.js +"
    },
    {
        id: "datum-tijd",
        titel: "Datum en tijd",
        samenvatting: "Vraag de huidige datum en tijd op met year(), month(), day(), hour(), minute() en second(). Bouw klokken en tijdgestuurde sketches, geïnspireerd op John Maeda's 12 o'clocks (1996).",
        en: {
            titel: "Date and time",
            samenvatting: "Retrieve the current date and time with year(), month(), day(), hour(), minute() and second(). Build clocks and time-driven sketches, inspired by John Maeda's 12 o'clocks (1996)."
        },
        tags: ["datum", "tijd", "hour", "minute", "second", "year", "klok", "John Maeda", "12 o'clocks", "map", "angleMode"],
        contentFile: "content/datum-tijd.html",
        categorie: "p5.js +"
    },
    {
        id: "arrays",
        titel: "Arrays",
        samenvatting: "Gebruik arrays om meerdere waarden op te slaan en door te lopen.",
        en: {
            titel: "Arrays",
            samenvatting: "Use arrays to store multiple values and loop through them."
        },
        tags: ["arrays", "lijsten", "data", "opslag"],
        contentFile: "content/arrays.html",
        categorie: "p5.js +"
    },
    {
        id: "3d-basis",
        titel: "3D basis",
        samenvatting: "Ontdek 3D graphics met WEBGL. Leer 3D vormen tekenen en transformeren.",
        en: {
            titel: "3D basics",
            samenvatting: "Discover 3D graphics with WEBGL. Learn to draw and transform 3D shapes."
        },
        tags: ["3D", "WEBGL", "box", "sphere", "rotatie", "transformatie"],
        contentFile: "content/3d-basis.html",
        categorie: "p5.js +"
    },
    {
        id: "objecten",
        titel: "Objecten & classes",
        samenvatting: "Leer hoe je classes gebruikt om objecten te maken met eigen eigenschappen en gedrag. De basis van object-georiënteerd programmeren in p5.js.",
        en: {
            titel: "Objects & classes",
            samenvatting: "Learn how to use classes to create objects with their own properties and behaviour. The basics of object-oriented programming in p5.js."
        },
        tags: ["class", "object", "constructor", "OOP", "this", "instantie", "methoden"],
        contentFile: "content/objecten.html",
        categorie: "p5.js +"
    },
    {
        id: "noise",
        titel: "Noise & Perlin noise",
        samenvatting: "Ontdek noise(): een functie voor vloeiende, organische willekeur. Maak bewegende landschappen, texturen en flow fields.",
        en: {
            titel: "Noise & Perlin noise",
            samenvatting: "Discover noise(): a function for smooth, organic randomness. Create moving landscapes, textures and flow fields."
        },
        tags: ["noise", "Perlin noise", "willekeur", "organisch", "textuur", "flow field", "landschap"],
        contentFile: "content/noise.html",
        categorie: "p5.js +"
    },
    {
        id: "afbeeldingen",
        titel: "Afbeeldingen",
        samenvatting: "Leer afbeeldingen laden en tekenen met loadImage() en image(). Ontdek ook pixelmanipulatie en filters.",
        en: {
            titel: "Images",
            samenvatting: "Learn to load and draw images with loadImage() and image(). Also discover pixel manipulation and filters."
        },
        tags: ["afbeelding", "loadImage", "image", "pixels", "filter", "tint", "pixelArray"],
        contentFile: "content/afbeeldingen.html",
        categorie: "p5.js +"
    },
    {
        id: "text-typografie",
        titel: "Text & typografie",
        samenvatting: "Teken tekst op het canvas met text(), stel grootte en stijl in, en laad custom fonts met loadFont().",
        en: {
            titel: "Text & typography",
            samenvatting: "Draw text on the canvas with text(), set size and style, and load custom fonts with loadFont()."
        },
        tags: ["tekst", "text", "font", "typografie", "textSize", "textFont", "loadFont", "textAlign"],
        contentFile: "content/text-typografie.html",
        categorie: "p5.js +"
    },
    {
        id: "geluid",
        titel: "Geluid",
        samenvatting: "Voeg geluid toe aan je sketch met de p5.sound library: speel geluiden af, analyseer audio en maak visualisaties.",
        en: {
            titel: "Sound",
            samenvatting: "Add sound to your sketch with the p5.sound library: play sounds, analyse audio and create visualisations."
        },
        tags: ["geluid", "sound", "audio", "p5.sound", "loadSound", "SoundFile", "Amplitude", "FFT", "muziek"],
        contentFile: "content/geluid.html",
        categorie: "p5.js +"
    },
    {
        id: "strudel",
        titel: "Strudel: live coding muziek",
        samenvatting: "Leer live-coding muziek maken in je browser met Strudel: ritme, samples, noten en stack.",
        en: {
            titel: "Strudel: live coding music",
            samenvatting: "Learn to make live-coding music in your browser with Strudel: rhythm, samples, notes and stack."
        },
        tags: ["strudel", "live coding", "muziek", "samples", "ritme", "notes", "stack"],
        contentFile: "content/strudel.html",
        categorie: "Strudel"
    },
    {
        id: "1d-automaten",
        titel: "1D cellulaire automaten",
        samenvatting: "Een rij cellen volgt een simpele buurregel en groeit uit tot textielachtige, ritmische of chaotische patronen, zoals Rule 30 en Rule 110.",
        en: {
            titel: "1D cellular automata",
            samenvatting: "A row of cells follows a simple neighbour rule and grows into textile-like, rhythmic or chaotic patterns, such as Rule 30 and Rule 110."
        },
        tags: ["1d automaten", "rule 30", "rule 110", "cellulair automaat", "binaire regels", "code concepten"],
        contentFile: "content/1d-automaten.html",
        categorie: "Code concepten"
    },
    {
        id: "boids",
        titel: "Boids",
        samenvatting: "Zwermgedrag met drie regels: samenblijven, afstand houden en richting delen. Collectief gedrag zonder leider.",
        en: {
            titel: "Boids",
            samenvatting: "Flocking behaviour with three rules: stay together, keep distance and share direction. Collective behaviour without a leader."
        },
        tags: ["boids", "flocking", "zwerm", "vectoren", "emergentie", "agents", "code concepten"],
        contentFile: "content/boids.html",
        categorie: "Code concepten"
    },
    {
        id: "circle-packing",
        titel: "Circle packing",
        samenvatting: "Vul een canvas met zo veel mogelijk niet-overlappende cirkels die groeien tot ze elkaar of de rand raken.",
        en: {
            titel: "Circle packing",
            samenvatting: "Fill a canvas with as many non-overlapping circles as possible that grow until they touch each other or the edge."
        },
        tags: ["circle packing", "cirkels", "overlapping", "dist", "groeien", "generative", "algoritme"],
        contentFile: "content/circle-packing.html",
        categorie: "Code concepten"
    },
    {
        id: "game-of-life",
        titel: "Game of Life",
        samenvatting: "Vier simpele regels voor levende en dode cellen leveren werelden op met ritme, groei, instorting en onverwachte orde.",
        en: {
            titel: "Game of Life",
            samenvatting: "Four simple rules for living and dead cells produce worlds with rhythm, growth, collapse and unexpected order."
        },
        tags: ["game of life", "conway", "cellulair automaat", "simulatie", "emergentie", "code concepten"],
        contentFile: "content/game-of-life.html",
        categorie: "Code concepten"
    },
    {
        id: "kleurenfamilie",
        titel: "Kleurenfamilie",
        samenvatting: "Begrens willekeurige kleuren tot een klein venster per kanaal en maak zo een samenhangend kleurenpalet - zoals een textielontwerper een colorway kiest.",
        en: {
            titel: "Colour family",
            samenvatting: "Constrain random colours to a small window per channel to create a coherent colour palette - the way a textile designer picks a colourway."
        },
        tags: ["kleur", "RGB", "random", "bereik", "palet", "colorway", "raster", "harmonie"],
        contentFile: "content/kleurenfamilie.html",
        categorie: "Code concepten"
    },
    {
        id: "l-systems",
        titel: "L-systemen",
        samenvatting: "Genereer organische bomen en vertakkingen door simpele tekstregels telkens opnieuw te herschrijven: beeld als grammatica.",
        en: {
            titel: "L-systems",
            samenvatting: "Generate organic trees and branches by repeatedly rewriting simple text rules: image as grammar."
        },
        tags: ["l-system", "lindenmayer", "fractal", "turtle", "string rewriting", "generative", "code concepten"],
        contentFile: "content/l-systems.html",
        categorie: "Code concepten"
    },
    {
        id: "langtons-ant",
        titel: "Langton's Ant",
        samenvatting: "Een mier draait links of rechts afhankelijk van de tegel onder zich. Een minuscuul regelsysteem dat van orde naar chaos en weer terug kan gaan.",
        en: {
            titel: "Langton's Ant",
            samenvatting: "An ant turns left or right depending on the tile beneath it. A tiny rule system that can move from order to chaos and back again."
        },
        tags: ["langton", "ant", "cellulair automaat", "emergentie", "chaos", "rooster", "code concepten"],
        contentFile: "content/langtons-ant.html",
        categorie: "Code concepten"
    },
    {
        id: "lissajous",
        titel: "Lissajous-figuren",
        samenvatting: "Combineer twee sinusgolven tot vloeiende figuren en ontdek hoe verhoudingen, ritme en faseverschuiving zichtbaar worden in beeld.",
        en: {
            titel: "Lissajous figures",
            samenvatting: "Combine two sine waves into flowing figures and discover how ratios, rhythm and phase shift become visible in image."
        },
        tags: ["lissajous", "sinus", "parametrisch", "wiskunde", "animatie", "golven", "code concepten"],
        contentFile: "content/lissajous.html",
        categorie: "Code concepten"
    },
    {
        id: "quine",
        titel: "Quine",
        samenvatting: "Een programma dat zijn eigen broncode toont zonder bestanden te lezen. Zelfverwijzing als denkoefening in code.",
        en: {
            titel: "Quine",
            samenvatting: "A program that displays its own source code without reading files. Self-reference as a thought exercise in code."
        },
        tags: ["quine", "zelfverwijzing", "meta", "toString", "recursie", "code concepten"],
        contentFile: "content/quine.html",
        categorie: "Code concepten"
    },
    {
        id: "random-walk",
        titel: "Random walk",
        samenvatting: "Een punt zet stap voor stap willekeurige bewegingen. Simpel idee, verrassend rijke patronen: toeval wordt zichtbaar als spoor.",
        en: {
            titel: "Random walk",
            samenvatting: "A dot takes random steps one by one. A simple idea with surprisingly rich patterns: chance becomes visible as a trail."
        },
        tags: ["random walk", "toeval", "walker", "stappen", "pad", "simulatie", "code concepten"],
        contentFile: "content/random-walk.html",
        categorie: "Code concepten"
    },
    {
        id: "recursie",
        titel: "Recursie",
        samenvatting: "Een functie die zichzelf opnieuw oproept. Ideaal om vertakkingen, fractals en herhaling op meerdere schalen te begrijpen.",
        en: {
            titel: "Recursion",
            samenvatting: "A function that calls itself. Ideal for understanding branches, fractals and repetition at multiple scales."
        },
        tags: ["recursie", "fractal", "boom", "zelfde patroon", "functie", "stopvoorwaarde", "code concepten"],
        contentFile: "content/recursie.html",
        categorie: "Code concepten"
    },
    {
        id: "turtle",
        titel: "Turtle geometry",
        samenvatting: "Bestuur een denkbeeldige schildpad met forward, right en left en ontdek hoe korte regels kunnen uitgroeien tot patronen, spiralen en fractals.",
        en: {
            titel: "Turtle geometry",
            samenvatting: "Steer an imaginary turtle with forward, right and left and discover how short rules can grow into patterns, spirals and fractals."
        },
        tags: ["turtle", "schildpad", "logo", "papert", "forward", "spiraal", "ster", "fractal", "code concepten"],
        contentFile: "content/turtle.html",
        categorie: "Code concepten"
    },
    {
        id: "vera-molnar",
        titel: "Vera Molnar - code zonder computer",
        samenvatting: "Pionier van digitale esthetiek en generatieve kunst met een focus op raster, regels en variatie.",
        en: {
            titel: "Vera Molnar - code without a computer",
            samenvatting: "Pioneer of digital aesthetics and generative art with a focus on grids, rules and variation."
        },
        tags: ["generative art", "plotter", "raster", "algoritmes", "disorder", "kunstgeschiedenis"],
        contentFile: "content/vera-molnar.html",
        categorie: "Inspiratie"
    },
    {
        id: "sol-lewitt",
        titel: "Sol LeWitt - instructies als kunst",
        samenvatting: "Sol LeWitt schreef instructies naar musea in plaats van werken te maken. Code is ook een instructie - ontdek conceptuele kunst als algoritme.",
        en: {
            titel: "Sol LeWitt - instructions as art",
            samenvatting: "Sol LeWitt sent instructions to museums instead of creating works. Code is also an instruction - discover conceptual art as algorithm."
        },
        tags: ["sol lewitt", "instructie", "conceptuele kunst", "wall drawing", "algoritme", "lijnen", "systeem"],
        contentFile: "content/sol-lewitt.html",
        categorie: "Inspiratie"
    },
    {
        id: "inspiratie-links",
        titel: "Links & bronnen",
        samenvatting: "Alle links uit de cursus: inspirerende projecten, video's, boeken, bibliotheken, tools en datasets.",
        en: {
            titel: "Links & resources",
            samenvatting: "All links from the course: inspiring projects, videos, books, libraries, tools and datasets."
        },
        tags: ["links", "bronnen", "inspiratie", "boeken", "video", "community", "datasets", "bibliotheken"],
        contentFile: "content/inspiratie-links.html",
        categorie: "Inspiratie"
    },
    {
        id: "ai-ecologische-kost",
        titel: "AI & ecologische kost",
        samenvatting: "Hoeveel energie kost AI eigenlijk? Vergelijk AI-gesprekken met koffie, Netflix en meer - en ontdek waarom het verhaal genuanceerder is dan je denkt.",
        en: {
            titel: "AI & ecological cost",
            samenvatting: "How much energy does AI actually use? Compare AI conversations with coffee, Netflix and more - and discover why the story is more nuanced than you think."
        },
        tags: ["AI", "energie", "ecologie", "klimaat", "datacenter", "GPU", "duurzaamheid", "training", "koffie"],
        contentFile: "content/ai-ecologische-kost.html",
        categorie: "AI"
    },
    {
        id: "ai-tools",
        titel: "AI-tools en playgrounds",
        samenvatting: "Van API's en playgrounds tot NotebookLM en Cursor - een overzicht van de meest nuttige AI-tools voor studenten en makers.",
        en: {
            titel: "AI tools and playgrounds",
            samenvatting: "From APIs and playgrounds to NotebookLM and Cursor - an overview of the most useful AI tools for students and makers."
        },
        tags: ["AI", "API", "tools", "playground", "NotebookLM", "Cursor", "Copilot", "programmeren", "ElevenLabs"],
        contentFile: "content/ai-tools.html",
        categorie: "AI"
    },
    {
        id: "ai-modellen",
        titel: "AI-modellen vergelijken",
        samenvatting: "ChatGPT, Gemini, Claude, Copilot, Grok - welk model presteert het best voor creatieve en technische vragen? Met scoretabel en een blik op Europese alternatieven.",
        en: {
            titel: "Comparing AI models",
            samenvatting: "ChatGPT, Gemini, Claude, Copilot, Grok - which model performs best for creative and technical questions? With score table and a look at European alternatives."
        },
        tags: ["AI", "modellen", "ChatGPT", "Claude", "Gemini", "Copilot", "Grok", "Mistral", "vergelijking", "Le Chat"],
        contentFile: "content/ai-modellen.html",
        categorie: "AI"
    },
    {
        id: "vibe-coding",
        titel: "Vibe coding",
        samenvatting: "Beschrijf wat je wilt maken en laat AI de code schrijven. Een inleiding tot vibe coding: wat het is, welke tools je gebruikt en waar je op moet letten.",
        en: {
            titel: "Vibe coding",
            samenvatting: "Describe what you want to build and let AI write the code. An introduction to vibe coding: what it is, which tools to use and what to watch out for."
        },
        tags: ["vibe coding", "AI", "Cursor", "Copilot", "Replit", "Windsurf", "Karpathy", "programmeren", "tools"],
        contentFile: "content/vibe-coding.html",
        categorie: "AI"
    }
];

const navCategories = ["Introductie", "p5.js basis", "p5.js +", "Code concepten", "Strudel", "AI", "Inspiratie"];

const MAX_IN_PAGE_RELATIONS = 5;
const MAX_RELATED_TAGS = 6;
const MAX_RELATED_TOPICS = 5;
const onderwerpTextCache = new Map();

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeRegExp(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeText(text) {
    return String(text || '').toLowerCase().trim();
}

function textContainsTag(text, tag) {
    const source = String(text || '');
    const query = normalizeText(tag);

    if (!query) {
        return false;
    }

    if (/^[a-z0-9]+$/.test(query) && query.length <= 3) {
        const regex = new RegExp(`(^|[^a-z0-9])${escapeRegExp(query)}([^a-z0-9]|$)`, 'i');
        return regex.test(source);
    }

    return source.toLowerCase().includes(query);
}

function getOnderwerpTags(onderwerp) {
    return Array.isArray(onderwerp.tags) ? onderwerp.tags.filter(Boolean) : [];
}

function extractPlainText(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.textContent || '';
}

function cacheOnderwerpText(onderwerpId, plainText) {
    onderwerpTextCache.set(onderwerpId, Promise.resolve(plainText));
}

function getOnderwerpText(onderwerp) {
    if (onderwerpTextCache.has(onderwerp.id)) {
        return onderwerpTextCache.get(onderwerp.id);
    }

    const fallbackText = `${onderwerp.titel} ${onderwerp.samenvatting} ${getOnderwerpTags(onderwerp).join(' ')}`;
    const textPromise = (async () => {
        const fetchUrl = onderwerp.dataFile || onderwerp.contentFile;
        if (!fetchUrl) {
            return fallbackText;
        }

        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                return fallbackText;
            }

            if (onderwerp.dataFile) {
                // JSON: extract plain text from all tekst/code/beschrijving fields
                const topic = await response.json();
                const texts = [];
                for (const sectie of (topic.secties || [])) {
                    if (sectie.titel) texts.push(sectie.titel);
                    if (sectie.beschrijving) texts.push(sectie.beschrijving);
                    if (sectie.code) texts.push(sectie.code);
                    for (const block of (sectie.content || [])) {
                        if (block.tekst) texts.push(block.tekst);
                        if (block.code) texts.push(block.code);
                        if (block.items) texts.push(block.items.join(' '));
                    }
                }
                return texts.join(' ');
            }

            const html = await response.text();
            return extractPlainText(html);
        } catch (error) {
            return fallbackText;
        }
    })();

    onderwerpTextCache.set(onderwerp.id, textPromise);
    return textPromise;
}

function primeRelatedContentCache(huidigOnderwerp) {
    onderwerpen
        .filter(onderwerp =>
            onderwerp.id !== huidigOnderwerp.id &&
            onderwerp.categorie === huidigOnderwerp.categorie
        )
        .forEach(onderwerp => {
            getOnderwerpText(onderwerp).catch(() => {});
        });
}

function ensureContentAnchors(contentRoot, onderwerpId) {
    const relationBlocks = Array.from(contentRoot.querySelectorAll('.intro, section, .p5-example'));
    const usedIds = new Set(
        Array.from(contentRoot.querySelectorAll('[id]')).map(element => element.id)
    );

    relationBlocks.forEach((block, index) => {
        if (block.id) {
            usedIds.add(block.id);
            return;
        }

        const heading = block.querySelector('h2, h3');
        const baseLabel = heading ? heading.textContent : `sectie-${index + 1}`;
        const slug = slugify(baseLabel) || `sectie-${index + 1}`;
        const baseId = `${onderwerpId}-${slug}`;
        let candidateId = baseId;
        let suffix = 2;

        while (usedIds.has(candidateId)) {
            candidateId = `${baseId}-${suffix}`;
            suffix += 1;
        }

        block.id = candidateId;
        usedIds.add(candidateId);
    });
}

function getRelationLabel(block, index) {
    const heading = block.querySelector('h2, h3');

    if (heading) {
        return heading.textContent.trim();
    }

    if (block.classList.contains('intro')) {
        return t('intro');
    }

    if (block.classList.contains('p5-example')) {
        return `${t('example')} ${index + 1}`;
    }

    return `${t('section')} ${index + 1}`;
}

function getInPageRelations(contentRoot, activeTag) {
    const relationBlocks = Array.from(contentRoot.querySelectorAll('.intro, section, .p5-example'));
    const seenIds = new Set();

    return relationBlocks
        .filter(block => textContainsTag(block.textContent, activeTag))
        .map((block, index) => ({
            id: block.id,
            label: getRelationLabel(block, index)
        }))
        .filter(item => {
            if (seenIds.has(item.id)) {
                return false;
            }

            seenIds.add(item.id);
            return true;
        })
        .slice(0, MAX_IN_PAGE_RELATIONS);
}

async function getRelatedTopics(huidigOnderwerp, activeTag) {
    const currentTags = getOnderwerpTags(huidigOnderwerp);
    const currentTagSet = new Set(currentTags.map(normalizeText));
    const activeTagNormalized = normalizeText(activeTag);

    const candidates = onderwerpen.filter(onderwerp => {
        if (onderwerp.id === huidigOnderwerp.id) {
            return false;
        }

        const onderwerpTags = getOnderwerpTags(onderwerp);
        return (
            onderwerp.categorie === huidigOnderwerp.categorie ||
            onderwerpTags.some(tag =>
                currentTagSet.has(normalizeText(tag)) ||
                normalizeText(tag) === activeTagNormalized ||
                textContainsTag(tag, activeTag) ||
                textContainsTag(activeTag, tag)
            ) ||
            textContainsTag(onderwerp.titel, activeTag) ||
            textContainsTag(onderwerp.samenvatting, activeTag)
        );
    });

    const scoredTopics = await Promise.all(
        candidates.map(async onderwerp => {
            const onderwerpTags = getOnderwerpTags(onderwerp);
            const sharedTags = onderwerpTags.filter(tag => currentTagSet.has(normalizeText(tag)));
            const onderwerpText = await getOnderwerpText(onderwerp);
            let score = 0;

            score += sharedTags.length * 4;

            if (onderwerp.categorie === huidigOnderwerp.categorie) {
                score += 2;
            }

            if (onderwerpTags.some(tag => normalizeText(tag) === activeTagNormalized)) {
                score += 10;
            } else if (onderwerpTags.some(tag => textContainsTag(tag, activeTag) || textContainsTag(activeTag, tag))) {
                score += 6;
            }

            if (textContainsTag(onderwerp.titel, activeTag)) {
                score += 7;
            }

            if (textContainsTag(onderwerp.samenvatting, activeTag)) {
                score += 4;
            }

            if (textContainsTag(onderwerpText, activeTag)) {
                score += 5;
            }

            return {
                onderwerp,
                score,
                sharedTags
            };
        })
    );

    return scoredTopics
        .filter(item => item.score > 2)
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            if (b.sharedTags.length !== a.sharedTags.length) {
                return b.sharedTags.length - a.sharedTags.length;
            }

            return a.onderwerp.titel.localeCompare(b.onderwerp.titel, 'nl');
        })
        .slice(0, MAX_RELATED_TOPICS);
}

function getBroaderRelatedTags(huidigOnderwerp, activeTag, relatedTopics) {
    const currentTagSet = new Set(getOnderwerpTags(huidigOnderwerp).map(normalizeText));
    const activeTagNormalized = normalizeText(activeTag);
    const tagWeights = new Map();

    relatedTopics.forEach(item => {
        getOnderwerpTags(item.onderwerp).forEach(tag => {
            const normalizedTag = normalizeText(tag);

            if (!normalizedTag || normalizedTag === activeTagNormalized || currentTagSet.has(normalizedTag)) {
                return;
            }

            const currentWeight = tagWeights.get(tag) || 0;
            tagWeights.set(tag, currentWeight + item.score);
        });
    });

    return Array.from(tagWeights.entries())
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }

            return a[0].localeCompare(b[0], 'nl');
        })
        .slice(0, MAX_RELATED_TAGS)
        .map(([tag]) => tag);
}

function getRelatedTopicReason(item, activeTag) {
    const onderwerpTags = getOnderwerpTags(item.onderwerp);

    if (onderwerpTags.some(tag => normalizeText(tag) === normalizeText(activeTag))) {
        return `${t('contains')} ${tTag(activeTag)}`;
    }

    if (item.sharedTags.length > 0) {
        return `${t('shared')}: ${item.sharedTags.slice(0, 2).map(tTag).join(', ')}`;
    }

    return `${t('relatedVia')} ${tTag(activeTag)}`;
}

function renderTagChipFlow(currentTags, contextData) {
    const { activeTag, inPageRelations, broaderTags } = contextData;
    const activeTagNormalized = normalizeText(activeTag);
    const activeTagIsCurrent = currentTags.some(tag => normalizeText(tag) === activeTagNormalized);
    const staticTagButtons = currentTags.map(tag => `
        <button class="tag-btn" type="button" data-tag="${escapeHtml(tag)}">
            ${escapeHtml(tTag(tag))}
        </button>
    `);
    const activeTagButton = !activeTagIsCurrent ? `
        <button class="tag-btn tag-related-btn" type="button" data-tag="${escapeHtml(activeTag)}">
            ${escapeHtml(tTag(activeTag))}
        </button>
    ` : '';
    const contextButtons = [
        ...inPageRelations.map(item => `
            <button class="tag-page-link" type="button" data-scroll-target="${escapeHtml(item.id)}">
                ${escapeHtml(item.label)}
            </button>
        `),
        ...broaderTags.map(tag => `
            <button class="tag-btn tag-related-btn" type="button" data-tag="${escapeHtml(tag)}">
                ${escapeHtml(tTag(tag))}
            </button>
        `)
    ];

    return `
        ${staticTagButtons.join('')}
        ${activeTagButton}
        ${contextButtons.join('')}
    `;
}

function renderTagContext(contextData) {
    const { activeTag, relatedTopics } = contextData;
    const relatedTopicsSection = relatedTopics.length > 0 ? `
        <p class="tag-context-heading">${t('relatedTopics')}</p>
        <div class="tag-topic-list">
            ${relatedTopics.map(item => `
                <a class="tag-topic-item" href="#${item.onderwerp.id}">
                    <span class="tag-topic-category">${escapeHtml(tCat(item.onderwerp.categorie))}</span>
                    <span class="tag-topic-title">${escapeHtml(topicTitle(item.onderwerp))}</span>
                    <span class="tag-topic-reason">${escapeHtml(getRelatedTopicReason(item, activeTag))}</span>
                </a>
            `).join('')}
        </div>
    ` : '';

    return `
        ${relatedTopicsSection}
    `;
}

function syncActiveTagButtons(sidebar, activeTag) {
    const activeTagNormalized = normalizeText(activeTag);

    sidebar.querySelectorAll('[data-tag]').forEach(button => {
        const isActive = normalizeText(button.dataset.tag) === activeTagNormalized;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

// Router - Hash-based routing
function initRouter() {
    // Laad onderwerp op basis van hash
    function loadOnderwerp() {
        const hash = window.location.hash.slice(1); // Verwijder #
        const onderwerp = hash ? onderwerpen.find(o => o.id === hash) : null;

        window.scrollTo(0, 0);

        if (onderwerp) {
            renderOnderwerp(onderwerp);
            updateActiveNav(onderwerp.id);
        } else {
            renderWelcome();
            updateActiveNav(null);
        }
    }
    
    // Luister naar hash changes
    window.addEventListener('hashchange', loadOnderwerp);
    
    // Laad bij start
    loadOnderwerp();
}

// === JSON Topic Renderer ===
// Rendert een topic-JSON naar HTML-fragmenten, identiek aan de hand-geschreven content/*.html structuur.

function renderInlineMarkdown(tekst) {
    // Converteer inline markdown naar HTML: `code`, **bold**, [link](#hash)
    return tekst
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderContentBlock(block) {
    switch (block.type) {
        case 'p':
            return `<p>${renderInlineMarkdown(block.tekst)}</p>`;
        case 'code':
            return `<pre><code>${escapeHtml(block.code)}</code></pre>`;
        case 'h3':
            return `<h3>${renderInlineMarkdown(block.tekst)}</h3>`;
        case 'lijst':
            return `<ul>${block.items.map(item => `<li>${renderInlineMarkdown(item)}</li>`).join('\n')}</ul>`;
        case 'afbeelding':
            return `<figure>
    <img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}">
    ${block.caption ? `<figcaption>${renderInlineMarkdown(block.caption)}</figcaption>` : ''}
</figure>`;
        case 'links':
            return `<ul>${block.items.map(item =>
                `<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>${item.beschrijving ? ` - ${renderInlineMarkdown(item.beschrijving)}` : ''}</li>`
            ).join('\n')}</ul>`;
        default:
            return '';
    }
}

function renderTopicFromJson(topic) {
    const parts = [];

    for (const sectie of topic.secties) {
        switch (sectie.type) {
            case 'intro':
                parts.push(`<div class="intro">\n${sectie.content.map(renderContentBlock).join('\n')}\n</div>`);
                break;
            case 'sectie':
                parts.push(`<section>\n<h2>${renderInlineMarkdown(sectie.titel)}</h2>\n${sectie.content.map(renderContentBlock).join('\n')}\n</section>`);
                break;
            case 'voorbeeld':
                parts.push(`<div class="p5-example">
    <h3>${renderInlineMarkdown(sectie.titel)}</h3>
    ${sectie.beschrijving ? `<p>${renderInlineMarkdown(sectie.beschrijving)}</p>` : ''}
    <div class="p5-example-container">
        <div class="p5-canvas-wrapper" id="${escapeHtml(sectie.exampleId)}"></div>
    </div>
</div>`);
                break;
            case 'editor':
                parts.push(`<section>
    <h2>${renderInlineMarkdown(sectie.titel)}</h2>
    ${sectie.beschrijving ? `<p>${renderInlineMarkdown(sectie.beschrijving)}</p>` : ''}
    <div class="p5-editor" data-width="${sectie.width || 600}" data-height="${sectie.height || 400}" data-autorun="${sectie.autorun !== false ? 'true' : 'false'}">
        <script type="text/p5">\n${sectie.code}\n        </script>
    </div>
</section>`);
                break;
        }
    }

    // Leerdoelen als uitklapbare sectie
    if (topic.leerdoelen && topic.leerdoelen.length > 0) {
        parts.push(`<section class="topic-leerdoelen">
    <details>
        <summary><h2>${t('learningGoals')}</h2></summary>
        <ul>${topic.leerdoelen.map(doel => `\n            <li>${renderInlineMarkdown(doel)}</li>`).join('')}
        </ul>
    </details>
</section>`);
    }

    // Oefeningen als uitklapbare sectie per niveau
    if (topic.oefeningen && topic.oefeningen.length > 0) {
        const niveauLabels = t('niveauLabels');
        const niveauBeschrijvingen = t('niveauBeschrijvingen');

        let oefeningenHtml = '';
        for (const niveau of [1, 2, 3]) {
            const items = topic.oefeningen.filter(o => o.niveau === niveau);
            if (items.length === 0) continue;

            oefeningenHtml += `\n            <div class="oefening-niveau" data-niveau="${niveau}">
                <h3>${niveauLabels[niveau] || 'Niveau ' + niveau}</h3>
                <p class="oefening-niveau-beschrijving">${niveauBeschrijvingen[niveau] || ''}</p>`;

            for (const oef of items) {
                oefeningenHtml += `\n                <div class="oefening-kaart">
                    <h4>${renderInlineMarkdown(oef.titel)}</h4>
                    <p>${renderInlineMarkdown(oef.beschrijving)}</p>`;
                if (oef.hint) {
                    oefeningenHtml += `\n                    <details class="oefening-hint"><summary>${t('hint')}</summary><p>${renderInlineMarkdown(oef.hint)}</p></details>`;
                }
                if (oef.starterCode) {
                    oefeningenHtml += `\n                    <details class="oefening-starter"><summary>${t('starterCode')}</summary><pre><code>${escapeHtml(oef.starterCode)}</code></pre></details>`;
                }
                oefeningenHtml += `\n                </div>`;
            }
            oefeningenHtml += `\n            </div>`;
        }

        parts.push(`<section class="topic-oefeningen">
    <details>
        <summary><h2>${t('exercises')}</h2></summary>${oefeningenHtml}
    </details>
</section>`);
    }

    return parts.join('\n\n');
}

// Render functie voor onderwerp pagina
async function renderOnderwerp(onderwerp) {
    const content = document.getElementById('content');
    
    // Toon laadindicator
    content.innerHTML = `
        <div class="onderwerp-page">
            <h1>${topicTitle(onderwerp)}</h1>
            <p>${t('loading')}</p>
        </div>
    `;
    
    try {
        // Laad content: JSON (nieuw) of HTML (legacy)
        let htmlContent = '';
        if (onderwerp.dataFile) {
            // JSON-pad: fetch JSON, render naar HTML
            const response = await fetch(onderwerp.dataFile);
            if (response.ok) {
                const topic = await response.json();
                htmlContent = renderTopicFromJson(topic);
                cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
            } else {
                htmlContent = `<p>${t('topicNotFound')}</p>`;
            }
        } else if (onderwerp.contentFile) {
            const fetchPath = topicContentFile(onderwerp);
            let response = await fetch(fetchPath);
            // Fallback naar NL als EN-bestand niet bestaat
            if (!response.ok && currentLang !== 'nl') {
                response = await fetch(onderwerp.contentFile);
            }
            if (response.ok) {
                htmlContent = await response.text();
                cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
            } else {
                htmlContent = `<p>${t('contentNotFound')}</p>`;
            }
        } else if (onderwerp.inhoudHtml) {
            // Fallback naar oude inline HTML
            htmlContent = onderwerp.inhoudHtml;
            cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
        }
        
        // Render content
        const tags = getOnderwerpTags(onderwerp);
        const tagsSidebarHtml = tags.length > 0 ? `
            <aside class="tags-sidebar">
                <div id="tags-chip-flow" class="tags-chip-flow">
                    ${tags.map(tag => `<button class="tag-btn" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tTag(tag))}</button>`).join('')}
                </div>
                <div id="tag-context" class="tag-context" aria-live="polite"></div>
            </aside>` : '';

        content.innerHTML = `
            <div class="onderwerp-page">
                <h1>${topicTitle(onderwerp)}</h1>
                <div class="onderwerp-layout">
                    <div class="onderwerp-content">
                        ${htmlContent}
                    </div>
                    ${tagsSidebarHtml}
                </div>
            </div>
        `;

        const contentRoot = content.querySelector('.onderwerp-content');
        const sidebar = content.querySelector('.tags-sidebar');

        ensureContentAnchors(contentRoot, onderwerp.id);
        primeRelatedContentCache(onderwerp);

        if (sidebar) {
            const chipFlowEl = sidebar.querySelector('#tags-chip-flow');
            const tagContextEl = sidebar.querySelector('#tag-context');
            let activeTag = tags[0];
            let requestId = 0;

            const updateTagContext = async (tag, options = {}) => {
                const normalizedTag = normalizeText(tag);
                const currentActiveTag = normalizeText(activeTag);

                if (!options.force && normalizedTag && normalizedTag === currentActiveTag && tagContextEl.innerHTML.trim()) {
                    return;
                }

                activeTag = tag;
                requestId += 1;
                const currentRequestId = requestId;

                syncActiveTagButtons(sidebar, activeTag);
                tagContextEl.classList.add('is-loading');
                tagContextEl.setAttribute('aria-busy', 'true');

                const inPageRelations = getInPageRelations(contentRoot, activeTag);
                const relatedTopics = await getRelatedTopics(onderwerp, activeTag);
                const broaderTags = getBroaderRelatedTags(onderwerp, activeTag, relatedTopics);

                if (currentRequestId !== requestId) {
                    return;
                }

                chipFlowEl.innerHTML = renderTagChipFlow(tags, {
                    activeTag,
                    inPageRelations,
                    broaderTags
                });
                tagContextEl.innerHTML = renderTagContext({
                    activeTag,
                    relatedTopics
                });
                tagContextEl.classList.remove('is-loading');
                tagContextEl.setAttribute('aria-busy', 'false');
                syncActiveTagButtons(sidebar, activeTag);
            };

            sidebar.addEventListener('click', (event) => {
                const tagButton = event.target.closest('[data-tag]');
                if (tagButton) {
                    updateTagContext(tagButton.dataset.tag);
                    return;
                }

                const scrollButton = event.target.closest('[data-scroll-target]');
                if (scrollButton) {
                    const target = contentRoot.querySelector(`#${scrollButton.dataset.scrollTarget}`);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });

            if (activeTag) {
                updateTagContext(activeTag, { force: true });
            }
        }

        // Laad p5.js voorbeelden voor dit onderwerp
        loadP5Examples(onderwerp.id);

        // Initialiseer editors na korte delay zodat DOM is bijgewerkt
        setTimeout(() => {
            if (window.P5Editor && window.P5Editor.init) {
                window.P5Editor.init();
            }
        }, 100);
    } catch (error) {
        console.error('Error loading content:', error);
        content.innerHTML = `
            <div class="onderwerp-page">
                <h1>${topicTitle(onderwerp)}</h1>
                <p>${t('loadError')}</p>
            </div>
        `;
    }
}

// Render welcome pagina
function renderWelcome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="welcome">
            <blockquote class="welcome-quote">
                <p>${t('welcomeQuote')}</p>
                <p>${t('welcomeQuote2')}</p>
                <footer><cite>${t('welcomeAuthor')}</cite></footer>
            </blockquote>
        </div>
    `;
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function setGroupOpen(group, isOpen) {
    group.classList.toggle('is-open', isOpen);
    const toggle = group.querySelector('.nav-group-toggle');
    if (toggle) {
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
}

// Update actieve navigatie item
function updateActiveNav(activeId) {
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const hasActive = group.querySelector('a.active');
        group.classList.toggle('is-active-group', Boolean(hasActive));
        setGroupOpen(group, Boolean(hasActive));
    });
}

// Bouw navigatie menu
function buildNav() {
    const navList = document.getElementById('nav-list');
    const groups = navCategories.map(categorie => ({
        categorie,
        items: onderwerpen.filter(onderwerp => onderwerp.categorie === categorie)
    }));

    navList.innerHTML = groups.map(group => {
        const groupId = `nav-group-${slugify(group.categorie)}`;
        const itemsMarkup = group.items.map(onderwerp => `
            <li><a href="#${onderwerp.id}">${topicTitle(onderwerp)}</a></li>
        `).join('');

        return `
            <li class="nav-group" data-category="${group.categorie}">
                <button class="nav-group-toggle" type="button" aria-expanded="false" aria-controls="${groupId}">
                    <span class="nav-group-text">${tCat(group.categorie)}</span>
                    <span class="nav-group-meta">
                        <span class="nav-group-icon" aria-hidden="true"></span>
                    </span>
                </button>
                <ul class="nav-sublist" id="${groupId}">
                    ${itemsMarkup}
                </ul>
            </li>
        `;
    }).join('');
}

function closeOtherNavGroups(currentGroup) {
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        if (group !== currentGroup) {
            setGroupOpen(group, false);
        }
    });
}

function initNavGroups() {
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const toggle = group.querySelector('.nav-group-toggle');
        if (!toggle) {
            return;
        }

        toggle.addEventListener('click', () => {
            const shouldOpen = !group.classList.contains('is-open');
            closeOtherNavGroups(group);
            setGroupOpen(group, shouldOpen);
        });
    });
}

// Zoekfunctie
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        
        // Zoek in titels, samenvattingen en tags (beide talen)
        const results = onderwerpen.filter(onderwerp => {
            const titel = topicTitle(onderwerp);
            const samenvatting = topicSummary(onderwerp);
            const titelMatch = titel.toLowerCase().includes(query);
            const samenvattingMatch = samenvatting.toLowerCase().includes(query);
            const tagsMatch = onderwerp.tags.some(tag => tag.toLowerCase().includes(query));
            // Ook zoeken in NL-titel als we in EN zitten
            const nlTitelMatch = onderwerp.titel.toLowerCase().includes(query);
            const nlSamenvattingMatch = onderwerp.samenvatting.toLowerCase().includes(query);

            return titelMatch || samenvattingMatch || tagsMatch || nlTitelMatch || nlSamenvattingMatch;
        });

        if (results.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = results.map(onderwerp => `
                <div class="search-result-item" onclick="window.location.hash='${onderwerp.id}'">
                    <h3>${highlightMatch(topicTitle(onderwerp), query)}</h3>
                    <p>${highlightMatch(topicSummary(onderwerp), query)}</p>
                    <p><small>${t('tags')}: ${onderwerp.tags.map(tTag).join(', ')}</small></p>
                </div>
            `).join('');
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = `<p>${t('noResults')}</p>`;
        }
    });
}

// Highlight zoekterm in tekst
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Laad p5.js voorbeelden
function loadP5Examples(onderwerpId) {
    // Wacht even zodat de DOM is bijgewerkt
    setTimeout(() => {
        const exampleContainers = document.querySelectorAll('.p5-canvas-wrapper');
        exampleContainers.forEach((container) => {
            const id = container.id;
            if (id && id.startsWith('example-')) {
                // Verwijder oude canvas als die bestaat
                const oldCanvas = container.querySelector('canvas');
                if (oldCanvas) {
                    oldCanvas.remove();
                }
                
                // Laad nieuwe sketch
                loadExample(id, container);
            }
        });
    }, 200);
}

// Laad individueel voorbeeld
function loadExample(exampleId, container) {
    // Check of script al geladen is
    const scriptId = `script-${exampleId}`;
    let script = document.getElementById(scriptId);
    
    // Converteer koppeltekens naar underscores voor functie naam
    const funcName = `sketch_${exampleId.replace(/-/g, '_')}`;
    
    if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = `examples/${exampleId}.js`;
        script.onerror = () => {
            console.log(`Voorbeeld ${exampleId} niet gevonden`);
        };
        document.body.appendChild(script);
    }
    
    // Functie om p5 instance te maken
    const createInstance = () => {
        if (window[funcName]) {
            const sketchFunc = window[funcName];
            new p5(sketchFunc, container);
        } else {
            console.log(`Functie ${funcName} niet gevonden`);
        }
    };
    
    // Wacht tot script geladen is en maak nieuwe p5 instance
    script.onload = createInstance;
    
    // Als script al geladen was, maak direct instance
    if (script.complete || script.readyState === 'complete') {
        // Wacht even zodat functie beschikbaar is
        setTimeout(createInstance, 100);
    }
}

// Lettergrootte instelling
function initFontSize() {
    const sizes = ['klein', 'medium', 'groot'];
    const saved = localStorage.getItem('fontsize') || 'medium';
    function setSize(size) {
        document.documentElement.setAttribute('data-fontsize', size);
        localStorage.setItem('fontsize', size);
        document.querySelectorAll('.font-size-btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.size === size);
        });
    }

    setSize(saved);

    document.querySelectorAll('.font-size-btn').forEach(btn => {
        btn.addEventListener('click', () => setSize(btn.dataset.size));
    });
}

// Taalwissel
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Update taalknop actieve staat
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Update statische UI-elementen
    document.title = t('pageTitle');
    const siteTitle = document.querySelector('header h1');
    if (siteTitle) siteTitle.textContent = t('siteTitle');
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t('subtitle');
    const navHeading = document.querySelector('#main-nav h2');
    if (navHeading) navHeading.textContent = t('navHeading');
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    const fontControls = document.querySelector('.font-size-controls');
    if (fontControls) fontControls.setAttribute('aria-label', t('fontSizeLabel'));
    const fontBtns = document.querySelectorAll('.font-size-btn');
    const fontTitles = [t('fontSizeSmall'), t('fontSizeMedium'), t('fontSizeLarge')];
    fontBtns.forEach((btn, i) => { btn.title = fontTitles[i]; });

    // Herbouw navigatie
    buildNav();
    initNavGroups();

    // Herlaad huidig topic of welcome
    onderwerpTextCache.clear();
    const hash = window.location.hash.slice(1);
    const onderwerp = hash ? onderwerpen.find(o => o.id === hash) : null;
    if (onderwerp) {
        renderOnderwerp(onderwerp);
        updateActiveNav(onderwerp.id);
    } else {
        renderWelcome();
        updateActiveNav(null);
    }
}

function initLang() {
    const saved = localStorage.getItem('lang') || 'nl';
    currentLang = saved;
    document.documentElement.setAttribute('lang', saved);
    document.documentElement.setAttribute('data-lang', saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === saved);
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Stel statische elementen in bij eerste load
    document.title = t('pageTitle');
    const siteTitle = document.querySelector('header h1');
    if (siteTitle) siteTitle.textContent = t('siteTitle');
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t('subtitle');
    const navHeading = document.querySelector('#main-nav h2');
    if (navHeading) navHeading.textContent = t('navHeading');
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
}

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    initLang();
    buildNav();
    initNavGroups();
    initRouter();
    initSearch();
    initFontSize();
    initBalls();
});

// Achtergrond ballen - vallen, stuiteren en wijken voor de muis
function initBalls() {
    const kleuren = [
        '#00ff00', '#00ff00', '#00ff00', '#00ff00', // groen - Lab44
        '#ff0000', '#ff0000',                        // rood
        '#0000ff', '#0000ff',                        // blauw
        '#7d007d',                                   // paars
        '#ff007d',                                   // roze
        '#ffff00',                                   // geel
    ];

    new p5(function(p) {
        const AANTAL = 16;
        const ZWAARTEKRACHT = 0.35;
        const STUIT = 0.72;
        const MUIS_STRAAL = 120;
        const MUIS_KRACHT = 6;
        let ballen = [];

        p.setup = function() {
            let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
            cnv.parent('balls-canvas');
            p.noStroke();

            for (let i = 0; i < AANTAL; i++) {
                ballen.push({
                    x:  p.random(p.width),
                    y:  p.random(-p.height, - 20),
                    r:  p.random(18, 48),
                    vx: p.random(-2, 2),
                    vy: p.random(0, 2),
                    kleur: p.random(kleuren)
                });
            }
        };

        p.draw = function() {
            p.clear();

            for (let b of ballen) {
                // Zwaartekracht
                b.vy += ZWAARTEKRACHT;

                // Muisafstoting
                let dx = b.x - p.mouseX;
                let dy = b.y - p.mouseY;
                let afstand = p.sqrt(dx * dx + dy * dy);
                if (afstand < MUIS_STRAAL && afstand > 0) {
                    let kracht = (MUIS_STRAAL - afstand) / MUIS_STRAAL * MUIS_KRACHT;
                    b.vx += (dx / afstand) * kracht;
                    b.vy += (dy / afstand) * kracht;
                }

                b.x += b.vx;
                b.y += b.vy;

                // Bodem - stuiteren
                if (b.y + b.r > p.height) {
                    b.y = p.height - b.r;
                    b.vy *= - STUIT;
                    b.vx *= 0.98;
                }

                // Buiten beeld - verwijderen
                if (b.x + b.r < 0 || b.x - b.r > p.width || b.y - b.r > p.height) {
                    b.weg = true;
                }
            }

            // Verdwenen ballen verwijderen
            ballen = ballen.filter(b => !b.weg);

            // Botsingen tussen ballen
            for (let i = 0; i < ballen.length; i++) {
                for (let j = i + 1; j < ballen.length; j++) {
                    botsBallen(ballen[i], ballen[j]);
                }
            }

            // Tekenen
            for (let b of ballen) {
                p.fill(b.kleur);
                p.circle(b.x, b.y, b.r * 2);
            }
        };

        function botsBallen(a, b) {
            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let dist = p.sqrt(dx * dx + dy * dy);
            let minDist = a.r + b.r;

            if (dist === 0 || dist >= minDist) return;

            // Normaalvector
            let nx = dx / dist;
            let ny = dy / dist;

            // Duw ballen uit elkaar zodat ze niet overlappen
            let overlap = (minDist - dist) / 2;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;

            // Snelheidsverschil langs de normaal
            let dvx = a.vx - b.vx;
            let dvy = a.vy - b.vy;
            let dot = dvx * nx + dvy * ny;

            // Alleen botsen als ze naar elkaar toe bewegen
            if (dot <= 0) return;

            // Massa evenredig aan oppervlak (r²)
            let ma = a.r * a.r;
            let mb = b.r * b.r;
            let impuls = (2 * dot) / (ma + mb);

            a.vx -= impuls * mb * nx;
            a.vy -= impuls * mb * ny;
            b.vx += impuls * ma * nx;
            b.vy += impuls * ma * ny;
        }

        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}
