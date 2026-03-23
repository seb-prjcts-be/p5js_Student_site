// Letters op een cirkel die reageren op de muis
window.sketch_example_text_typografie = function(p) {
    let zin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let straal = 140;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.textAlign(p.CENTER, p.CENTER);
    };

    p.draw = function() {
        p.background(20, 20, 40);

        let aantalLetters = zin.length;
        let muisHoek = p.atan2(p.mouseY - p.height / 2, p.mouseX - p.width / 2);

        for (let i = 0; i < aantalLetters; i++) {
            let hoek = p.map(i, 0, aantalLetters, 0, p.TWO_PI);
            hoek += p.frameCount * 0.008; // langzaam draaien

            let x = p.width / 2 + p.cos(hoek) * straal;
            let y = p.height / 2 + p.sin(hoek) * straal;

            // Afstand tot muis
            let afstand = p.dist(p.mouseX, p.mouseY, x, y);
            let grootte = p.map(afstand, 0, 200, 48, 12);
            grootte = p.constrain(grootte, 10, 48);

            // Kleur op basis van hoek
            let tint = p.map(hoek % p.TWO_PI, 0, p.TWO_PI, 0, 360);
            p.colorMode(p.HSB, 360, 255, 255);
            p.fill(tint, 200, 255);
            p.colorMode(p.RGB, 255);

            p.push();
            p.translate(x, y);
            p.rotate(hoek + p.HALF_PI);
            p.textSize(grootte);
            p.text(zin[i], 0, 0);
            p.pop();
        }

        // Instructietekst in het midden
        p.fill(150, 150, 200);
        p.textSize(13);
        p.textAlign(p.CENTER, p.CENTER);
        p.text('Beweeg de muis', p.width / 2, p.height / 2);
    };
};
