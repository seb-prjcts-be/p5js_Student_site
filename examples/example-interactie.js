// Muis-interactie voorbeeld — teken met de muis
// Beschikbare concepten: alles t/m muis-interactie (#11), incl. loops en functies
// Geen arrays, geen objecten — tekent rechtstreeks op het canvas
window.sketch_example_interactie = function(p) {
    let penKleur;
    let penGrootte;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(245);
        penKleur = p.color(80, 160, 255);
        penGrootte = 8;
    };

    p.draw = function() {
        // Teken een indicator bij de muis
        p.noFill();
        p.stroke(0, 80);
        p.strokeWeight(1);
        p.ellipse(p.mouseX, p.mouseY, penGrootte, penGrootte);
    };

    p.mouseDragged = function() {
        // Teken een lijn van vorige naar huidige muispositie
        p.stroke(penKleur);
        p.strokeWeight(penGrootte);
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    };

    p.mousePressed = function() {
        // Wissel van kleur bij elke klik
        penKleur = p.color(p.random(255), p.random(255), p.random(255));
        penGrootte = p.random(4, 20);
    };

    p.keyPressed = function() {
        // Spatie = canvas wissen
        if (p.key === ' ') {
            p.background(245);
        }
    };
};
