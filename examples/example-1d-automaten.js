// 1D cellulaire automaat met wisselende regels
window.sketch_example_1d_automaten = function(p) {
    const cellSize = 6;
    const rules = [30, 90, 110, 184];
    let ruleIndex = 0;
    let cols, rows;
    let currentRow;
    let generation;

    function nextRow(row) {
        const next = Array(cols).fill(0);

        for (let i = 0; i < cols; i++) {
            const left = row[(i - 1 + cols) % cols];
            const mid = row[i];
            const right = row[(i + 1) % cols];
            const pattern = left * 4 + mid * 2 + right;
            next[i] = (rules[ruleIndex] >> pattern) & 1;
        }

        return next;
    }

    function startRule() {
        cols = Math.floor(p.width / cellSize);
        rows = Math.floor(p.height / cellSize);
        currentRow = Array(cols).fill(0);
        currentRow[Math.floor(cols / 2)] = 1;
        generation = 0;
        p.background(247, 245, 239);
        p.loop();
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        startRule();
    };

    p.draw = function() {
        if (generation >= rows) {
            p.noLoop();
        } else {
            p.noStroke();
            for (let i = 0; i < cols; i++) {
                if (currentRow[i]) {
                    p.fill(34, 42, 72);
                } else {
                    p.fill(247, 245, 239);
                }
                p.rect(i * cellSize, generation * cellSize, cellSize, cellSize);
            }

            currentRow = nextRow(currentRow);
            generation++;
        }

        p.noStroke();
        p.fill(247, 245, 239, 230);
        p.rect(0, 0, 120, 28);
        p.fill(30, 35, 55);
        p.textSize(12);
        p.text(`rule ${rules[ruleIndex]}`, 10, 18);
    };

    p.mousePressed = function() {
        ruleIndex = (ruleIndex + 1) % rules.length;
        startRule();
    };
};
