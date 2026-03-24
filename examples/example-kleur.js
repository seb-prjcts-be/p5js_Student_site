// Kleur: HSB-kleurwiel met muisinteractie
window.sketch_example_kleur = function (p) {

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noStroke();
    };

    p.draw = function () {
        p.background(0, 0, 12);

        let aantalCirkels = 12;
        let r = 140;
        let cx = p.width / 2;
        let cy = p.height / 2;

        // Kleurwiel van cirkels
        for (let i = 0; i < aantalCirkels; i++) {
            let hoek = p.map(i, 0, aantalCirkels, 0, p.TWO_PI);
            let x = cx + p.cos(hoek) * r;
            let y = cy + p.sin(hoek) * r;
            let hue = p.map(i, 0, aantalCirkels, 0, 360);

            // Transparantie reageert op afstand tot muis
            let d = p.dist(p.mouseX, p.mouseY, x, y);
            let alpha = p.map(d, 0, 200, 100, 40);

            p.fill(hue, 80, 95, alpha);
            p.circle(x, y, 70);
        }

        // Middelste cirkel toont mengkleur op basis van muispositie
        let hMuis = p.map(p.mouseX, 0, p.width, 0, 360);
        let sMuis = p.map(p.mouseY, 0, p.height, 20, 100);
        p.fill(hMuis, sMuis, 90, 90);
        p.circle(cx, cy, 80);
    };
};
