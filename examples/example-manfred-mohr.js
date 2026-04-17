// Geïnspireerd op Manfred Mohr - Cubic Limit
// Raster van kubusvariaties met willekeurige lijnselectie
window.sketch_example_manfred_mohr = function(p) {
    let kolommen = 5;
    let marge = 30;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noLoop();
        genereer();
    };

    function genereer() {
        p.background(255);
        p.stroke(0);
        p.strokeWeight(1.5);
        p.noFill();

        let celW = (p.width - marge * 2) / kolommen;
        let rijen = p.floor((p.height - marge * 2) / celW);

        for (let rij = 0; rij < rijen; rij++) {
            for (let kol = 0; kol < kolommen; kol++) {
                let cx = marge + kol * celW + celW / 2;
                let cy = marge + rij * celW + celW / 2;
                let g = celW * 0.7;

                p.push();
                p.translate(cx, cy);
                tekenKubusVariatie(g);
                p.pop();
            }
        }
    }

    function tekenKubusVariatie(g) {
        let h = g / 2;
        let d = g * 0.25;

        let punten = [
            [-h, -h], [h, -h], [h, h], [-h, h],
            [-h + d, -h - d], [h + d, -h - d],
            [h + d, h - d], [-h + d, h - d]
        ];

        let lijnen = [
            [0,1], [1,2], [2,3], [3,0],
            [4,5], [5,6], [6,7], [7,4],
            [0,4], [1,5], [2,6], [3,7]
        ];

        let aantal = p.floor(p.random(4, 9));
        let indices = [...Array(12).keys()];

        for (let i = indices.length - 1; i > 0; i--) {
            let j = p.floor(p.random(i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        for (let i = 0; i < aantal; i++) {
            let l = lijnen[indices[i]];
            let a = punten[l[0]];
            let b = punten[l[1]];
            p.line(a[0], a[1], b[0], b[1]);
        }
    }

    p.mousePressed = function() {
        genereer();
    };
};
