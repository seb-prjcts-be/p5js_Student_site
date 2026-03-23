// p5.js 2.0 features voorbeeld - curves en pointer events
window.sketch_example_p5js2 = function (p) {
    let curvePoints = [];

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100);

        // Genereer curve punten
        for (let i = 0; i <= 20; i++) {
            let t = i / 20;
            curvePoints.push({
                x: p.width * t,
                y: p.height / 2 + p.sin(t * p.TWO_PI * 2) * 50
            });
        }
    };

    p.draw = function () {
        p.background(0, 0, 95);

        // Teken curve met Bézier
        p.stroke(200, 80, 100);
        p.strokeWeight(3);
        p.noFill();

        if (curvePoints.length >= 4) {
            for (let i = 0; i < curvePoints.length - 3; i += 3) {
                p.bezier(
                    curvePoints[i].x, curvePoints[i].y,
                    curvePoints[i + 1].x, curvePoints[i + 1].y,
                    curvePoints[i + 2].x, curvePoints[i + 2].y,
                    curvePoints[i + 3].x, curvePoints[i + 3].y
                );
            }
        }

        // Teken curve punten
        p.fill(0, 80, 100);
        p.noStroke();
        for (let point of curvePoints) {
            p.ellipse(point.x, point.y, 8, 8);
        }

        // Gebruik mouse events (compatibel met p5.js 1.x)
        p.fill((p.frameCount * 2) % 360, 80, 100);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 30, 30);

        // Teken interactieve elementen
        p.fill(120, 80, 100);
        p.ellipse(p.mouseX + 50, p.mouseY, 20, 20);
        p.ellipse(p.mouseX - 50, p.mouseY, 20, 20);
    };

    p.mousePressed = function () {
        // Voeg nieuw punt toe bij klik
        curvePoints.push({
            x: p.mouseX,
            y: p.mouseY
        });
    };
};

