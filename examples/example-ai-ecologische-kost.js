// Energievergelijking: AI vs alledaagse activiteiten
window.sketch_example_ai_ecologische_kost = function(p) {
    let activiteiten = [
        { naam: 'Google zoeken',  wh: 0.3,  kleur: [100, 180, 255] },
        { naam: 'AI-vraag',       wh: 3,    kleur: [80,  220, 160] },
        { naam: 'AI-gesprek',     wh: 60,   kleur: [60,  200, 120] },
        { naam: '1u Netflix',     wh: 90,   kleur: [255, 180, 60]  },
        { naam: 'Tas koffie',     wh: 150,  kleur: [255, 110, 80]  },
        { naam: 'Water koken',    wh: 1000, kleur: [200, 60,  60]  }
    ];

    let maxWh = 1000;
    let actief = -1;
    let animProgress = [];

    p.setup = function() {
        p.createCanvas(600, 400);
        p.textFont('monospace');
        for (let i = 0; i < activiteiten.length; i++) {
            animProgress.push(0);
        }
    };

    p.draw = function() {
        p.background(18, 18, 30);

        let marge = 24;
        let labelBreedte = 140;
        let grafiekBreedte = p.width - labelBreedte - marge * 2 - 60;
        let rijHoogte = (p.height - marge * 2 - 30) / activiteiten.length;

        actief = -1;

        for (let i = 0; i < activiteiten.length; i++) {
            let act = activiteiten[i];
            let y = marge + i * rijHoogte;
            let doelBreedte = p.map(act.wh, 0, maxWh, 0, grafiekBreedte);

            // Animeer de balk
            animProgress[i] = p.lerp(animProgress[i], doelBreedte, 0.08);

            let muisErover = p.mouseY > y && p.mouseY < y + rijHoogte - 2;
            if (muisErover) actief = i;

            // Achtergrond rij
            if (muisErover) {
                p.fill(255, 255, 255, 12);
                p.noStroke();
                p.rect(0, y, p.width, rijHoogte - 2);
            }

            // Balk
            let helderheid = muisErover ? 255 : 200;
            p.fill(act.kleur[0], act.kleur[1], act.kleur[2], helderheid);
            p.noStroke();
            p.rect(labelBreedte, y + 5, animProgress[i], rijHoogte - 12, 4);

            // Label
            p.fill(muisErover ? 255 : 180);
            p.textSize(11);
            p.textAlign(p.RIGHT, p.CENTER);
            p.text(act.naam, labelBreedte - 8, y + rijHoogte / 2);

            // Waarde rechts van balk
            let waardeX = labelBreedte + animProgress[i] + 6;
            if (muisErover) {
                p.fill(255, 220, 80);
                p.textAlign(p.LEFT, p.CENTER);
                p.textSize(13);
                p.text(act.wh + ' Wh', waardeX, y + rijHoogte / 2);
            }
        }

        // Ondertitel
        p.fill(120);
        p.textSize(11);
        p.textAlign(p.LEFT);
        p.text('Beweeg de muis over een balk voor de exacte waarde (Wh = wattuur)', marge, p.height - 8);
    };
};
