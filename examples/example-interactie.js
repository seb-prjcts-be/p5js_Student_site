// Interactie en animatie voorbeeld
window.sketch_example_interactie = function (p) {
    let particles = [];
    let trail = [];

    p.setup = function () {
        const canvas = p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 1);
    };

    p.draw = function () {
        p.background(0, 0, 20, 20); // Semi-transparant voor trail effect

        // Voeg muispositie toe aan trail
        trail.push({ x: p.mouseX, y: p.mouseY, t: p.millis() });

        // Verwijder oude trail punten
        trail = trail.filter(point => p.millis() - point.t < 500);

        // Teken trail
        p.strokeWeight(3);
        for (let i = 0; i < trail.length - 1; i++) {
            let alpha = p.map(i, 0, trail.length, 100, 0);
            p.stroke((p.frameCount + i * 2) % 360, 80, 100, alpha / 100);
            p.line(trail[i].x, trail[i].y, trail[i + 1].x, trail[i + 1].y);
        }

        // Update en teken particles
        for (let particle of particles) {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;

            // Zwaartekracht effect
            particle.vy += 0.1;

            // Teken particle
            p.fill(particle.hue, 80, 100, p.map(particle.life, 0, 60, 0, 1));
            p.noStroke();
            p.ellipse(particle.x, particle.y, particle.size, particle.size);
        }

        // Verwijder dode particles
        particles = particles.filter(p => p.life > 0);
    };

    p.mousePressed = function () {
        // Maak explosie van particles bij klik
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: p.mouseX,
                y: p.mouseY,
                vx: p.random(-3, 3),
                vy: p.random(-5, -1),
                size: p.random(5, 15),
                hue: (p.frameCount * 2 + i * 10) % 360,
                life: 60
            });
        }
    };

    p.mouseDragged = function () {
        // Voeg particles toe tijdens slepen
        if (p.frameCount % 3 === 0) {
            particles.push({
                x: p.mouseX + p.random(-10, 10),
                y: p.mouseY + p.random(-10, 10),
                vx: p.random(-1, 1),
                vy: p.random(-2, 0),
                size: p.random(3, 8),
                hue: (p.frameCount * 3) % 360,
                life: 40
            });
        }
    };
};

