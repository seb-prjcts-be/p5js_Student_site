// Buggy sketch voor de debuggen & prompting les
// Bevat 3 bewuste fouten die leerlingen moeten vinden
window.sketch_example_ai_debuggen = function(p) {
    let cirkels = [];

    p.setup = function() {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100);

        for (let i = 0; i < 5; i++) {
            cirkels.push({
                x: p.random(p.width),
                y: p.random(p.height),
                snelheid: p.random(1, 3),
                kleur: p.random(360),
                grootte: p.random(20, 60)
            });
        }
    };

    p.draw = function() {
        p.background(0, 0, 95);

        // Bug 1: <= moet < zijn (out of bounds)
        for (let i = 0; i <= cirkels.length; i++) {
            let c = cirkels[i];

            c.x += c.snelheid;

            if (c.x > p.width) {
                c.x = 0;
            }

            p.fill(c.kleur, 70, 90);
            p.noStroke();
            // Bug 2: c.maat bestaat niet, moet c.grootte zijn
            p.circle(c.x, c.y, c.maat);
        }
    };
};
