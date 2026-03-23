// Recursie-demo: ademende boomstructuur
window.sketch_example_recursie = function(p) {
    let depth = 9;

    function tak(length, level, sway) {
        if (level <= 0 || length < 8) return;

        p.strokeWeight(p.map(level, 1, depth, 1, 5));
        p.line(0, 0, 0, -length);
        p.translate(0, -length);

        p.push();
        p.rotate(sway);
        tak(length * 0.72, level - 1, sway);
        p.pop();

        p.push();
        p.rotate(-sway * 0.9);
        tak(length * 0.72, level - 1, sway);
        p.pop();
    }

    p.setup = function() {
        p.createCanvas(600, 400);
    };

    p.draw = function() {
        const sway = p.map(p.sin(p.frameCount * 0.02), -1, 1, 0.28, 0.55);

        p.background(247, 245, 239);
        p.stroke(45, 30, 22);
        p.noFill();

        p.push();
        p.translate(p.width / 2, p.height - 20);
        tak(110, depth, sway);
        p.pop();

        p.noStroke();
        p.fill(30, 35, 55);
        p.textSize(12);
        p.text(`diepte: ${depth}`, 10, 18);
    };

    p.mousePressed = function() {
        depth = depth >= 10 ? 6 : depth + 1;
    };
};
