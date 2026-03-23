// 3D voorbeeld — belichting, materialen en muis-gestuurd puntlicht
window.sketch_example_3d = function (p) {
    p.setup = function () {
        p.createCanvas(600, 400, p.WEBGL);
        p.colorMode(p.RGB);
    };

    p.draw = function () {
        p.background(10, 10, 30);

        // Omgevingslicht: zorgt dat schaduwzijden niet volledig zwart zijn
        p.ambientLight(40);

        // Puntlicht volgt de muis
        p.pointLight(
            255, 220, 150,                         // warm geel licht
            p.mouseX - p.width / 2,                // x relatief aan canvas-centrum
            p.mouseY - p.height / 2,               // y
            250                                    // z: voor het canvas
        );

        // Blauw accent vanuit de andere kant
        p.directionalLight(40, 80, 180, 1, 0.5, -1);

        // Kubus links
        p.push();
        p.translate(-150, 0, 0);
        p.rotateX(p.frameCount * 0.012);
        p.rotateY(p.frameCount * 0.018);
        p.specularMaterial(80, 140, 255);
        p.shininess(40);
        p.noStroke();
        p.box(90);
        p.pop();

        // Bol midden
        p.push();
        p.translate(20, -20, 0);
        p.specularMaterial(255, 110, 70);
        p.shininess(80);
        p.noStroke();
        p.sphere(60, 32, 32);
        p.pop();

        // Torus rechts
        p.push();
        p.translate(170, 30, 0);
        p.rotateX(p.frameCount * 0.02);
        p.rotateZ(p.frameCount * 0.01);
        p.normalMaterial();
        p.noStroke();
        p.torus(45, 16, 24, 16);
        p.pop();

        // Label
        p.resetMatrix();
        p.noLights();
        p.fill(200);
        p.noStroke();
        p.textSize(12);
        p.textAlign(p.LEFT, p.TOP);
        p.text('Beweeg de muis — het licht volgt je cursor', -p.width / 2 + 10, -p.height / 2 + 10);
    };
};
