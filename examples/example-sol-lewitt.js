// Geïnspireerd op Sol LeWitt - lijnen vanuit de vier hoeken
// naar willekeurige punten, opgebouwd over tijd.
// Klik om opnieuw te starten.

window.sketch_example_sol_lewitt = function(p) {
    let lijnen = [];
    let index = 0;
    let aantalLijnen = 200;
    let hoeken;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(245);
        initialiseer();
    };

    function initialiseer() {
        lijnen = [];
        index = 0;

        hoeken = [
            { x: 0,         y: 0 },
            { x: p.width,   y: 0 },
            { x: 0,         y: p.height },
            { x: p.width,   y: p.height }
        ];

        for (let i = 0; i < aantalLijnen; i++) {
            let hoek = p.random(hoeken);
            let kant = p.floor(p.random(4));
            let tx, ty;

            if (kant === 0) { tx = p.random(p.width);  ty = 0; }
            if (kant === 1) { tx = p.random(p.width);  ty = p.height; }
            if (kant === 2) { tx = 0;                  ty = p.random(p.height); }
            if (kant === 3) { tx = p.width;            ty = p.random(p.height); }

            lijnen.push({ x1: hoek.x, y1: hoek.y, x2: tx, y2: ty });
        }
    }

    p.draw = function() {
        if (index < lijnen.length) {
            let l = lijnen[index];
            let alpha = p.map(index, 0, lijnen.length, 20, 80);
            p.stroke(30, alpha);
            p.strokeWeight(0.6);
            p.line(l.x1, l.y1, l.x2, l.y2);
            index++;
        }
    };

    p.mousePressed = function() {
        p.background(245);
        initialiseer();
    };
};
