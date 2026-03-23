// Generative design voorbeeld - bewegende cirkels
window.sketch_example_generative = function(p) {
    let circles = [];
    let numCircles = 20;

    p.setup = function() {
        const canvas = p.createCanvas(600, 400);
        p.colorMode(p.HSB, 360, 100, 100);
        
        // Maak cirkels met willekeurige eigenschappen
        for (let i = 0; i < numCircles; i++) {
            circles.push({
                x: p.random(p.width),
                y: p.random(p.height),
                radius: p.random(20, 60),
                speedX: p.random(-2, 2),
                speedY: p.random(-2, 2),
                hue: p.random(360)
            });
        }
    };

    p.draw = function() {
        p.background(240);
        
        // Update en teken alle cirkels
        for (let circle of circles) {
            // Update positie
            circle.x += circle.speedX;
            circle.y += circle.speedY;
            
            // Bounce tegen randen
            if (circle.x < circle.radius || circle.x > p.width - circle.radius) {
                circle.speedX *= -1;
            }
            if (circle.y < circle.radius || circle.y > p.height - circle.radius) {
                circle.speedY *= -1;
            }
            
            // Teken cirkel met gradient effect
            p.fill(circle.hue, 70, 90, 150);
            p.noStroke();
            p.ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
        }
        
        // Teken verbindingslijnen tussen nabije cirkels
        p.stroke(200, 100);
        p.strokeWeight(1);
        for (let i = 0; i < circles.length; i++) {
            for (let j = i + 1; j < circles.length; j++) {
                let d = p.dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
                if (d < 100) {
                    p.line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
                }
            }
        }
    };
};

