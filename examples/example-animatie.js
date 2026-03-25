// Animatie voorbeeld — roterende vormen met translate/rotate
// Beschikbare concepten: alles t/m animatie (#12), incl. sin/cos, translate, rotate, push/pop
// Geen arrays, geen objecten
window.sketch_example_animatie = function(p) {
    let hoek = 0;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function() {
        p.background(20, 20, 40);

        // Roterende ring van rechthoeken in het midden
        p.push();
        p.translate(p.width / 2, p.height / 2);

        for (let i = 0; i < 12; i++) {
            p.push();
            p.rotate(hoek + (p.TWO_PI / 12) * i);

            // Kleur varieert per rechthoek
            let r = p.map(p.sin(hoek + i), -1, 1, 80, 255);
            let b = p.map(p.cos(hoek + i), -1, 1, 80, 255);
            p.fill(r, 100, b, 200);

            p.rect(80, -10, 50, 20, 5);
            p.pop();
        }
        p.pop();

        // Kleine draaiende cirkel die rond het midden beweegt
        let bx = p.width / 2 + p.cos(hoek * 2) * 160;
        let by = p.height / 2 + p.sin(hoek * 2) * 120;
        p.fill(255, 220, 60);
        p.ellipse(bx, by, 20, 20);

        hoek += 0.02;
    };
};
