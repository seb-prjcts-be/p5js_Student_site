// Berekeningen: map() en dist() in een interactief cirkelraster
window.sketch_example_berekeningen = function (p) {

    const COLS = 10;
    const ROWS = 7;

    p.setup = function () {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function () {
        p.background(18);

        let stapX = p.width / COLS;
        let stapY = p.height / ROWS;

        for (let kolom = 0; kolom < COLS; kolom++) {
            for (let rij = 0; rij < ROWS; rij++) {
                let x = kolom * stapX + stapX / 2;
                let y = rij * stapY + stapY / 2;

                // dist() — afstand van dit rasterpunt tot de muis
                let d = p.dist(p.mouseX, p.mouseY, x, y);

                // map() — afstand omzetten naar grootte en kleur
                let grootte  = p.map(d, 0, 350, stapX * 0.95, 4);
                let tint     = p.map(d, 0, 350, 260, 30);   // blauw → donker
                let verzadig = p.map(d, 0, 350, 90, 20);

                p.colorMode(p.HSB, 360, 100, 100);
                p.fill(tint, verzadig, p.map(d, 0, 350, 95, 25));
                p.circle(x, y, grootte);
            }
        }
    };
};
