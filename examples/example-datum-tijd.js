// Analoge klok met vloeiende secondenwijzer, datumweergave en uurmarkering
window.sketch_example_datum_tijd = function (p) {

    p.setup = function () {
        p.createCanvas(600, 400);
        p.angleMode(p.DEGREES);
    };

    p.draw = function () {
        p.background(15);

        let u = p.hour();
        let m = p.minute();
        let s = p.second();

        // Vloeiende seconden via millis()
        let secVloeiend = (p.millis() / 1000) % 60;

        // Datumstring links
        p.fill(120);
        p.noStroke();
        p.textSize(13);
        p.textAlign(p.LEFT, p.TOP);
        p.textFont('Courier New');
        let maanden = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
                       'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        p.text(p.day() + ' ' + maanden[p.month() - 1] + ' ' + p.year(), 20, 20);

        // Digitale tijd rechts
        p.textAlign(p.RIGHT, p.TOP);
        p.fill(180);
        p.text(p.nf(u, 2) + ':' + p.nf(m, 2) + ':' + p.nf(s, 2), p.width - 20, 20);

        // Klok centreren
        p.translate(p.width / 2, p.height / 2);

        let r = 160;

        // Uurmarkeringen
        for (let i = 0; i < 12; i++) {
            let hoek = i * 30 - 90;
            let buitenX = p.cos(hoek) * r;
            let buitenY = p.sin(hoek) * r;
            let binnenX = p.cos(hoek) * (r - (i % 3 === 0 ? 14 : 7));
            let binnenY = p.sin(hoek) * (r - (i % 3 === 0 ? 14 : 7));
            p.stroke(i % 3 === 0 ? 200 : 80);
            p.strokeWeight(i % 3 === 0 ? 2 : 1);
            p.line(binnenX, binnenY, buitenX, buitenY);
        }

        // Wijzerplaat
        p.noFill();
        p.stroke(60);
        p.strokeWeight(1);
        p.circle(0, 0, r * 2);

        // Urenwijzer
        let hHoek = p.map((u % 12) + m / 60, 0, 12, 0, 360) - 90;
        p.stroke(230);
        p.strokeWeight(6);
        p.strokeCap(p.ROUND);
        p.line(p.cos(hHoek) * -20, p.sin(hHoek) * -20,
               p.cos(hHoek) * 90,  p.sin(hHoek) * 90);

        // Minutenwijzer
        let mHoek = p.map(m + s / 60, 0, 60, 0, 360) - 90;
        p.stroke(200);
        p.strokeWeight(3);
        p.line(p.cos(mHoek) * -25, p.sin(mHoek) * -25,
               p.cos(mHoek) * 130, p.sin(mHoek) * 130);

        // Secundenwijzer (vloeiend)
        let sHoek = p.map(secVloeiend, 0, 60, 0, 360) - 90;
        p.stroke(220, 60, 50);
        p.strokeWeight(1.5);
        p.line(p.cos(sHoek) * -35, p.sin(sHoek) * -35,
               p.cos(sHoek) * 148, p.sin(sHoek) * 148);

        // Tegenwicht secondenwijzer
        p.stroke(220, 60, 50);
        p.strokeWeight(3);
        p.line(p.cos(sHoek) * -35, p.sin(sHoek) * -35,
               p.cos(sHoek) * -18, p.sin(sHoek) * -18);

        // Middelpunt
        p.noStroke();
        p.fill(220, 60, 50);
        p.circle(0, 0, 10);
        p.fill(15);
        p.circle(0, 0, 4);
    };
};
