// Functies voorbeeld - herbruikbare tekenBloem() functie
// Beschikbare concepten: alles t/m functies (#10), incl. loops (#9)
// Geen arrays, geen objecten, geen translate/rotate
window.sketch_example_functies = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function() {
        p.background(30, 50, 30);

        // Roep de functie meerdere keren aan met verschillende parameters
        tekenBloem(100, 120, 60, 255, 100, 150);
        tekenBloem(250, 280, 80, 255, 200, 50);
        tekenBloem(420, 150, 50, 150, 100, 255);
        tekenBloem(500, 320, 70, 255, 150, 200);

        // Bloem bij de muis
        tekenBloem(p.mouseX, p.mouseY, 40, 255, 255, 255);
    };

    // Herbruikbare functie met parameters
    function tekenBloem(x, y, grootte, r, g, b) {
        // Blaadjes: 6 cirkels rond het middelpunt
        p.fill(r, g, b, 170);
        for (let i = 0; i < 6; i++) {
            let hoek = (p.TWO_PI / 6) * i;
            let bx = x + p.cos(hoek) * grootte * 0.4;
            let by = y + p.sin(hoek) * grootte * 0.4;
            p.ellipse(bx, by, grootte * 0.5, grootte * 0.5);
        }

        // Geel hartje
        p.fill(255, 230, 50);
        p.ellipse(x, y, grootte * 0.3, grootte * 0.3);
    }
};
