// ml5.js demo - simulatie van pose-detectie zonder webcam
// Toont hoe keypoints eruit zien als visuele output
window.sketch_example_ai_ml5js = function(p) {
    let punten = [];
    let verbindingen = [
        [0, 1], [0, 2], [1, 3], [2, 4],
        [5, 6], [5, 7], [7, 9], [6, 8], [8, 10],
        [5, 11], [6, 12], [11, 12],
        [11, 13], [13, 15], [12, 14], [14, 16]
    ];

    p.setup = function() {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);

        // Simuleer 17 BodyPose keypoints
        punten = [
            { naam: "neus", bx: 300, by: 80 },
            { naam: "linkeroog", bx: 285, by: 70 },
            { naam: "rechteroog", bx: 315, by: 70 },
            { naam: "linkeroor", bx: 265, by: 80 },
            { naam: "rechteroor", bx: 335, by: 80 },
            { naam: "linkerschouder", bx: 240, by: 150 },
            { naam: "rechterschouder", bx: 360, by: 150 },
            { naam: "linkerelleboog", bx: 200, by: 220 },
            { naam: "rechterelleboog", bx: 400, by: 220 },
            { naam: "linkerpols", bx: 170, by: 290 },
            { naam: "rechterpols", bx: 430, by: 290 },
            { naam: "linkerheup", bx: 260, by: 280 },
            { naam: "rechterheup", bx: 340, by: 280 },
            { naam: "linkerknie", bx: 250, by: 340 },
            { naam: "rechterknie", bx: 350, by: 340 },
            { naam: "linkerenkel", bx: 245, by: 390 },
            { naam: "rechterenkel", bx: 355, by: 390 }
        ];

        for (let punt of punten) {
            punt.x = punt.bx;
            punt.y = punt.by;
        }
    };

    p.draw = function() {
        p.background(220, 10, 98);

        // Beweeg punten licht mee met de muis
        let muisInvloed = 0.05;
        for (let punt of punten) {
            let dx = (p.mouseX - p.width / 2) * muisInvloed;
            let dy = (p.mouseY - p.height / 2) * muisInvloed;
            punt.x = punt.bx + dx + p.sin(p.frameCount * 0.02 + punt.bx * 0.01) * 3;
            punt.y = punt.by + dy + p.cos(p.frameCount * 0.025 + punt.by * 0.01) * 2;
        }

        // Teken verbindingen
        p.stroke(180, 50, 80, 60);
        p.strokeWeight(3);
        for (let v of verbindingen) {
            let a = punten[v[0]];
            let b = punten[v[1]];
            p.line(a.x, a.y, b.x, b.y);
        }

        // Teken keypoints
        p.noStroke();
        for (let i = 0; i < punten.length; i++) {
            let punt = punten[i];
            let kleur = (i * 21) % 360;
            p.fill(kleur, 70, 90, 90);
            p.circle(punt.x, punt.y, 14);
        }

        // Label
        p.fill(0, 0, 40);
        p.noStroke();
        p.textAlign(p.CENTER);
        p.textSize(13);
        p.text("Beweeg je muis - simulatie van BodyPose keypoints", p.width / 2, 30);
    };
};
