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
        categorie: "Processing"
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
        id: "afbeeldingen",
        titel: "Afbeeldingen",
        samenvatting: "Leer afbeeldingen laden en tekenen met loadImage() en image(). Ontdek ook pixelmanipulatie en filters.",
        tags: ["afbeelding", "loadImage", "image", "pixels", "filter", "tint", "pixelArray"],
        contentFile: "content/afbeeldingen.html",
        categorie: "p5.js"
    },
    {
        id: "text-typografie",
        titel: "Text & Typografie",
        samenvatting: "Teken tekst op het canvas met text(), stel grootte en stijl in, en laad custom fonts met loadFont().",
        tags: ["tekst", "text", "font", "typografie", "textSize", "textFont", "loadFont", "textAlign"],
        contentFile: "content/text-typografie.html",
        categorie: "p5.js"
    },
    {
        id: "geluid",
        titel: "Geluid",
        samenvatting: "Voeg geluid toe aan je sketch met de p5.sound library: speel geluiden af, analyseer audio en maak visualisaties.",
        tags: ["geluid", "sound", "audio", "p5.sound", "loadSound", "SoundFile", "Amplitude", "FFT", "muziek"],
        contentFile: "content/geluid.html",
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
    },
    {
        id: "turtle",
        titel: "Turtle Geometry",
        samenvatting: "Bestuur een denkbeeldige schildpad met forward, right en left en ontdek hoe korte regels kunnen uitgroeien tot patronen, spiralen en fractals.",
        tags: ["turtle", "schildpad", "logo", "papert", "forward", "spiraal", "ster", "fractal", "code concepten"],
        contentFile: "content/turtle.html",
        categorie: "Code Concepten"
    },
    {
        id: "random-walk",
        titel: "Random Walk",
        samenvatting: "Een punt zet stap voor stap willekeurige bewegingen. Simpel idee, verrassend rijke patronen: toeval wordt zichtbaar als spoor.",
        tags: ["random walk", "toeval", "walker", "stappen", "pad", "simulatie", "code concepten"],
        contentFile: "content/random-walk.html",
        categorie: "Code Concepten"
    },
    {
        id: "lissajous",
        titel: "Lissajous-figuren",
        samenvatting: "Combineer twee sinusgolven tot vloeiende figuren en ontdek hoe verhoudingen, ritme en faseverschuiving zichtbaar worden in beeld.",
        tags: ["lissajous", "sinus", "parametrisch", "wiskunde", "animatie", "golven", "code concepten"],
        contentFile: "content/lissajous.html",
        categorie: "Code Concepten"
    },
    {
        id: "recursie",
        titel: "Recursie",
        samenvatting: "Een functie die zichzelf opnieuw oproept. Ideaal om vertakkingen, fractals en herhaling op meerdere schalen te begrijpen.",
        tags: ["recursie", "fractal", "boom", "zelfde patroon", "functie", "stopvoorwaarde", "code concepten"],
        contentFile: "content/recursie.html",
        categorie: "Code Concepten"
    },
    {
        id: "l-systems",
        titel: "L-Systemen",
        samenvatting: "Genereer organische bomen en vertakkingen door simpele tekstregels telkens opnieuw te herschrijven: beeld als grammatica.",
        tags: ["l-system", "lindenmayer", "fractal", "turtle", "string rewriting", "generative", "code concepten"],
        contentFile: "content/l-systems.html",
        categorie: "Code Concepten"
    },
    {
        id: "game-of-life",
        titel: "Game of Life",
        samenvatting: "Vier simpele regels voor levende en dode cellen leveren werelden op met ritme, groei, instorting en onverwachte orde.",
        tags: ["game of life", "conway", "cellulair automaat", "simulatie", "emergentie", "code concepten"],
        contentFile: "content/game-of-life.html",
        categorie: "Code Concepten"
    },
    {
        id: "langtons-ant",
        titel: "Langton's Ant",
        samenvatting: "Een mier draait links of rechts afhankelijk van de tegel onder zich. Een minuscuul regelsysteem dat van orde naar chaos en weer terug kan gaan.",
        tags: ["langton", "ant", "cellulair automaat", "emergentie", "chaos", "rooster", "code concepten"],
        contentFile: "content/langtons-ant.html",
        categorie: "Code Concepten"
    },
    {
        id: "1d-automaten",
        titel: "1D Cellulaire Automaten",
        samenvatting: "Een rij cellen volgt een simpele buurregel en groeit uit tot textielachtige, ritmische of chaotische patronen, zoals Rule 30 en Rule 110.",
        tags: ["1d automaten", "rule 30", "rule 110", "cellulair automaat", "binaire regels", "code concepten"],
        contentFile: "content/1d-automaten.html",
        categorie: "Code Concepten"
    },
    {
        id: "boids",
        titel: "Boids",
        samenvatting: "Zwermgedrag met drie regels: samenblijven, afstand houden en richting delen. Collectief gedrag zonder leider.",
        tags: ["boids", "flocking", "zwerm", "vectoren", "emergentie", "agents", "code concepten"],
        contentFile: "content/boids.html",
        categorie: "Code Concepten"
    },
    {
        id: "quine",
        titel: "Quine",
        samenvatting: "Een programma dat zijn eigen broncode toont zonder bestanden te lezen. Zelfverwijzing als denkoefening in code.",
        tags: ["quine", "zelfverwijzing", "meta", "toString", "recursie", "code concepten"],
        contentFile: "content/quine.html",
        categorie: "Code Concepten"
    },
    {
        id: "ai-ecologische-kost",
        titel: "AI & Ecologische Kost",
        samenvatting: "Hoeveel energie kost AI eigenlijk? Vergelijk AI-gesprekken met koffie, Netflix en meer — en ontdek waarom het verhaal genuanceerder is dan je denkt.",
        tags: ["AI", "energie", "ecologie", "klimaat", "datacenter", "GPU", "duurzaamheid", "training", "koffie"],
        contentFile: "content/ai-ecologische-kost.html",
        categorie: "Artificiële Intelligentie"
    }
];

