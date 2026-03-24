// Eenvoudig p5.js voorbeeld
window.sketch_example_over_p5js = function(p) {
    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(245);
    };

    p.draw = function() {
        p.background(245);
        
        // Teken een cirkel die de muis volgt
        p.fill(0, 0, 255);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 50, 50);

        // Teken een rechthoek op een vaste positie
        p.fill(255, 0, 0);
        p.rect(100, 100, 80, 80);
        
        // Teken een lijn
        p.stroke(0);
        p.strokeWeight(2);
        p.line(0, 0, p.mouseX, p.mouseY);
    };
};

