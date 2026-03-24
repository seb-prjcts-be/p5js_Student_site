// Basis p5.js voorbeeld - combineert vormen, kleur, variabelen en interactie
window.sketch_example_basis = function(p) {
    let x = 200;
    let y = 200;
    let diameter = 50;
    let kleur = 0;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.colorMode(p.RGB);
    };

    p.draw = function() {
        p.background(240);
        
        // Verander kleur op basis van muispositie
        if (p.mouseX > p.width / 2) {
            kleur = p.color(255, 0, 0); // Rood
        } else {
            kleur = p.color(0, 0, 255); // Blauw
        }
        
        p.fill(kleur);
        p.noStroke();
        
        // Teken hoofd cirkel
        p.ellipse(x, y, diameter, diameter);
        
        // Teken meerdere kleine cirkels in een loop
        p.fill(255, 255, 0);
        for (let i = 0; i < 5; i++) {
            let offsetX = p.cos(p.frameCount * 0.05 + i) * 80;
            let offsetY = p.sin(p.frameCount * 0.05 + i) * 80;
            p.ellipse(x + offsetX, y + offsetY, 20, 20);
        }
        
        // Teken rechthoek met if-statement
        if (p.mouseIsPressed) {
            p.fill(0, 255, 0);
            p.rect(p.mouseX - 25, p.mouseY - 25, 50, 50);
        }
    };
};

