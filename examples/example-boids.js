// Boids demo: flocking zonder leider
window.sketch_example_boids = function(p) {
    let boids = [];

    class Boid {
        constructor(x, y) {
            this.pos = p.createVector(x, y);
            this.vel = p5.Vector.random2D().mult(p.random(1, 2));
            this.acc = p.createVector(0, 0);
        }

        applyForce(force) {
            this.acc.add(force);
        }

        flock(others) {
            const alignment = p.createVector(0, 0);
            const cohesion = p.createVector(0, 0);
            const separation = p.createVector(0, 0);
            let nearby = 0;
            let tooClose = 0;

            for (let other of others) {
                if (other === this) continue;

                const distance = p5.Vector.dist(this.pos, other.pos);

                if (distance < 55) {
                    alignment.add(other.vel);
                    cohesion.add(other.pos);
                    nearby++;
                }

                if (distance > 0 && distance < 24) {
                    const diff = p5.Vector.sub(this.pos, other.pos);
                    diff.div(distance * distance);
                    separation.add(diff);
                    tooClose++;
                }
            }

            if (nearby > 0) {
                alignment.div(nearby);
                alignment.setMag(2.2);
                alignment.sub(this.vel);
                alignment.limit(0.05);
                this.applyForce(alignment);

                cohesion.div(nearby);
                cohesion.sub(this.pos);
                cohesion.setMag(1.8);
                cohesion.sub(this.vel);
                cohesion.limit(0.03);
                this.applyForce(cohesion);
            }

            if (tooClose > 0) {
                separation.div(tooClose);
                separation.setMag(2.8);
                separation.sub(this.vel);
                separation.limit(0.08);
                this.applyForce(separation);
            }
        }

        update() {
            this.vel.add(this.acc);
            this.vel.limit(2.6);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.wrap();
        }

        wrap() {
            if (this.pos.x < 0) this.pos.x = p.width;
            if (this.pos.x > p.width) this.pos.x = 0;
            if (this.pos.y < 0) this.pos.y = p.height;
            if (this.pos.y > p.height) this.pos.y = 0;
        }

        draw() {
            const angle = this.vel.heading();

            p.push();
            p.translate(this.pos.x, this.pos.y);
            p.rotate(angle);
            p.noStroke();
            p.fill(30, 40, 80, 220);
            p.triangle(10, 0, -8, 5, -8, -5);
            p.pop();
        }
    }

    function seedBoids(count) {
        boids = [];
        for (let i = 0; i < count; i++) {
            boids.push(new Boid(p.random(p.width), p.random(p.height)));
        }
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        seedBoids(34);
    };

    p.draw = function() {
        p.background(247, 245, 239);

        for (let boid of boids) {
            boid.flock(boids);
        }

        for (let boid of boids) {
            boid.update();
            boid.draw();
        }

        p.noStroke();
        p.fill(30, 35, 55);
        p.textSize(12);
        p.text(`boids: ${boids.length}`, 10, 18);
    };

    p.mousePressed = function() {
        boids.push(new Boid(p.mouseX, p.mouseY));
    };
};
