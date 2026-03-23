// Random walk demo met meerdere modi
window.sketch_example_random_walk = function(p) {
    let walkers = [];
    let modeIndex = 0;

    const modes = [
        { label: "vrij", choices: [0, 1, 2, 3] },
        { label: "bias rechts", choices: [0, 0, 0, 1, 2, 3] },
        { label: "diagonaal", choices: [0, 1, 2, 3, 4, 5, 6, 7] }
    ];

    function reset() {
        p.background(247, 245, 239);
        walkers = Array.from({ length: 12 }, (_, i) => ({
            x: p.width / 2 + p.random(-20, 20),
            y: p.height / 2 + p.random(-20, 20),
            hue: 20 + i * 24
        }));
    }

    function stepWalker(walker) {
        const mode = modes[modeIndex];
        const choice = mode.choices[Math.floor(p.random(mode.choices.length))];
        const oldX = walker.x;
        const oldY = walker.y;
        const step = 7;

        if (choice === 0) walker.x += step;
        if (choice === 1) walker.x -= step;
        if (choice === 2) walker.y += step;
        if (choice === 3) walker.y -= step;
        if (choice === 4) { walker.x += step; walker.y += step; }
        if (choice === 5) { walker.x += step; walker.y -= step; }
        if (choice === 6) { walker.x -= step; walker.y += step; }
        if (choice === 7) { walker.x -= step; walker.y -= step; }

        walker.x = p.constrain(walker.x, 0, p.width);
        walker.y = p.constrain(walker.y, 0, p.height);

        p.stroke((walker.hue + p.frameCount * 0.4) % 255, 100, 140, 28);
        p.line(oldX, oldY, walker.x, walker.y);
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        p.noFill();
        reset();
    };

    p.draw = function() {
        for (let walker of walkers) {
            for (let i = 0; i < 3; i++) {
                stepWalker(walker);
            }
        }

        p.noStroke();
        p.fill(247, 245, 239, 220);
        p.rect(0, 0, 150, 28);
        p.fill(30, 35, 55);
        p.textSize(12);
        p.text(`modus: ${modes[modeIndex].label}`, 10, 18);
    };

    p.mousePressed = function() {
        modeIndex = (modeIndex + 1) % modes.length;
        reset();
    };
};
