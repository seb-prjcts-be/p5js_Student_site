// If-statements: muispositie bepaalt kleur en gedrag
window.sketch_example_if_statements = function (p) {

    p.setup = function () {
        p.createCanvas(600, 400);
        p.noStroke();
    };

    p.draw = function () {
        // Achtergrond reageert op verticale muispositie
        let bgHelderheid = p.map(p.mouseY, 0, p.height, 240, 30);
        p.background(bgHelderheid);

        // Canvas in vier kwadranten — elk een andere kleur
        let links  = p.mouseX < p.width / 2;
        let boven  = p.mouseY < p.height / 2;

        if (links && boven) {
            p.fill(255, 80, 80);    // linksboven: rood
        } else if (!links && boven) {
            p.fill(80, 180, 255);   // rechtsboven: blauw
        } else if (links && !boven) {
            p.fill(80, 220, 120);   // linksonder: groen
        } else {
            p.fill(255, 200, 60);   // rechtsonder: geel
        }

        p.circle(p.width / 2, p.height / 2, 180);

        // Kleine volgerbal — groter als muis dichterbij is
        let d = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2);
        let grootte = d < 90 ? 50 : 20;  // inside cirkel → groot

        p.fill(255, 255, 255, 200);
        p.circle(p.mouseX, p.mouseY, grootte);

        // Label
        p.fill(0, 0, 0, 120);
        p.textSize(13);
        p.textAlign(p.CENTER, p.BOTTOM);
        p.text('beweeg je muis', p.width / 2, p.height - 12);
    };
};
