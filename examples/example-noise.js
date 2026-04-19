// Flow field: 2D noise geeft op elke (x, y) een richting (hoek).
// Deeltjes volgen het veld en laten sporen achter.
window.sketch_example_noise = function (p) {
    const N = 250;
    const schaal = 0.004;
    const stap = 1.4;
    let particles = [];

    p.setup = function () {
        p.createCanvas(600, 400);
        p.background(10);

        for (let i = 0; i < N; i++) {
            particles.push({
                x: p.random(p.width),
                y: p.random(p.height),
                hue: p.random(180, 320)
            });
        }
        p.colorMode(p.HSB, 360, 100, 100, 100);
    };

    p.draw = function () {
        p.noStroke();
        p.fill(0, 0, 5, 6);
        p.rect(0, 0, p.width, p.height);

        p.strokeWeight(1.2);

        for (let par of particles) {
            let hoek = p.noise(par.x * schaal, par.y * schaal) * p.TWO_PI * 2;

            let nx = par.x + p.cos(hoek) * stap;
            let ny = par.y + p.sin(hoek) * stap;

            p.stroke(par.hue, 70, 100, 50);
            p.line(par.x, par.y, nx, ny);

            par.x = nx;
            par.y = ny;

            if (par.x < 0 || par.x > p.width || par.y < 0 || par.y > p.height) {
                par.x = p.random(p.width);
                par.y = p.random(p.height);
            }
        }
    };
};
