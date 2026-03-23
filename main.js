// Data structuur met alle onderwerpen
const onderwerpen = [
    {
        id: "generative-design",
        titel: "Generative Design & Geschiedenis",
        samenvatting: "Ontdek de geschiedenis van generative design, van John Whitney tot moderne creative coding.",
        tags: ["geschiedenis", "generative design", "Whitney", "fractals", "DEMO", "BYOB", "creative coding"],
        contentFile: "content/generative-design.html",
        categorie: "Generative Design"
    },
    {
        id: "over-p5js",
        titel: "Over p5.js",
        samenvatting: "Wat is p5.js, waar komt het vandaan, en hoe gebruik je het?",
        tags: ["p5.js", "Processing", "editor", "reference", "projectstructuur", "introductie"],
        contentFile: "content/over-p5js.html",
        categorie: "Over p5.js"
    },
    {
        id: "setup-draw",
        titel: "setup() en draw()",
        samenvatting: "Leer de twee belangrijkste functies: setup() voor initialisatie en draw() voor animatie.",
        tags: ["setup", "draw", "basis", "fundamenten", "canvas"],
        contentFile: "content/setup-draw.html",
        categorie: "p5.js"
    },
    {
        id: "vormen",
        titel: "Vormen Tekenen",
        samenvatting: "Leer hoe je basisvormen tekent: cirkels, rechthoeken, lijnen en meer.",
        tags: ["vormen", "ellipse", "rect", "line", "triangle", "basis"],
        contentFile: "content/vormen.html",
        categorie: "p5.js"
    },
    {
        id: "kleur",
        titel: "Kleur",
        samenvatting: "Ontdek hoe je kleuren gebruikt in p5.js: RGB, HSB, transparantie en meer.",
        tags: ["kleur", "fill", "stroke", "background", "RGB", "HSB"],
        contentFile: "content/kleur.html",
        categorie: "p5.js"
    },
    {
        id: "variabelen",
        titel: "Variabelen",
        samenvatting: "Leer hoe je variabelen gebruikt om waarden op te slaan en je code flexibel te maken.",
        tags: ["variabelen", "let", "const", "data", "basis"],
        contentFile: "content/variabelen.html",
        categorie: "p5.js"
    },
    {
        id: "if-statements",
        titel: "If-Statements",
        samenvatting: "Maak beslissingen in je code met if-statements en voorwaarden.",
        tags: ["if", "else", "voorwaarden", "logica", "beslissingen"],
        contentFile: "content/if-statements.html",
        categorie: "p5.js"
    },
    {
        id: "loops",
        titel: "Loops",
        samenvatting: "Herhaal code met for-loops en while-loops om patronen te maken.",
        tags: ["loops", "for", "while", "herhalen", "patronen"],
        contentFile: "content/loops.html",
        categorie: "p5.js"
    },
    {
        id: "functies",
        titel: "Functies",
        samenvatting: "Maak herbruikbare code met functies. Organiseer je code en maak het overzichtelijker.",
        tags: ["functies", "function", "herbruikbaar", "organisatie"],
        contentFile: "content/functies.html",
        categorie: "p5.js"
    },
    {
        id: "muis-interactie",
        titel: "Muis Interactie",
        samenvatting: "Leer hoe je reageert op muisbewegingen en klikken.",
        tags: ["muis", "mouseX", "mouseY", "interactie", "events"],
        contentFile: "content/muis-interactie.html",
        categorie: "p5.js"
    },
    {
        id: "toetsenbord",
        titel: "Toetsenbord Input",
        samenvatting: "Gebruik toetsenbord input om je sketches te besturen.",
        tags: ["toetsenbord", "keyboard", "keyPressed", "input"],
        contentFile: "content/toetsenbord.html",
        categorie: "p5.js"
    },
    {
        id: "animatie",
        titel: "Animatie",
        samenvatting: "Maak animaties door waarden te veranderen in draw(). Leer over tijd, beweging en sinus/cosinus.",
        tags: ["animatie", "beweging", "tijd", "millis", "sin", "cos"],
        contentFile: "content/animatie.html",
        categorie: "p5.js"
    },
    {
        id: "arrays",
        titel: "Arrays",
        samenvatting: "Gebruik arrays om meerdere waarden op te slaan en door te lopen.",
        tags: ["arrays", "lijsten", "data", "opslag"],
        contentFile: "content/arrays.html",
        categorie: "p5.js"
    },
    {
        id: "3d-basis",
        titel: "3D Basis",
        samenvatting: "Ontdek 3D graphics met WEBGL. Leer 3D vormen tekenen en transformeren.",
        tags: ["3D", "WEBGL", "box", "sphere", "rotatie", "transformatie"],
        contentFile: "content/3d-basis.html",
        categorie: "p5.js"
    },
    {
        id: "objecten",
        titel: "Objecten & Classes",
        samenvatting: "Leer hoe je classes gebruikt om objecten te maken met eigen eigenschappen en gedrag. De basis van object-georiënteerd programmeren in p5.js.",
        tags: ["class", "object", "constructor", "OOP", "this", "instantie", "methoden"],
        contentFile: "content/objecten.html",
        categorie: "p5.js"
    },
    {
        id: "noise",
        titel: "Noise & Perlin Noise",
        samenvatting: "Ontdek noise(): een functie voor vloeiende, organische willekeur. Maak bewegende landschappen, texturen en flow fields.",
        tags: ["noise", "Perlin noise", "willekeur", "organisch", "textuur", "flow field", "landschap"],
        contentFile: "content/noise.html",
        categorie: "p5.js"
    },
    {
        id: "p5js-2.0",
        titel: "p5.js 2.0: Nieuwe Features",
        samenvatting: "Ontdek de nieuwe features van p5.js 2.0: async assets, typografie, curves, shaders en meer.",
        tags: ["p5.js 2.0", "async", "typografie", "curves", "splines", "shaders", "pointer-events", "migratie"],
        contentFile: "content/p5js-2.0.html",
        categorie: "p5.js"
    },
    {
        id: "strudel",
        titel: "Strudel: Live Coding Muziek",
        samenvatting: "Leer live-coding muziek maken in je browser met Strudel: ritme, samples, noten en stack.",
        tags: ["strudel", "live coding", "muziek", "samples", "ritme", "notes", "stack"],
        contentFile: "content/strudel.html",
        categorie: "Strudel"
    },
    {
        id: "vera-molnar",
        titel: "Vera Molnar",
        samenvatting: "Pionier van digitale esthetiek en generatieve kunst met een focus op raster, regels en variatie.",
        tags: ["inspiratie", "generative art", "plotter", "raster", "algoritmes", "kunstgeschiedenis"],
        contentFile: "content/vera-molnar.html",
        categorie: "Inspiratie"
    },
    {
        id: "inspiratie-links",
        titel: "Links & Bronnen",
        samenvatting: "Alle links uit de cursus: inspirerende projecten, video's, boeken, bibliotheken, tools en datasets.",
        tags: ["links", "bronnen", "inspiratie", "boeken", "video", "community", "datasets", "bibliotheken"],
        contentFile: "content/inspiratie-links.html",
        categorie: "Inspiratie"
    }
];

