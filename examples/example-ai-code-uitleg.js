// Mystery sketch - draaiende kleurcirkels voor de AI-code-uitleg les
window.sketch_example_ai_code_uitleg = function(p) {
    let hoek = 0;
    let aantal = 12;

    p.setup = function() {
        p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100, 100);
    };

    p.draw = function() {
        p.background(220, 15, 95);
        p.translate(p.width / 2, p.height / 2);

        for (let i = 0; i < aantal; i++) {
            let a = (p.TWO_PI / aantal) * i + hoek;
            let r = 120 + p.sin(p.frameCount * 0.02 + i) * 40;
            let x = p.cos(a) * r;
            let y = p.sin(a) * r;
            let grootte = 20 + p.sin(p.frameCount * 0.03 + i * 0.5) * 15;

            p.fill((i * 30 + p.frameCount) % 360, 70, 90, 80);
            p.noStroke();
            p.ellipse(x, y, grootte, grootte);
        }

        hoek += 0.005;
    };
};