const navCategories = ["Generative Design", "Processing", "p5.js", "Code Concepten", "Strudel", "Inspiratie", "Artificiële Intelligentie"];
const DIRECT_TAG_COUNT = 3;
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
        if (!onderwerp.contentFile) {
            return fallbackText;
        }

        try {
            const response = await fetch(onderwerp.contentFile);
            if (!response.ok) {
                return fallbackText;
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
        return 'Intro';
    }

    if (block.classList.contains('p5-example')) {
        return `Voorbeeld ${index + 1}`;
    }

    return `Sectie ${index + 1}`;
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
        return `bevat ${activeTag}`;
    }

    if (item.sharedTags.length > 0) {
        return `gedeeld: ${item.sharedTags.slice(0, 2).join(', ')}`;
    }

    return `verwant via ${activeTag}`;
}

function renderTagContext(contextData) {
    const { activeTag, inPageRelations, broaderTags, relatedTopics } = contextData;

    return `
        <div class="tag-context-panel">
            <p class="tag-context-label">Vanuit ${escapeHtml(activeTag)}</p>
            <p class="tag-context-intro">Eerst koppelingen in deze pagina, daarna bredere verbanden in de cursus.</p>

            <section class="tag-context-group">
                <p class="tag-context-heading">Op deze pagina</p>
                ${inPageRelations.length > 0 ? `
                    <div class="tag-page-links">
                        ${inPageRelations.map(item => `
                            <button class="tag-page-link" type="button" data-scroll-target="${escapeHtml(item.id)}">
                                ${escapeHtml(item.label)}
                            </button>
                        `).join('')}
                    </div>
                ` : '<p class="tag-context-empty">Geen directe secties gevonden voor dit trefwoord.</p>'}
            </section>

            <section class="tag-context-group">
                <p class="tag-context-heading">Breder verwant</p>
                ${broaderTags.length > 0 ? `
                    <div class="tag-related-list">
                        ${broaderTags.map(tag => `
                            <button class="tag-btn tag-related-btn" type="button" data-tag="${escapeHtml(tag)}">
                                ${escapeHtml(tag)}
                            </button>
                        `).join('')}
                    </div>
                ` : '<p class="tag-context-empty">Geen bredere trefwoorden gevonden.</p>'}
            </section>

            <section class="tag-context-group">
                <p class="tag-context-heading">Gerelateerde onderwerpen</p>
                ${relatedTopics.length > 0 ? `
                    <div class="tag-topic-list">
                        ${relatedTopics.map(item => `
                            <a class="tag-topic-item" href="#${item.onderwerp.id}">
                                <span class="tag-topic-category">${escapeHtml(item.onderwerp.categorie)}</span>
                                <span class="tag-topic-title">${escapeHtml(item.onderwerp.titel)}</span>
                                <span class="tag-topic-reason">${escapeHtml(getRelatedTopicReason(item, activeTag))}</span>
                            </a>
                        `).join('')}
                    </div>
                ` : '<p class="tag-context-empty">Geen gerelateerde onderwerpen gevonden.</p>'}
            </section>
        </div>
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
                cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
            } else {
                htmlContent = '<p>Content niet gevonden. Maak een HTML bestand aan in de content/ map.</p>';
            }
        } else if (onderwerp.inhoudHtml) {
            // Fallback naar oude inline HTML
            htmlContent = onderwerp.inhoudHtml;
            cacheOnderwerpText(onderwerp.id, extractPlainText(htmlContent));
        }
        
        // Render content
        const tags = getOnderwerpTags(onderwerp);
        const primaryTags = tags.slice(0, DIRECT_TAG_COUNT);
        const secondaryTags = tags.slice(DIRECT_TAG_COUNT);
        const tagsSidebarHtml = tags.length > 0 ? `
            <aside class="tags-sidebar">
                <div class="tags-panel">
                    <p class="tags-label">Trefwoorden</p>
                    <div class="tags-list">
                        ${primaryTags.map(tag => `<button class="tag-btn tag-primary" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('')}
                        ${secondaryTags.length > 0 ? `<span class="tags-divider"></span>${secondaryTags.map(tag => `<button class="tag-btn" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('')}` : ''}
                    </div>
                </div>
                <div id="tag-context" class="tag-context" aria-live="polite"></div>
            </aside>` : '';

        content.innerHTML = `
            <div class="onderwerp-page">
                <h1>${onderwerp.titel}</h1>
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
            const tagContextEl = sidebar.querySelector('#tag-context');
            let activeTag = primaryTags[0] || tags[0];
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

                if (!tagContextEl.innerHTML.trim()) {
                    tagContextEl.innerHTML = `
                        <div class="tag-context-panel">
                            <p class="tag-context-label">Vanuit ${escapeHtml(activeTag)}</p>
                            <p class="tag-context-intro">Verbanden laden...</p>
                        </div>
                    `;
                }

                const inPageRelations = getInPageRelations(contentRoot, activeTag);
                const relatedTopics = await getRelatedTopics(onderwerp, activeTag);
                const broaderTags = getBroaderRelatedTags(onderwerp, activeTag, relatedTopics);

                if (currentRequestId !== requestId) {
                    return;
                }

                tagContextEl.innerHTML = renderTagContext({
                    activeTag,
                    inPageRelations,
                    broaderTags,
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
            <li><a href="#${onderwerp.id}">${onderwerp.titel}</a></li>
        `).join('');

        return `
            <li class="nav-group" data-category="${group.categorie}">
                <button class="nav-group-toggle" type="button" aria-expanded="false" aria-controls="${groupId}">
                    <span class="nav-group-text">${group.categorie}</span>
                    <span class="nav-group-meta">
                        <span class="nav-group-count">${group.items.length}</span>
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

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    initNavGroups();
    initRouter();
    initSearch();
    initFontSize();
});
