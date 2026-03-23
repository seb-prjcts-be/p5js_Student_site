// Turtle geometry demo — kleurrijke spirograaf-patronen
window.sketch_example_turtle = function(p) {
    let tx, ty, heading, penNeer;
    let patroon = 0;

    const patronen = [
        { stappen: 300, hoek: 89,  stapFactor: 0.5,  kleur: [20, 80, 180]  },
        { stappen: 180, hoek: 144, stapFactor: 0.8,  kleur: [180, 40, 40]  },
        { stappen: 400, hoek: 121, stapFactor: 0.35, kleur: [40, 140, 80]  },
        { stappen: 250, hoek: 91,  stapFactor: 0.6,  kleur: [140, 40, 160] },
        { stappen: 360, hoek: 89.5,stapFactor: 0.4,  kleur: [200, 120, 0]  },
    ];

    function turtleReset() {
        tx = p.width / 2;
        ty = p.height / 2;
        heading = -90;
        penNeer = true;
    }

    function forward(n) {
        let nx = tx + n * p.cos(p.radians(heading));
        let ny = ty + n * p.sin(p.radians(heading));
        if (penNeer) p.line(tx, ty, nx, ny);
        tx = nx;
        ty = ny;
    }

    function right(hoek) { heading += hoek; }

    function teken(config) {
        p.background(252);
        turtleReset();

        let [r, g, b] = config.kleur;
        p.strokeWeight(1);

        for (let i = 0; i < config.stappen; i++) {
            let t = i / config.stappen;
            p.stroke(
                r + t * (255 - r) * 0.5,
                g + t * (255 - g) * 0.5,
                b + t * (255 - b) * 0.5,
                180
            );
            forward(i * config.stapFactor);
            right(config.hoek);
        }
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noLoop();
        teken(patronen[patroon]);
    };

    p.mousePressed = function() {
        patroon = (patroon + 1) % patronen.length;
        teken(patronen[patroon]);
    };
};
