let turgut = document.getElementById("Turgut");
let carte = document.getElementById("mapOfLand");
let topValue = 0;
let leftValue = 0;


function keyboardEvent() {
    addEventListener("keydown", function (event) {

        // si la touhce "z " est pressée, on fait un mouvement vers le haut
        
        if (event.key === "z") {
            // Code pour le mouvement vers le haut
            console.log("Mouvement vers le haut");
            turgut.style.backgroundImage = `url('${"../../The-Legend-Of-Turgut-main/ImagesOfTurgut/12.png"}')`
            topValue += 1;
            carte.style.top = topValue + "px";
            // avancer la carte
        } else if (event.key === "s") {
            // Code pour le mouvement vers le bas
            console.log("Mouvement vers le bas");
            turgut.style.backgroundImage = `url('${"../../The-Legend-Of-Turgut-main/ImagesOfTurgut/71.png"}')`
            // avancer 
            topValue += -1;
            carte.style.top = topValue + "px";
        } else if (event.key === "q") {
            // Code pour le mouvement vers la gauche
            console.log("Mouvement vers la gauche");
            turgut.style.backgroundImage = `url('${"../../The-Legend-Of-Turgut-main/ImagesOfTurgut/32.png"}')`

            leftValue += 1;
            carte.style.left = leftValue + "px";
        } else if (event.key === "d") {
            // Code pour le mouvement vers la droite
            console.log("Mouvement vers la droite");
            turgut.style.backgroundImage = `url('${"../../The-Legend-Of-Turgut-main/ImagesOfTurgut/03.png"}')`

            leftValue += -1;
            carte.style.left = leftValue + "px";
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


// les images
const turgutImages = {
    right: new Image(),
    left: new Image(),
    up: new Image(),
    down: new Image(),
    idle: new Image(),
    right2: new Image(),
    left2: new Image(),
    up2: new Image(),
    down2: new Image(),
    rightStay: new Image(),
    leftStay: new Image(),
    upStay: new Image(),
    downStay: new Image(),
  };


  turgutImages.right.src = "../../ImagesOfTurgut/70.png";
  turgutImages.left.src = "../../ImagesOfTurgut/11.png";
  turgutImages.up.src = "../../ImagesOfTurgut/30.png";
  turgutImages.down.src = "../../ImagesOfTurgut/00.png";
  turgutImages.idle.src = "";

  turgutImages.right2.src = "../../ImagesOfTurgut/01.png";
  turgutImages.left2.src = "../../ImagesOfTurgut/21.png";
  turgutImages.up2.src = "../../ImagesOfTurgut/40.png";
  turgutImages.down2.src = "../../ImagesOfTurgut/10.png";

export default keyboardEvent;