// Circle packing — cirkels groeien tot ze elkaar of de rand raken.
// Klik om opnieuw te starten.

window.sketch_example_circle_packing = function(p) {
    let cirkels = [];
    let pogingPerFrame = 8;
    let maxStraal = 90;
    let voltooid = false;
    let misluktePogingen = 0;
    let maxMislukt = 500;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(12);
    };

    p.draw = function() {
        if (!voltooid) {
            let gelukt = false;
            for (let i = 0; i < pogingPerFrame; i++) {
                let x = p.random(p.width);
                let y = p.random(p.height);
                if (isGeldig(x, y, 2)) {
                    cirkels.push({ x, y, r: 2, groeit: true });
                    gelukt = true;
                    misluktePogingen = 0;
                }
            }
            if (!gelukt) {
                misluktePogingen++;
                if (misluktePogingen > maxMislukt) voltooid = true;
            }
        }

        p.background(12);
        p.noFill();

        for (let c of cirkels) {
            if (c.groeit) {
                c.r += 0.4;
                if (raaktRand(c) || raaktAnder(c) || c.r > maxStraal) {
                    c.r -= 0.4;
                    c.groeit = false;
                }
            }
            let helderheid = p.map(c.r, 2, maxStraal, 80, 220);
            p.stroke(helderheid);
            p.strokeWeight(0.7);
            p.circle(c.x, c.y, c.r * 2);
        }
    };

    function isGeldig(x, y, r) {
        if (x - r < 0 || x + r > p.width || y - r < 0 || y + r > p.height) return false;
        for (let c of cirkels) {
            if (p.dist(x, y, c.x, c.y) < r + c.r + 2) return false;
        }
        return true;
    }

    function raaktRand(c) {
        return c.x - c.r <= 1 || c.x + c.r >= p.width - 1 ||
               c.y - c.r <= 1 || c.y + c.r >= p.height - 1;
    }

    function raaktAnder(c) {
        for (let ander of cirkels) {
            if (ander === c) continue;
            if (p.dist(c.x, c.y, ander.x, ander.y) < c.r + ander.r + 1) return true;
        }
        return false;
    }

    p.mousePressed = function() {
        cirkels = [];
        voltooid = false;
        misluktePogingen = 0;
        p.background(12);
    };
};