const navCategories = ["Generative Design", "Over p5.js", "p5.js", "Strudel", "Inspiratie"];

// Router - Hash-based routing
function initRouter() {
    // Laad onderwerp op basis van hash
    function loadOnderwerp() {
        const hash = window.location.hash.slice(1); // Verwijder #
        const onderwerp = hash ? onderwerpen.find(o => o.id === hash) : null;
        
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

// Render functie voor onderwerp pagina
async function renderOnderwerp(onderwerp) {
    const content = document.getElementById('content');
    
    // Toon laadindicator
    content.innerHTML = `
        <div class="onderwerp-page">
            <h1>${onderwerp.titel}</h1>
            <p>Laden...</p>
        </div>
    `;
    
    try {
        // Laad HTML content uit bestand
        let htmlContent = '';
        if (onderwerp.contentFile) {
            const response = await fetch(onderwerp.contentFile);
            if (response.ok) {
                htmlContent = await response.text();
            } else {
                htmlContent = '<p>Content niet gevonden. Maak een HTML bestand aan in de content/ map.</p>';
            }
        } else if (onderwerp.inhoudHtml) {
            // Fallback naar oude inline HTML
            htmlContent = onderwerp.inhoudHtml;
        }
        
        // Render content
        content.innerHTML = `
            <div class="onderwerp-page">
                <h1>${onderwerp.titel}</h1>
                ${htmlContent}
            </div>
        `;
        
        // Laad p5.js voorbeelden voor dit onderwerp
        loadP5Examples(onderwerp.id);
        
        // Initialiseer editors na korte delay zodat DOM is bijgewerkt
        setTimeout(() => {
            if (window.P5Editor && window.P5Editor.init) {
                window.P5Editor.init();
            }
        }, 100);
    } catch (error) {
        console.error('Fout bij laden van content:', error);
        content.innerHTML = `
            <div class="onderwerp-page">
                <h1>${onderwerp.titel}</h1>
                <p>Er is een fout opgetreden bij het laden van de content. Controleer of het bestand ${onderwerp.contentFile || 'inhoudHtml'} bestaat.</p>
            </div>
        `;
    }
}

// Render welcome pagina
function renderWelcome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="welcome">
            <h2>Welkom bij de p5.js Cursus</h2>
            <p>Deze cursus helpt je stap voor stap creative coding leren met p5.js. Kies een onderwerp uit het menu om te beginnen, of gebruik de zoekfunctie om specifieke onderwerpen te vinden.</p>
            <p>p5.js is een JavaScript bibliotheek die creative coding toegankelijk maakt. Je kunt er interactieve animaties, visuele kunst, games en meer mee maken.</p>
            
            <h3>Onderwerpen</h3>
            <ul>
                ${onderwerpen.map(o => `<li><a href="#${o.id}">${o.titel}</a></li>`).join('')}
            </ul>
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
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const hasActive = group.querySelector('a.active');
        group.classList.toggle('is-active-group', Boolean(hasActive));
        if (hasActive) {
            setGroupOpen(group, true);
        } else if (!group.classList.contains('is-pinned')) {
            setGroupOpen(group, false);
        }
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
            <li><a href="#${onderwerp.id}">${onderwerp.titel}</a></li>
        `).join('');

        return `
            <li class="nav-group" data-category="${group.categorie}">
                <button class="nav-group-toggle" type="button" aria-expanded="false" aria-controls="${groupId}">
                    ${group.categorie}
                </button>
                <ul class="nav-sublist" id="${groupId}">
                    ${itemsMarkup}
                </ul>
            </li>
        `;
    }).join('');
}

function initNavGroups() {
    const navGroups = document.querySelectorAll('.nav-group');
    navGroups.forEach(group => {
        const toggle = group.querySelector('.nav-group-toggle');
        if (!toggle) {
            return;
        }

        toggle.addEventListener('click', () => {
            const isPinned = group.classList.toggle('is-pinned');
            setGroupOpen(group, isPinned);
        });

        group.addEventListener('mouseenter', () => {
            setGroupOpen(group, true);
        });

        group.addEventListener('mouseleave', () => {
            if (!group.classList.contains('is-pinned') && !group.classList.contains('is-active-group')) {
                setGroupOpen(group, false);
            }
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
        
        // Zoek in titels, samenvattingen en tags
        const results = onderwerpen.filter(onderwerp => {
            const titelMatch = onderwerp.titel.toLowerCase().includes(query);
            const samenvattingMatch = onderwerp.samenvatting.toLowerCase().includes(query);
            const tagsMatch = onderwerp.tags.some(tag => tag.toLowerCase().includes(query));
            
            return titelMatch || samenvattingMatch || tagsMatch;
        });
        
        if (results.length > 0) {
            searchResults.classList.add('active');
            searchResults.innerHTML = results.map(onderwerp => `
                <div class="search-result-item" onclick="window.location.hash='${onderwerp.id}'">
                    <h3>${highlightMatch(onderwerp.titel, query)}</h3>
                    <p>${highlightMatch(onderwerp.samenvatting, query)}</p>
                    <p><small>Tags: ${onderwerp.tags.join(', ')}</small></p>
                </div>
            `).join('');
        } else {
            searchResults.classList.add('active');
            searchResults.innerHTML = '<p>Geen resultaten gevonden.</p>';
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

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    initNavGroups();
    initRouter();
    initSearch();
});
