// Kleur voorbeeld - statische vormen met verschillende kleuren en transparantie
// Beschikbare concepten: vormen + fill(), stroke(), noFill(), noStroke(), RGB, alpha
window.sketch_example_kleur = function(p) {

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noLoop();
    };

    p.draw = function() {
        p.background(245);

        p.noStroke();

        // Drie overlappende cirkels - RGB primaire kleuren met transparantie
        p.fill(255, 0, 0, 120);
        p.ellipse(250, 170, 180, 180);

        p.fill(0, 255, 0, 120);
        p.ellipse(350, 170, 180, 180);

        p.fill(0, 0, 255, 120);
        p.ellipse(300, 260, 180, 180);

        // Onderaan: reeks rechthoeken met variatie in kleur
        p.fill(220, 80, 60);
        p.rect(50, 360, 80, 30);

        p.fill(60, 180, 120);
        p.rect(150, 360, 80, 30);

        p.fill(60, 120, 220);
        p.rect(250, 360, 80, 30);

        p.fill(220, 180, 40);
        p.rect(350, 360, 80, 30);

        p.fill(180, 60, 200);
        p.rect(450, 360, 80, 30);
    };
};
