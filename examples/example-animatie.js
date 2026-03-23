// Animatie voorbeeld: Lissajous-figuur met easing en kleurverloop
window.sketch_example_animatie = function (p) {
    let hoek = 0;
    let huidigeX, huidigeY;
    let history = [];
    const MAX_HISTORY = 200;

    p.setup = function () {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
        huidigeX = p.width / 2;
        huidigeY = p.height / 2;
    };

    p.draw = function () {
        p.background(230, 20, 12);

        // Lissajous doelpositie (frequentie 3:2)
        let doelX = p.width / 2 + p.cos(hoek * 3) * 200;
        let doelY = p.height / 2 + p.sin(hoek * 2) * 170;

        // Easing naar doelpositie
        huidigeX += (doelX - huidigeX) * 0.07;
        huidigeY += (doelY - huidigeY) * 0.07;

        // Bewaar geschiedenis
        history.push({ x: huidigeX, y: huidigeY, hue: (hoek * 30) % 360 });
        if (history.length > MAX_HISTORY) history.shift();

        // Teken spoor
        p.strokeWeight(2.5);
        for (let i = 0; i < history.length - 1; i++) {
            let alpha = p.map(i, 0, history.length, 0, 90);
            p.stroke(history[i].hue, 80, 100, alpha);
            p.line(history[i].x, history[i].y, history[i + 1].x, history[i + 1].y);
        }

        // Gloeiend punt
        p.noStroke();
        let h = (hoek * 30) % 360;
        p.fill(h, 60, 100, 40);
        p.circle(huidigeX, huidigeY, 30);
        p.fill(h, 80, 100, 80);
        p.circle(huidigeX, huidigeY, 16);
        p.fill(0, 0, 100, 100);
        p.circle(huidigeX, huidigeY, 6);

        hoek += 0.018;
    };
};
