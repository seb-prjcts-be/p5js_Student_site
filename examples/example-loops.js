// Loops: geneste for-loops maken een interactief puntjesraster
window.sketch_example_loops = function (p) {

    p.setup = function () {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function () {
        p.background(245);

        let stapX = 50;
        let stapY = 50;

        for (let x = stapX / 2; x < p.width; x += stapX) {
            for (let y = stapY / 2; y < p.height; y += stapY) {

                // Afstand van dit punt tot de muis
                let d = p.dist(p.mouseX, p.mouseY, x, y);

                // Grootte en kleur op basis van afstand
                let grootte = p.map(d, 0, 250, 42, 6);
                let grijs = p.map(d, 0, 250, 30, 210);

                p.fill(grijs);
                p.circle(x, y, grootte);
            }
        }
    };
};
