// Perlin noise voorbeeld — noise flow field met deeltjes
window.sketch_example_noise = function (p) {
    const N = 120;
    let particles = [];
    let schaal = 0.004;

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.background(220, 20, 10);

        for (let i = 0; i < N; i++) {
            particles.push({
                x: p.random(p.width),
                y: p.random(p.height),
                offX: p.random(1000),
                offY: p.random(1000) + 500,
                hue: p.random(360),
                size: p.random(3, 8)
            });
        }
    };

    p.draw = function () {
        p.background(220, 20, 10, 8); // Spoor vervagen

        for (let par of particles) {
            // Noise bepaalt positie
            let x = p.noise(par.offX) * p.width;
            let y = p.noise(par.offY) * p.height;

            // Teken lijn van vorige naar nieuwe positie
            p.stroke(par.hue, 70, 100, 60);
            p.strokeWeight(par.size * 0.6);
            p.point(x, y);

            par.offX += schaal;
            par.offY += schaal;
            par.hue = (par.hue + 0.3) % 360;

            // Reset als het deeltje te ver afwijkt
            if (x < 0 || x > p.width || y < 0 || y > p.height) {
                par.offX = p.random(1000);
                par.offY = p.random(1000) + 500;
            }
        }

        // Label
        p.noStroke();
        p.fill(0, 0, 80, 70);
        p.textSize(12);
        p.text('Perlin noise flow field', 10, 20);
    };
};
