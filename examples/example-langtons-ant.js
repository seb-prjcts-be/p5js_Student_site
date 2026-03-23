// Langton's Ant demo met klikbare reset
window.sketch_example_langtons_ant = function(p) {
    const cellSize = 5;
    let cols, rows;
    let grid;
    let antX, antY, dir;

    function resetWorld() {
        grid = Array.from({ length: cols }, () => Array(rows).fill(0));
        antX = Math.floor(cols / 2);
        antY = Math.floor(rows / 2);
        dir = Math.floor(p.random(4));
    }

    function stepAnt() {
        const cell = grid[antX][antY];

        if (cell === 0) dir = (dir + 1) % 4;
        else dir = (dir + 3) % 4;

        grid[antX][antY] = 1 - cell;

        if (dir === 0) antY--;
        if (dir === 1) antX++;
        if (dir === 2) antY++;
        if (dir === 3) antX--;

        antX = (antX + cols) % cols;
        antY = (antY + rows) % rows;
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        cols = Math.floor(p.width / cellSize);
        rows = Math.floor(p.height / cellSize);
        resetWorld();
    };

    p.draw = function() {
        for (let i = 0; i < 70; i++) {
            stepAnt();
        }

        p.background(246, 244, 240);
        p.noStroke();

        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                if (grid[x][y] === 1) {
                    p.fill(34, 43, 72);
                    p.rect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        p.fill(215, 55, 50);
        p.rect(antX * cellSize, antY * cellSize, cellSize, cellSize);
    };

    p.mousePressed = function() {
        resetWorld();
    };
};
