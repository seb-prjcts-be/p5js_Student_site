// Lissajous-figuur met animerende faseverschuiving
window.sketch_example_lissajous = function(p) {
    let a = 3;
    let b = 2;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noFill();
    };

    p.draw = function() {
        p.background(0, 18);

        let delta = p.frameCount * 0.008;

        // Kleur verschuift mee met de fase
        let hue = (p.frameCount * 0.5) % 360;
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.stroke(hue, 70, 100, 70);
        p.strokeWeight(1.5);

        p.beginShape();
        for (let t = 0; t < p.TWO_PI; t += 0.005) {
            let x = p.width / 2 + 220 * p.sin(a * t + delta);
            let y = p.height / 2 + 170 * p.sin(b * t);
            p.vertex(x, y);
        }
        p.endShape();

        p.colorMode(p.RGB, 255);
    };

    // Klik om andere frequenties te kiezen
    p.mousePressed = function() {
        const opties = [[1,1],[2,1],[3,2],[4,3],[5,4],[3,4]];
        const keuze = opties[Math.floor(Math.random() * opties.length)];
        a = keuze[0];
        b = keuze[1];
        p.background(0);
    };
};
