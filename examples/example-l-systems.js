// L-systeem: organisch plantmodel via string-herschrijving
window.sketch_example_l_systems = function(p) {
    let sentence;
    let len;
    const hoek = 25;

    function genereer(iteraties) {
        sentence = "X";
        len = 90;
        for (let i = 0; i < iteraties; i++) {
            let nieuw = "";
            for (let c of sentence) {
                if (c === "X") nieuw += "F+[[X]-X]-F[-FX]+X";
                else if (c === "F") nieuw += "FF";
                else nieuw += c;
            }
            sentence = nieuw;
            len *= 0.5;
        }
    }

    function teken() {
        p.background(252);
        p.push();
        p.translate(p.width / 2, p.height - 5);
        p.rotate(-p.HALF_PI);
        p.strokeWeight(1);

        for (let c of sentence) {
            if (c === "F") {
                // Kleur varieert met diepte (stack-grootte als benadering)
                p.stroke(40, 110, 40);
                p.line(0, 0, len, 0);
                p.translate(len, 0);
            } else if (c === "+") {
                p.rotate(p.radians(hoek));
            } else if (c === "-") {
                p.rotate(p.radians(-hoek));
            } else if (c === "[") {
                p.push();
            } else if (c === "]") {
                p.pop();
            }
        }
        p.pop();
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noLoop();
        genereer(5);
    };

    p.draw = function() {
        teken();
    };

    // Klik om opnieuw te genereren met willekeurige hoek
    p.mousePressed = function() {
        genereer(4 + Math.floor(Math.random() * 3));
        p.redraw();
    };
};
