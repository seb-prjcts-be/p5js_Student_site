// Gesimuleerde audio-visualisatie met sinusgolven (zonder p5.sound)
window.sketch_example_geluid = function(p) {
    let golven = [];
    let aantalGolven = 5;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.strokeWeight(2);

        // Initialiseer golven met random parameters
        for (let i = 0; i < aantalGolven; i++) {
            golven.push({
                freq: p.random(1, 6),
                amp: p.random(20, 80),
                fase: p.random(p.TWO_PI),
                r: p.random(50, 255),
                g: p.random(50, 255),
                b: p.random(150, 255)
            });
        }
    };

    p.draw = function() {
        p.background(10, 10, 25, 40); // sleep-effect

        // Muis beïnvloedt de golven
        let muisFreq = p.map(p.mouseX, 0, p.width, 0.5, 3.0);
        let muisAmp  = p.map(p.mouseY, 0, p.height, 100, 10);

        // Teken elke golf
        for (let i = 0; i < golven.length; i++) {
            let g = golven[i];
            let effectieveFreq = g.freq * muisFreq;
            let effectieveAmp  = g.amp * (muisAmp / 60);

            p.stroke(g.r, g.g, g.b, 180);
            p.noFill();
            p.beginShape();
            for (let x = 0; x <= p.width; x += 3) {
                let t = p.frameCount * 0.02 + g.fase;
                let y = p.height / 2 +
                    p.sin((x / p.width) * p.TWO_PI * effectieveFreq + t) * effectieveAmp;
                p.vertex(x, y);
            }
            p.endShape();
        }

        // Centrale puls
        let pulsGrootte = 20 + p.sin(p.frameCount * 0.1) * 15;
        p.noStroke();
        p.fill(255, 255, 0, 180);
        p.circle(p.width / 2, p.height / 2, pulsGrootte * 2);

        // Labels
        p.fill(180);
        p.noStroke();
        p.textSize(12);
        p.textAlign(p.LEFT);
        p.text('← Frequentie →', 20, p.height - 30);
        p.textAlign(p.CENTER);
        p.text('↑ Amplitude ↓', p.width / 2, p.height - 15);
    };

    p.mousePressed = function() {
        // Herandomiseer de golf parameters bij klikken
        for (let i = 0; i < golven.length; i++) {
            golven[i].freq = p.random(1, 6);
            golven[i].amp = p.random(20, 80);
            golven[i].fase = p.random(p.TWO_PI);
            golven[i].r = p.random(50, 255);
            golven[i].g = p.random(50, 255);
        }
    };
};
