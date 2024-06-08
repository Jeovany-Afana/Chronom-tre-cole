let interval4; // Variable globale pour stocker l'intervalle du compte à rebours
const caseHeures4=document.getElementById("inputClasse4");
const caseMinutes4=document.getElementById("selectMinutes4");
const quatriemeChoix=document.getElementById("selection4");
const heureDebut4=document.getElementById("heureDebut4");
 const heureFin4=document.getElementById("heureFin4");
 let compteurClique4=false;
let controlHeure4=0;
let date4=new Date();


function lectureHeure4()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures4.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes4.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},4000);
                  }

                  else if(parseInt(caseMinutes4.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes4.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes4.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes4.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes4.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes4.value)===0)
         {
          setTimeout(function(){lectureAnnonce("Evaluation4h")},4000);
         };break;
    } ;
  }


  function lectureHeure50004()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures4.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes4.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},6000);
                  }

                  else if(parseInt(caseMinutes4.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes4.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes4.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes4.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes4.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes4.value)===0)
         {
          setTimeout(function(){lectureAnnonce("Evaluation4h")},4000);
         };break;
    } ;
  }



  function lectureAnnonce(musique){
   let audio=new Audio();
     audio.src=musique+".mp3";

       audio.play();
  }

       function startCountdown4(classe4) {
            
            
               
            if(caseHeures4.value===''||quatriemeChoix.value==='vide'||caseMinutes4.value===''||caseHeures4.value<0||caseMinutes4.value<0)
              {
               alert("Veuillez préciser la durée de l'épreuve(Heures/Minutes) et choisir une classe4 dans la liste");
              }

              else
                {

                  if(compteurClique4===true)
                  {
                     alert("Le compte à rebours est déjà en cours");
                  }
                  
                  else 
                   {

                    controlHeure4++;

                    switch(quatriemeChoix.value){

                      case "BTL1A": 
                                   
                                  lectureAnnonce("BTL1AChance");
                                       switch(parseInt(caseHeures4.value))
                                         {
                                            case 1:  if(parseInt(caseMinutes4.value)===0)
                                                       {
                                                        setTimeout(function(){lectureAnnonce("Evaluation1h")},5000);
                                                       }

                                                       else if(parseInt(caseMinutes4.value)===30)
                                                         {
                                                          setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                                                         };break;

                                            case 2: if(parseInt(caseMinutes4.value)===0)
                                                      {
                                                         setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                                                      }

                                                    else if(parseInt(caseMinutes4.value)===30)
                                                      {
                                                       setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                                                      };break;

                                            case 3:
                                                      if(parseInt(caseMinutes4.value)===0)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                                                       }

                                                      else if(parseInt(caseMinutes4.value)===30)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                                                       };break;

                                            case 4:
                                              if(parseInt(caseMinutes4.value)===0)
                                              {
                                               setTimeout(function(){lectureAnnonce("Evaluation4h")},5000);
                                              };break;
                                         }  ;break;

                      case "BTL2A":lectureAnnonce("BTL2AChance");lectureHeure4(); break;
                      case "BTL2B":lectureAnnonce("BTL2BChance");lectureHeure4();break;
                      case "BTL3": lectureAnnonce("BTL3Chance");lectureHeure4();break;
                      case "L1GESTIONA":lectureAnnonce("L1GESTIONAChance");lectureHeure4();break;
                      case "L2GESTIONA":lectureAnnonce("L2GESTIONAChance");lectureHeure4();break;
                      case "L2GESTIONB":lectureAnnonce("L2GESTIONBChance");lectureHeure4();break;
                      case "L2GESTIONC":lectureAnnonce("L2GESTIONCChance");lectureHeure4();break;
                      case "FINANCE":lectureAnnonce("FINANCEChance");lectureHeure4();break;
                      case "QHSE":lectureAnnonce("QHSEChance");lectureHeure4();break;
                      case "COMMERCE":lectureAnnonce("COMMERCEChance");lectureHeure50004();break;
                      case "GESTION":lectureAnnonce("GESTIONChance");lectureHeure50004();break;
                      case "L1INFOA":lectureAnnonce("L1INFORMATIQUEAChance");lectureHeure4();break;
                      case "L2INFO":lectureAnnonce("L2INFORMATIQUEChance");lectureHeure4();break;
                      case "GENIE":lectureAnnonce("GENIEChance");lectureHeure50004();break;
                      case "RSS":lectureAnnonce("RSSChance");lectureHeure50004();break;
                      case "L1DROIT":lectureAnnonce("L1DROITChance");lectureHeure4();break;
                      case "L2DROIT":lectureAnnonce("L2DROITChance");lectureHeure4();break;
                      case "L1AGRO":lectureAnnonce("L1AGROChance");lectureHeure4();break;  
                      case "L3GESTION":lectureAnnonce("L3GESTIONChance");lectureHeure4();break;
                      case "L3INFO":lectureAnnonce("L3INFORMATIQUEChance");lectureHeure4();break;
                      case "LICENCE1":lectureAnnonce("LICENCE1Chance");lectureHeure50004();break;
                      case "BTL1":lectureAnnonce("BTL1Chance");lectureHeure50004();break;
                      case "BTL2":lectureAnnonce("BTL2Chance");lectureHeure50004();break;
                      case "L2GESTION":lectureAnnonce("L2GESTIONChance");lectureHeure4();break;
                        default: alert("Veuillez choisir une classe");
                   } 

                   let heures4 = parseInt(caseHeures4.value); // Récupère le temps en heures depuis l'élément HTML
                   let minutes4=parseInt(caseMinutes4.value);//On récupère les minutes depuis le fichier HTML
                   if (controlHeure4 === 1) {
                       let nouvelleDate4 = new Date(); // Obtenez la date actuelle
                       heureDebut4.innerHTML ="Start: "+ nouvelleDate4.getHours() + "h" + nouvelleDate4.getMinutes()+"mn"; // Affiche l'heure de début de l'épreuve
                       let hFin4=nouvelleDate4.getHours()+heures4;
                       let mFin4=nouvelleDate4.getMinutes()+minutes4;
                         if(mFin4>=60){hFin4+=Math.floor(mFin4/60); mFin4%=60;}
                       heureFin4.innerHTML ="End: "+ hFin4 + "h" + mFin4+"mn"; // Affiche l'heure de fin de l'épreuve
                   }
           clearInterval(interval4); // Arrête tout intervalle précédent pour éviter les doublons

           let tempsEnSecondes4 = (heures4 * 3600)+(minutes4 * 60); // Convertit le temps en secondes pour le compte à rebours
           
           let countdownDiv4 = document.getElementById("countdownClasse4"); // Référence à l'élément d'affichage du compte à rebours

           interval4 = setInterval(function() { // Lance un nouvel intervalle
               if (tempsEnSecondes4 < 0) { // Vérifie si le temps est écoulé
                   clearInterval(interval4); // Arrête le compte à rebours lorsque le temps est terminé
                   countdownDiv4.innerText = "Terminé"; // Affiche "Terminé !" à la fin
                   lectureAnnonce("finEvaluation");
               }
                else{
               let heuresRestantes4 = Math.floor(tempsEnSecondes4 / 3600); // Calcule les heures restantes
               let ResteMinutes4 = Math.floor((tempsEnSecondes4 % 3600) / 60); // Calcule les minutes restantes
               let secondes4 = tempsEnSecondes4 % 60; // Calcule les secondes restantes
               
               countdownDiv4.innerText = `${heuresRestantes4.toString().padStart(2, '0')}:${ResteMinutes4.toString().padStart(2, '0')}:${secondes4.toString().padStart(2, '0')}`; // Affiche le compte à rebours
               
               // Action à exécuter chaque fois qu'une heure passe
               if (secondes4 === 0 && ResteMinutes4 === 0 && heuresRestantes4 < heures4 && heuresRestantes4>0) {
                   //On va lire un audio en fonction de la classe4 qui sera choisie
                      
                    switch(quatriemeChoix.value){

                       case "BTL1A": lectureAnnonce("BTL1A");break;
                       case "BTL2A": lectureAnnonce("BTL2A");break;
                       case "BTL2B":lectureAnnonce("BTL2B");break;
                       case "BTL3": lectureAnnonce("BTL3");break;
                       case "L1GESTIONA":lectureAnnonce("L1GESTIONA");break;
                       case "L2GESTIONA":lectureAnnonce("L2GESTIONA");break;
                       case "L2GESTIONB":lectureAnnonce("L2GESTIONB");break;
                       case "L2GESTIONC":lectureAnnonce("L2GESTIONC");break;
                       case "FINANCE":lectureAnnonce("FINANCE");break;
                       case "QHSE":lectureAnnonce("QHSE");break;
                       case "COMMERCE":lectureAnnonce("COMMERCE");break;
                       case "GESTION":lectureAnnonce("RESSOURCES_HUMAINES");break;
                       case "L1INFOA":lectureAnnonce("L1INFORMATIQUEA");break;
                       case "L2INFO":lectureAnnonce("L2INFORMATIQUE");break;
                       case "GENIE":lectureAnnonce("GENIE_LOGICIEL");break;
                       case "RSS":lectureAnnonce("RESEAU_SYSTEME");break;
                       case "L1DROIT":lectureAnnonce("L1DROIT");break;
                       case "L2DROIT":lectureAnnonce("L2DROIT");break;
                       case "L1AGRO":lectureAnnonce("L1AGRO");break;  
                       case "L3GESTION":lectureAnnonce("L3GESTION");break;
                       case "L3INFO":lectureAnnonce("L3INFORMATIQUE");break;
                       case "L2GESTION":lectureAnnonce("L2GESTION");break;
                       case "BTL2":lectureAnnonce("BTL2");break;
                       case "LICENCE1":lectureAnnonce("LICENCE1");break;
                       case "BTL1":lectureAnnonce("BTL1");break;
                         default: alert("Veuillez choisir une classe4");
                    }
               }

               tempsEnSecondes4--; // Décrémente le temps restant
           }
           }, 1000); // Rafraîchissement toutes les secondes (1000ms = 1s)
           compteurClique4=true;
          }
       }
       }

       function pauseCountdown4() {
           clearInterval(interval4); // Arrête le compte à rebours actif
       }

       function resetCountdown4(classe4) {
        compteurClique4=false;
           clearInterval(interval4); // Arrête le compte à rebours actif
           document.getElementById("countdownClasse4").innerText = ""; // Réinitialise l'affichage du compte à rebours
           controlHeure4=0;
           heureDebut4.innerHTML="Start: ";
           heureFin4.innerHTML="End: ";
          }