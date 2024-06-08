let interval3; // Variable globale pour stocker l'intervalle du compte à rebours
const caseHeures3=document.getElementById("inputClasse3");
const caseMinutes3=document.getElementById("selectMinutes3");
const troisiemeChoix=document.getElementById("selection3");
const heureDebut3=document.getElementById("heureDebut3");
 const heureFin3=document.getElementById("heureFin3");
 let compteurClique3=false;
let controlHeure3=0;
let date3=new Date();

function lectureHeure3()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures3.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes3.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},4000);
                  }

                  else if(parseInt(caseMinutes3.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes3.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes3.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes3.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes3.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes3.value)===0)
         {
          setTimeout(function(){lectureAnnonce("Evaluation4h")},4000);
         };break;
    } ;
  }

  function lectureHeure50003()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures3.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes3.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},6000);
                  }

                  else if(parseInt(caseMinutes3.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes3.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes3.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes3.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes3.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes3.value)===0)
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

       function startCountdown3(classe3) {
            
            
               
            if(caseHeures3.value===''||troisiemeChoix.value==='vide'||caseMinutes3.value===''||caseHeures3.value<0||caseMinutes3.value<0)
              {
               alert("Veuillez préciser la durée de l'épreuve(Heures/Minutes) et choisir une classe dans la liste");
              }

              else
                {
                  if(compteurClique3===true)
                  {
                     alert("Le compte à rebours est déjà en cours");
                  }

                  else
                   {

                   
                    controlHeure3++;

                    switch(troisiemeChoix.value){

                      case "BTL1A": 
                                   
                                  lectureAnnonce("BTL1AChance");
                                       switch(parseInt(caseHeures3.value))
                                         {
                                            case 1:  if(parseInt(caseMinutes3.value)===0)
                                                       {
                                                        setTimeout(function(){lectureAnnonce("Evaluation1h")},5000);
                                                       }

                                                       else if(parseInt(caseMinutes3.value)===30)
                                                         {
                                                          setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                                                         };break;

                                            case 2: if(parseInt(caseMinutes3.value)===0)
                                                      {
                                                         setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                                                      }

                                                    else if(parseInt(caseMinutes3.value)===30)
                                                      {
                                                       setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                                                      };break;

                                            case 3:
                                                      if(parseInt(caseMinutes3.value)===0)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                                                       }

                                                      else if(parseInt(caseMinutes3.value)===30)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                                                       };break;

                                            case 4:
                                              if(parseInt(caseMinutes3.value)===0)
                                              {
                                               setTimeout(function(){lectureAnnonce("Evaluation4h")},5000);
                                              };break;
                                         }  ;break;

                      case "BTL2A":lectureAnnonce("BTL2AChance");lectureHeure3(); break;
                      case "BTL2B":lectureAnnonce("BTL2BChance");lectureHeure3();break;
                      case "BTL3": lectureAnnonce("BTL3Chance");lectureHeure3();break;
                      case "L1GESTIONA":lectureAnnonce("L1GESTIONAChance");lectureHeure3();break;
                      case "L2GESTIONA":lectureAnnonce("L2GESTIONAChance");lectureHeure3();break;
                      case "L2GESTIONB":lectureAnnonce("L2GESTIONBChance");lectureHeure3();break;
                      case "L2GESTIONC":lectureAnnonce("L2GESTIONCChance");lectureHeure3();break;
                      case "FINANCE":lectureAnnonce("FINANCEChance");lectureHeure3();break;
                      case "QHSE":lectureAnnonce("QHSEChance");lectureHeure();break;
                      case "COMMERCE":lectureAnnonce("COMMERCEChance");lectureHeure50003();break;
                      case "GESTION":lectureAnnonce("GESTIONChance");lectureHeure50003();break;
                      case "L1INFOA":lectureAnnonce("L1INFORMATIQUEAChance");lectureHeure3();break;
                      case "L2INFO":lectureAnnonce("L2INFORMATIQUEChance");lectureHeure3();break;
                      case "GENIE":lectureAnnonce("GENIEChance");lectureHeure50003();break;
                      case "RSS":lectureAnnonce("RSSChance");lectureHeure50003();break;
                      case "L1DROIT":lectureAnnonce("L1DROITChance");lectureHeure3();break;
                      case "L2DROIT":lectureAnnonce("L2DROITChance");lectureHeure3();break;
                      case "L1AGRO":lectureAnnonce("L1AGROChance");lectureHeure3();break;  
                      case "L3GESTION":lectureAnnonce("L3GESTIONChance");lectureHeure3();break;
                      case "L3INFO":lectureAnnonce("L3INFORMATIQUEChance");lectureHeure3();break;
                      case "LICENCE1":lectureAnnonce("LICENCE1Chance");lectureHeure50003();break;
                      case "BTL1":lectureAnnonce("BTL1Chance");lectureHeure50003();break;
                      case "BTL2":lectureAnnonce("BTL2Chance");lectureHeure50003();break;
                      case "L2GESTION":lectureAnnonce("L2GESTIONChance");lectureHeure3();break;
                        default: alert("Veuillez choisir une classe");
                   } 
                    
                   let heures3 = parseInt(caseHeures3.value); // Récupère le temps en heures depuis l'élément HTML
                    let minutes3=parseInt(caseMinutes3.value);//On récupère les minutes depuis le fichier HTML
                    if (controlHeure3 === 1) {
                        let nouvelleDate3 = new Date(); // Obtenez la date actuelle
                        heureDebut3.innerHTML ="Start: "+ nouvelleDate3.getHours() + "h" + nouvelleDate3.getMinutes()+"mn"; // Affiche l'heure de début de l'épreuve
                        let hFin3=nouvelleDate3.getHours()+heures3;
                        let mFin3=nouvelleDate3.getMinutes()+minutes3;
                          if(mFin3>=60){hFin3+=Math.floor(mFin3/60); mFin3%=60;}
                        heureFin3.innerHTML ="End: "+ hFin3 + "h" + mFin3+"mn"; // Affiche l'heure de fin de l'épreuve
                    }
           clearInterval(interval3); // Arrête tout intervalle précédent pour éviter les doublons

           let tempsEnSecondes3 = (heures3 * 3600)+(minutes3*60); // Convertit le temps en secondes pour le compte à rebours
           
           let countdownDiv3 = document.getElementById("countdownClasse3"); // Référence à l'élément d'affichage du compte à rebours

           interval3 = setInterval(function() { // Lance un nouvel intervalle
               if (tempsEnSecondes3 < 0) { // Vérifie si le temps est écoulé
                   clearInterval(interval3); // Arrête le compte à rebours lorsque le temps est terminé
                   countdownDiv3.innerText = "Terminé"; // Affiche "Terminé !" à la fin
                   lectureAnnonce("finEvaluation");
               }
                else{
               let heuresRestantes3 = Math.floor(tempsEnSecondes3 / 3600); // Calcule les heures restantes
               let ResteMinutes3 = Math.floor((tempsEnSecondes3 % 3600) / 60); // Calcule les minutes restantes
               let secondes3 = tempsEnSecondes3 % 60; // Calcule les secondes restantes
               
               countdownDiv3.innerText = `${heuresRestantes3.toString().padStart(2, '0')}:${ResteMinutes3.toString().padStart(2, '0')}:${secondes3.toString().padStart(2, '0')}`; // Affiche le compte à rebours
               
               // Action à exécuter chaque fois qu'une heure passe
               if (secondes3 === 0 && ResteMinutes3 === 0 && heuresRestantes3 < heures3 && heuresRestantes3>0) {
                   //On va lire un audio en fonction de la classe qui sera choisie
                      
                    switch(troisiemeChoix.value){

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
                         default: alert("Veuillez choisir une classe");
                    }
               }

               tempsEnSecondes3--; // Décrémente le temps restant
           }
           }, 1000); // Rafraîchissement toutes les secondes (1000ms = 1s)
           compteurClique3=true;
          }
       }
       }

       function pauseCountdown3() {
           clearInterval(interval3); // Arrête le compte à rebours actif
       }

       function resetCountdown3(classe3) {
           compteurClique3=false;//On rénitialise la variable qui permet de vérifier si l'utilisateur a déjà cliqué sur le bouton démarré
           clearInterval(interval3); // Arrête le compte à rebours actif
           document.getElementById("countdownClasse3").innerText = ""; // Réinitialise l'affichage du compte à rebours
           controlHeure3=0;
           heureDebut3.innerHTML="Start: ";
           heureFin3.innerHTML="End: ";
          }