// Chaos Game - Sierpinski-driehoek met gekleurde punten
window.sketch_example_chaos_game = function(p) {
    let hoeken = [];
    let px, py;
    let kleuren;

    function reset() {
        p.background(15, 15, 30);
        px = p.random(p.width);
        py = p.random(p.height);

        // Teken de hoekpunten
        p.noStroke();
        for (let i = 0; i < hoeken.length; i++) {
            p.fill(kleuren[i]);
            p.circle(hoeken[i].x, hoeken[i].y, 8);
        }
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        p.strokeWeight(1);

        hoeken = [
            p.createVector(300, 15),
            p.createVector(15, 385),
            p.createVector(585, 385)
        ];

        kleuren = [
            p.color(255, 100, 100),
            p.color(100, 255, 150),
            p.color(100, 150, 255)
        ];

        reset();
    };

    p.draw = function() {
        for (let i = 0; i < 80; i++) {
            let keuze = p.floor(p.random(3));
            px = p.lerp(px, hoeken[keuze].x, 0.5);
            py = p.lerp(py, hoeken[keuze].y, 0.5);

            p.stroke(kleuren[keuze]);
            p.point(px, py);
        }

        // Info
        p.fill(180);
        p.noStroke();
        p.textSize(11);
        p.textAlign(p.LEFT);
        p.text('Punten: ' + p.frameCount * 80, 15, 20);
        p.text('Klik om te resetten', 15, p.height - 10);
    };

    p.mousePressed = function() {
        reset();
    };
};
