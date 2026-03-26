// setup() en draw() voorbeeld - een cirkel volgt de muis
// Beschikbare concepten: setup(), draw(), createCanvas(), background(), ellipse(), mouseX, mouseY
window.sketch_example_basis = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
    };

    p.draw = function() {
        p.background(240);

        // Grote cirkel volgt de muis
        p.fill(80, 160, 255);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 60, 60);

        // Vaste cirkel in het midden
        p.fill(255, 120, 80);
        p.ellipse(300, 200, 40, 40);
    };
};
