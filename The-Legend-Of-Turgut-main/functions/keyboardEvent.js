function keyboardEvent() {
    addEventListener("keydown", function (event) {

        // si la touhce "z " est pressée, on fait un mouvement vers le haut
        
        if (event.key === "z") {
            // Code pour le mouvement vers le haut
            console.log("Mouvement vers le haut");
        } else if (event.key === "s") {
            // Code pour le mouvement vers le bas
            console.log("Mouvement vers le bas");
        } else if (event.key === "q") {
            // Code pour le mouvement vers la gauche
            console.log("Mouvement vers la gauche");
        } else if (event.key === "d") {
            // Code pour le mouvement vers la droite
            console.log("Mouvement vers la droite");
        }

        // uiop et jklm

        if (event.key === "u") {
            // Code pour le a
            console.log("a");
        } else if (event.key === "i") {
            // Code pour le b
            console.log("b");
        } else if (event.key === "o") {
            // Code pour le x
            console.log("x");
        } else if (event.key === "p") {
            // Code pour le y
            console.log("y");
        }

        // code des boutton derriere la manette rb rt et lb lt
        if (event.key === "j") {
            // Code pour le mouvement vers le haut
            console.log("rt");
        } else if (event.key === "k") {
            // Code pour le mouvement vers le bas
            console.log("rb");
        } else if (event.key === "l") {
            // Code pour le mouvement vers la gauche
            console.log("lt");
        } else if (event.key === "m") {
            // Code pour le mouvement vers la droite
            console.log("lb");
        }
    }
    );

}

export default keyboardEvent;