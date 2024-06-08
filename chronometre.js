// S�lectionner l'�l�ment HTML o� afficher le chronom�tre
const timerDisplay = document.getElementById('timer');
const cleinOeil1 = document.getElementById("cleinOeil1");
const cleinOeil2 = document.getElementById("cleinOeil2");
bouche=document.getElementById("bouche");
// Initialiser les variables pour les minutes et les secondes
let minutes = 0;
let seconds = 0;
let compteurVue = 0;

// Cr�er une fonction pour mettre � jour le chronom�tre
function updateTimer() {
    // Incr�menter les secondes
    seconds++;


    if (seconds % 10 === 0) {

        cleinOeil1.style.opacity = "1";
        cleinOeil1.style.height = "10%";

        cleinOeil2.style.opacity = "1";
        cleinOeil2.style.height = "10%";

    }

    else {
        cleinOeil1.style.height = "0%";
        cleinOeil1.style.opacity = "0";


        cleinOeil2.style.height = "0%";
        cleinOeil2.style.opacity = "0";

    }

    if (seconds % 5 === 0) {

        bouche.style.height = "5%";
        bouche.style.borderStartStartRadius = "40%";
        bouche.style.borderStartEndRadius = "40%";


        compteurVue += 1;

        if (compteurVue === 1) {
            oeil1.style.top = "40.5%"; //PREMIER DEPLACEMENT DES YEUX
            oeil2.style.top = "40.5%";
        }

        else if (compteurVue === 2) {

            oeil1.style.top = "38%"; //DEUXIEME DEPLACEMENT DES YEUX
            oeil2.style.top = "38%";

            oeil1.style.left = "46%"; //DEUXIEME DEPLACEMENT DES YEUX
            oeil2.style.left = "49.4%";
        }

        else if (compteurVue === 3) {

            oeil1.style.top = "38%"; //TROISIEME DEPLACEMENT DES YEUX
            oeil2.style.top = "38%";

            oeil1.style.left = "45.03%"; //TROISIEME DEPLACEMENT DES YEUX
            oeil2.style.left = "48.3%";
        }

        else if (compteurVue === 4) {

            oeil1.style.top = "38%"; //QUATRIEME DEPLACEMENT DES YEUX
            oeil2.style.top = "38%";

            oeil1.style.left = "45.5%"; //QUATRIEME DEPLACEMENT DES YEUX
            oeil2.style.left = "48.8%";
            compteurVue = 0;
        }

         
    }

    else {
        bouche.style.height = "0.5%";
        bouche.style.borderStartStartRadius = "40%";
        bouche.style.borderStartEndRadius = "40%";
    }
    // Si les secondes atteignent 60, augmenter les minutes et remettre les secondes � 0
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Afficher le temps dans le format mm:ss
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// D�finir l'intervalle de rafra�chissement du chronom�tre (1 seconde)
let interval = setInterval(updateTimer, 1000);


