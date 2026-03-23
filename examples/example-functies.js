// Functies voorbeeld — klik om bloemen te plaatsen met een herbruikbare tekenBloem() functie
window.sketch_example_functies = function (p) {
    let bloemen = [];

    p.setup = function () {
        p.createCanvas(600, 400);
        p.noStroke();
        // Zet een paar startbloemen
        bloemen.push({ x: 150, y: 200, grootte: 70, tint: [255, 150, 180] });
        bloemen.push({ x: 350, y: 150, grootte: 90, tint: [200, 100, 255] });
        bloemen.push({ x: 500, y: 280, grootte: 55, tint: [255, 220,  80] });
    };

    p.draw = function () {
        p.background(30, 50, 30);

        for (let bloem of bloemen) {
            tekenBloem(bloem.x, bloem.y, bloem.grootte, bloem.tint);
        }

        // Zweef-bloem bij muis
        tekenBloem(p.mouseX, p.mouseY, 50, [255, 255, 255]);

        p.fill(200);
        p.textSize(13);
        p.text('Klik om een bloem te plaatsen', 10, 20);
    };

    p.mousePressed = function () {
        bloemen.push({
            x: p.mouseX,
            y: p.mouseY,
            grootte: p.random(45, 100),
            tint: [p.random(150, 255), p.random(80, 200), p.random(100, 255)]
        });
    };

    // Herbruikbare tekenBloem() — parameters bepalen waar en hoe groot
    function tekenBloem(x, y, grootte, tint) {
        let blaadjes = 7;
        for (let i = 0; i < blaadjes; i++) {
            let hoek = (p.TWO_PI / blaadjes) * i;
            p.push();
            p.translate(x, y);
            p.rotate(hoek);
            p.fill(tint[0], tint[1], tint[2], 170);
            p.ellipse(grootte * 0.55, 0, grootte, grootte * 0.45);
            p.pop();
        }
        p.fill(255, 220, 60);
        p.circle(x, y, grootte * 0.4);
    }
};
