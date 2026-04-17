// Generative design voorbeeld - vlekken verschijnen langzaam op het canvas
// Beschikbare concepten: setup(), draw(), createCanvas(), background(), ellipse(), random(), fill()
window.sketch_example_generative = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(240);
        p.noStroke();
    };

    p.draw = function() {
        // Elke frame één nieuwe vlek met willekeurige positie, grootte en kleur
        let x = p.random(p.width);
        let y = p.random(p.height);
        let grootte = p.random(10, 80);

        p.fill(p.random(255), p.random(255), p.random(255), 40);
        p.ellipse(x, y, grootte, grootte);
    };
};
