// Objecten & Classes voorbeeld - stuitende ballen als class-instanties
window.sketch_example_objecten = function (p) {

    class Bal {
        constructor(x, y, diameter) {
            this.x = x;
            this.y = y;
            this.d = diameter || p.random(18, 50);
            this.vx = p.random(-3, 3);
            this.vy = p.random(-3, 3);
            this.hue = p.random(360);
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < this.d / 2 || this.x > p.width - this.d / 2) {
                this.vx *= -1;
                this.hue = (this.hue + 30) % 360; // Kleur bij botsing
            }
            if (this.y < this.d / 2 || this.y > p.height - this.d / 2) {
                this.vy *= -1;
                this.hue = (this.hue + 30) % 360;
            }
        }

        teken() {
            p.fill(this.hue, 80, 90, 85);
            p.noStroke();
            p.circle(this.x, this.y, this.d);
        }

        // Methode die iets berekent
        raaktMuis() {
            return p.dist(this.x, this.y, p.mouseX, p.mouseY) < this.d / 2;
        }
    }

    let ballen = [];

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        for (let i = 0; i < 12; i++) {
            ballen.push(new Bal(p.random(p.width), p.random(p.height)));
        }
    };

    p.draw = function () {
        p.background(220, 15, 12);

        for (let bal of ballen) {
            bal.update();
            // Licht op als de muis erbij is
            if (bal.raaktMuis()) {
                p.fill(bal.hue, 60, 100, 100);
                p.noStroke();
                p.circle(bal.x, bal.y, bal.d * 1.4);
            }
            bal.teken();
        }

        p.fill(0, 0, 90, 80);
        p.noStroke();
        p.textSize(13);
        p.text(`Klik om een bal toe te voegen  |  ${ballen.length} ballen`, 10, 20);
    };

    p.mousePressed = function () {
        ballen.push(new Bal(p.mouseX, p.mouseY));
    };
};
