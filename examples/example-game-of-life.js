// Conway's Game of Life — cellulair automaat
window.sketch_example_game_of_life = function(p) {
    const cols = 80;
    const rows = 50;
    let cellW, cellH;
    let grid, next;

    function maakGrid(vullen) {
        return Array.from({length: cols}, () =>
            Array.from({length: rows}, () =>
                vullen ? (Math.random() > 0.72 ? 1 : 0) : 0
            )
        );
    }

    function telBuren(g, x, y) {
        let sum = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                sum += g[(x + i + cols) % cols][(y + j + rows) % rows];
            }
        }
        return sum;
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        cellW = p.width / cols;
        cellH = p.height / rows;
        p.frameRate(14);
        grid = maakGrid(true);
        next = maakGrid(false);
    };

    p.draw = function() {
        p.background(255);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (grid[i][j] === 1) {
                    p.fill(20);
                    p.noStroke();
                    p.rect(i * cellW, j * cellH, cellW - 1, cellH - 1);
                }
            }
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let n = telBuren(grid, i, j);
                let cel = grid[i][j];
                next[i][j] = (cel === 1 && (n === 2 || n === 3)) ||
                             (cel === 0 && n === 3) ? 1 : 0;
            }
        }

        [grid, next] = [next, grid];
    };

    p.mousePressed = function() {
        grid = maakGrid(true);
    };
};
