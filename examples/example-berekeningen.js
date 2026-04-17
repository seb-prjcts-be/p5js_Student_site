// Berekeningen voorbeeld - cirkel reageert op muisafstand
// Beschikbare concepten: variabelen, mouseX, mouseY, map(), dist(), random()
window.sketch_example_berekeningen = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function() {
        p.background(18);

        let cx = p.width / 2;
        let cy = p.height / 2;

        // Afstand van muis tot het midden
        let d = p.dist(p.mouseX, p.mouseY, cx, cy);

        // map() - afstand omzetten naar grootte en kleur
        let grootte = p.map(d, 0, 350, 200, 20);
        let rood = p.map(d, 0, 350, 255, 30);
        let blauw = p.map(d, 0, 350, 30, 255);

        // Hoofdcirkel in het midden
        p.fill(rood, 80, blauw);
        p.ellipse(cx, cy, grootte, grootte);

        // Kleine cirkel bij de muis
        let muisGrootte = p.map(d, 0, 350, 10, 60);
        p.fill(blauw, 80, rood, 180);
        p.ellipse(p.mouseX, p.mouseY, muisGrootte, muisGrootte);

        // Verbindingslijn
        p.stroke(255, 60);
        p.strokeWeight(1);
        p.line(cx, cy, p.mouseX, p.mouseY);
        p.noStroke();
    };
};
