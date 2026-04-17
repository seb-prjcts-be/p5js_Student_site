// Quine: een programma dat zijn eigen broncode uitvoert
window.sketch_example_quine = function(p) {
    p.setup = function() {
        //A Quine is a form of code poetry, it's a computer program
        //that outputs exactly its own source code.

        // Q Q Q . . U . . U . . I . . N . . N . E E E E
        // Q . . Q . U . . U . I . . N N . N . E . . .
        // Q . Q Q . U . . U . . I . . N . N N . E E E .
        // Q . . Q . U . . U . . I . . N . . N . E . . .
        // Q Q Q Q . . U U . . I I I . N . . N . E E E E
        // . . . Q . . . . . . . . . . . . . . . . . . .

        p.createCanvas(900, 900);
        p.background(255);
        p.fill(0);
        p.textFont('Inconsolata', 16);
        let code = p.setup.toString();
        p.print(code);
        p.text(code, 20, 20, 600, 600);
        p.text("Console"+ "\n\n"+code, 20, 430, 600, 600);
    };
};
