// Pixelmanipulatie voorbeeld: mozaïek effect op een kleurovergang
window.sketch_example_afbeeldingen = function(p) {
    let blokGrootte = 12;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noStroke();
        p.frameRate(30);
    };

    p.draw = function() {
        // Teken een kleurovergang als 'achtergrondafbeelding'
        for (let x = 0; x < p.width; x++) {
            let tint = p.map(x, 0, p.width, 0, 360);
            p.stroke(tint, 220, 200, p.HSB ? 1 : undefined);
            p.colorMode(p.HSB, 360, 255, 255);
            p.stroke(tint, 200, 220);
            p.line(x, 0, x, p.height);
        }
        p.colorMode(p.RGB, 255);

        // Laad pixels
        p.loadPixels();

        // Mozaïek effect: lees het gemiddelde kleur per blok en teken er een cirkel van
        for (let bx = 0; bx < p.width; bx += blokGrootte) {
            for (let by = 0; by < p.height; by += blokGrootte) {
                let idx = (by * p.width + bx) * 4;
                let r = p.pixels[idx];
                let g = p.pixels[idx + 1];
                let b = p.pixels[idx + 2];

                // Afstand tot muis
                let cx = bx + blokGrootte / 2;
                let cy = by + blokGrootte / 2;
                let d = p.dist(p.mouseX, p.mouseY, cx, cy);
                let schaal = p.map(d, 0, 200, 0.2, 1.0);
                schaal = p.constrain(schaal, 0.2, 1.0);

                p.noStroke();
                p.fill(r, g, b);
                p.circle(cx, cy, blokGrootte * schaal);
            }
        }

        // Instructietekst
        p.fill(255, 255, 255, 200);
        p.textSize(13);
        p.textAlign(p.CENTER);
        p.text('Beweeg de muis over het canvas', p.width / 2, p.height - 15);
    };
};
