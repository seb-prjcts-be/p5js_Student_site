// Kleurenfamilie - een raster van kleuren uit dezelfde toonbuurt.
// Klik om een nieuwe kleurenfamilie te genereren.

window.sketch_example_kleurenfamilie = function(p) {
    let startR, startG, startB;
    const BEREIK = 100;
    const CEL = 40;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noStroke();
        nieuweKleurenfamilie();
        p.noLoop();
    };

    function nieuweKleurenfamilie() {
        startR = p.floor(p.random(0, 255 - BEREIK));
        startG = p.floor(p.random(0, 255 - BEREIK));
        startB = p.floor(p.random(0, 255 - BEREIK));
    }

    p.draw = function() {
        for (let y = 0; y < p.height; y += CEL) {
            for (let x = 0; x < p.width; x += CEL) {
                p.fill(
                    p.random(startR, startR + BEREIK),
                    p.random(startG, startG + BEREIK),
                    p.random(startB, startB + BEREIK)
                );
                p.rect(x, y, CEL, CEL);
            }
        }

        // Toon het huidige bereik per kanaal
        p.fill(255, 255, 255, 180);
        p.noStroke();
        p.rect(0, p.height - 28, p.width, 28);
        p.fill(0);
        p.textSize(11);
        p.textAlign(p.LEFT, p.CENTER);
        p.text(
            `R: ${startR}–${startR + BEREIK}   G: ${startG}–${startG + BEREIK}   B: ${startB}–${startB + BEREIK}   - klik voor nieuwe familie`,
            10, p.height - 14
        );
    };

    p.mousePressed = function() {
        nieuweKleurenfamilie();
        p.redraw();
    };
};
