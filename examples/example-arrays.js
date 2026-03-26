// Particle system voorbeeld - array van objecten met positie, snelheid en kleur
window.sketch_example_arrays = function (p) {
    let particles = [];
    const MAX_PARTICLES = 300;

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        p.noStroke();
    };

    p.draw = function () {
        p.background(220, 20, 10, 30); // semi-transparant voor trail effect

        // Spawn automatisch bij muisbeweging
        if (p.mouseIsPressed && particles.length < MAX_PARTICLES) {
            for (let i = 0; i < 3; i++) {
                particles.push({
                    x: p.mouseX + p.random(-10, 10),
                    y: p.mouseY + p.random(-10, 10),
                    vx: p.random(-2, 2),
                    vy: p.random(-4, -0.5),
                    grootte: p.random(8, 25),
                    hue: (p.frameCount * 2) % 360,
                    life: 255
                });
            }
        }

        // Update en teken alle particles
        for (let par of particles) {
            par.x += par.vx;
            par.y += par.vy;
            par.vy += 0.12;   // zwaartekracht
            par.life -= 3;

            let alpha = p.map(par.life, 0, 255, 0, 100);
            p.fill(par.hue, 80, 100, alpha);
            p.circle(par.x, par.y, par.grootte);
        }

        // filter() verwijdert dode particles uit de array
        particles = particles.filter(par => par.life > 0 && par.y < p.height + 30);

        // Teller
        p.fill(0, 0, 100, 80);
        p.noStroke();
        p.textSize(13);
        p.text(`Klik en sleep  |  particles: ${particles.length}`, 10, 20);
    };

    p.mousePressed = function () {
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: p.mouseX,
                y: p.mouseY,
                vx: p.random(-4, 4),
                vy: p.random(-6, -1),
                grootte: p.random(10, 30),
                hue: p.random(360),
                life: 255
            });
        }
    };
};
