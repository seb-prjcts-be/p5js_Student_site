// Quine-demo: de setup()-functie tekent zijn eigen broncode
window.sketch_example_quine = function(p) {
    p.setup = function() {
        p.createCanvas(600, 400);
        p.background(18);
        p.noLoop();

        // toString() geeft de broncode van de functie terug
        let code = window.sketch_example_quine.toString();
        let lijnen = code.split("\n");

        p.textFont("monospace");
        p.noStroke();

        lijnen.forEach(function(lijn, i) {
            let y = 18 + i * 14;
            if (y > p.height - 10) return;

            // Eenvoudige syntax-kleuring
            if (lijn.trim().startsWith("//")) {
                p.fill(100, 180, 100); // Groen: commentaar
            } else if (/\b(let|const|var|function|return|if|for|forEach)\b/.test(lijn)) {
                p.fill(130, 180, 255); // Blauw: keywords
            } else if (/["'`]/.test(lijn)) {
                p.fill(255, 200, 100); // Geel: strings
            } else {
                p.fill(220); // Wit: rest
            }

            p.textSize(11);
            p.text(lijn, 10, y);
        });
    };
};
