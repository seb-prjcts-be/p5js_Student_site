// John Whitney - harmonische beweging demo
window.sketch_example_john_whitney = function(p) {
    let punten = 64;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.strokeWeight(3);
        p.noFill();
    };

    p.draw = function() {
        p.background(0, 0, 4, 15);

        let t = p.frameCount * 0.008;
        let cx = p.width / 2;
        let cy = p.height / 2;
        let straal = p.min(p.width, p.height) * 0.42;

        for (let i = 0; i < punten; i++) {
            let freq = i + 1;
            let hoek = t * freq;
            let x = cx + p.cos(hoek) * straal * (i / punten);
            let y = cy + p.sin(hoek * 0.5) * straal * (i / punten);

            let hue = p.map(i, 0, punten, 180, 300);
            p.stroke(hue, 70, 90);
            p.point(x, y);
        }
    };
};
