// Vera Molnár — (Des)Ordres geïnspireerd voorbeeld
// Concentrische rechthoeken in een raster met instelbare afwijking
window.sketch_example_vera_molnar = function (p) {
    const RIJEN = 5;
    const KOLOMMEN = 8;

    p.setup = function () {
        p.createCanvas(600, 400);
        p.noFill();
        p.strokeWeight(1);
    };

    p.draw = function () {
        p.background(248, 244, 235); // Papier-achtige kleur

        let celW = p.width / KOLOMMEN;
        let celH = p.height / RIJEN;

        // Afwijking: 0 = perfecte orde, max = chaos
        let maxDev = p.map(p.mouseX, 0, p.width, 0, celW * 0.3);
        // Snelheid waarmee de afwijking verandert (muis Y)
        let tijdStap = p.map(p.mouseY, 0, p.height, 0.3, 0.005);

        for (let ry = 0; ry < RIJEN; ry++) {
            for (let kol = 0; kol < KOLOMMEN; kol++) {
                let cx = kol * celW + celW / 2;
                let cy = ry * celH + celH / 2;
                let seed = ry * KOLOMMEN + kol; // Unieke seed per cel

                // 6 concentrische lagen per cel
                for (let s = 6; s >= 1; s--) {
                    let t = p.frameCount * tijdStap + seed * 37.3;
                    let w = celW * 0.88 * (s / 6);
                    let h = celH * 0.88 * (s / 6);

                    // Noise-gebaseerde afwijking per hoekpunt
                    let d = maxDev * (s / 6);
                    let ox1 = (p.noise(t + seed, s * 0.3)       - 0.5) * 2 * d;
                    let oy1 = (p.noise(t + seed + 10, s * 0.3)  - 0.5) * 2 * d;
                    let ox2 = (p.noise(t + seed + 20, s * 0.3)  - 0.5) * 2 * d;
                    let oy2 = (p.noise(t + seed + 30, s * 0.3)  - 0.5) * 2 * d;

                    // Kleur: van warm naar koel naarmate de lagen kleiner worden
                    let grayVal = p.map(s, 1, 6, 40, 160);
                    p.stroke(grayVal, grayVal * 0.85, grayVal * 0.7);

                    p.beginShape();
                    p.vertex(cx - w / 2 + ox1, cy - h / 2 + oy1);
                    p.vertex(cx + w / 2 + ox2, cy - h / 2 + oy2);
                    p.vertex(cx + w / 2 - ox1, cy + h / 2 - oy1);
                    p.vertex(cx - w / 2 - ox2, cy + h / 2 - oy2);
                    p.endShape(p.CLOSE);
                }
            }
        }

        // Interface
        p.noStroke();
        p.fill(60, 50, 40, 180);
        p.textSize(11);
        p.text(`Muis X: orde ↔ chaos   |   Muis Y: snel ↔ traag`, 10, p.height - 10);
    };
};
