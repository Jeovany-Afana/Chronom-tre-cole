let interval2; // Variable globale pour stocker l'intervalle du compte à rebours
const caseHeures2=document.getElementById("inputClasse2");
const caseMinutes2=document.getElementById("selectMinutes2");
const deuxiemeChoix=document.getElementById("selection2");
const heureDebut2=document.getElementById("heureDebut2");
 const heureFin2=document.getElementById("heureFin2");
 let compteurClique2=false;
let controlHeure2=0;
let date2=new Date();


function lectureHeure2()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures2.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes2.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},4000);
                  }

                  else if(parseInt(caseMinutes2.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes2.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes2.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes2.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes2.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes2.value)===0)
         {
          setTimeout(function(){lectureAnnonce("Evaluation4h")},4000);
         };break;
    } ;
  }


  function lectureHeure50002()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures2.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes2.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},6000);
                  }

                  else if(parseInt(caseMinutes2.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes2.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes2.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes2.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes2.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes2.value)===0)
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

       function startCountdown2(classe2) {
            
            
               
            if(caseHeures2.value===''||deuxiemeChoix.value==='vide'||caseMinutes2.value===''||caseHeures2.value<0||caseMinutes2.value<0)
              {
               alert("Veuillez préciser la durée de l'épreuve(Heures/Minutes) et choisir une classe dans la liste");
              }

              else
                {

                  if(compteurClique2===true)
                  {
                     alert("Le compte à rebours est déjà en cours");
                  }

                  else {

                     controlHeure2++;

                     switch(deuxiemeChoix.value){

                      case "BTL1A": 
                                   
                                  lectureAnnonce("BTL1AChance");
                                       switch(parseInt(caseHeures2.value))
                                         {
                                            case 1:  if(parseInt(caseMinutes2.value)===0)
                                                       {
                                                        setTimeout(function(){lectureAnnonce("Evaluation1h")},5000);
                                                       }

                                                       else if(parseInt(caseMinutes2.value)===30)
                                                         {
                                                          setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                                                         };break;

                                            case 2: if(parseInt(caseMinutes2.value)===0)
                                                      {
                                                         setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                                                      }

                                                    else if(parseInt(caseMinutes2.value)===30)
                                                      {
                                                       setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                                                      };break;

                                            case 3:
                                                      if(parseInt(caseMinutes2.value)===0)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                                                       }

                                                      else if(parseInt(caseMinutes2.value)===30)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                                                       };break;

                                            case 4:
                                              if(parseInt(caseMinutes2.value)===0)
                                              {
                                               setTimeout(function(){lectureAnnonce("Evaluation4h")},5000);
                                              };break;
                                         }  ;break;

                      case "BTL2A":lectureAnnonce("BTL2AChance");lectureHeure2(); break;
                      case "BTL2B":lectureAnnonce("BTL2BChance");lectureHeure2();break;
                      case "BTL3": lectureAnnonce("BTL3Chance");lectureHeure2();break;
                      case "L1GESTIONA":lectureAnnonce("L1GESTIONAChance");lectureHeure2();break;
                      case "L2GESTIONA":lectureAnnonce("L2GESTIONAChance");lectureHeure2();break;
                      case "L2GESTIONB":lectureAnnonce("L2GESTIONBChance");lectureHeure2();break;
                      case "L2GESTIONC":lectureAnnonce("L2GESTIONCChance");lectureHeure2();break;
                      case "FINANCE":lectureAnnonce("FINANCEChance");lectureHeure2();break;
                      case "QHSE":lectureAnnonce("QHSEChance");lectureHeure2();break;
                      case "COMMERCE":lectureAnnonce("COMMERCEChance");lectureHeure50002();break;
                      case "GESTION":lectureAnnonce("GESTIONChance");lectureHeure50002();break;
                      case "L1INFOA":lectureAnnonce("L1INFORMATIQUEAChance");lectureHeure2();break;
                      case "L2INFO":lectureAnnonce("L2INFORMATIQUEChance");lectureHeure2();break;
                      case "GENIE":lectureAnnonce("GENIEChance");lectureHeure50002();break;
                      case "RSS":lectureAnnonce("RSSChance");lectureHeure50002();break;
                      case "L1DROIT":lectureAnnonce("L1DROITChance");lectureHeure2();break;
                      case "L2DROIT":lectureAnnonce("L2DROITChance");lectureHeure2();break;
                      case "L1AGRO":lectureAnnonce("L1AGROChance");lectureHeure2();break;  
                      case "L3GESTION":lectureAnnonce("L3GESTIONChance");lectureHeure2();break;
                      case "L3INFO":lectureAnnonce("L3INFORMATIQUEChance");lectureHeure2();break;
                      case "LICENCE1":lectureAnnonce("LICENCE1Chance");lectureHeure50002();break;
                      case "BTL1":lectureAnnonce("BTL1Chance");lectureHeure50002();break;
                      case "BTL2":lectureAnnonce("BTL2Chance");lectureHeure50002();break;
                      case "L2GESTION":lectureAnnonce("L2GESTIONChance");lectureHeure2();break;
                        default: alert("Veuillez choisir une classe");
                   }

 
                   let heures2 = parseInt(caseHeures2.value); // Récupère le temps en heures depuis l'élément HTML
                    let minutes2=parseInt(caseMinutes2.value);//On récupère les minutes depuis le fichier HTML
                    if (controlHeure2 === 1) {
                        let nouvelleDate2 = new Date(); // Obtenez la date actuelle
                        heureDebut2.innerHTML ="Start: "+ nouvelleDate2.getHours() + "h" + nouvelleDate2.getMinutes()+"mn"; // Affiche l'heure de début de l'épreuve
                        let hFin2=nouvelleDate2.getHours()+heures2;
                        let mFin2=nouvelleDate2.getMinutes()+minutes2;
                          if(mFin2>=60){hFin2+=Math.floor(mFin2/60); mFin2%=60;}
                        heureFin2.innerHTML ="End: "+ hFin2 + "h" + mFin2+"mn"; // Affiche l'heure de fin de l'épreuve
                    }

           clearInterval(interval2); // Arrête tout intervalle précédent pour éviter les doublons

           let tempsEnSecondes2 = (heures2 * 3600)+(minutes2*60); // Convertit le temps en secondes pour le compte à rebours
           
           let countdownDiv2 = document.getElementById("countdownClasse2"); // Référence à l'élément d'affichage du compte à rebours

           interval2 = setInterval(function() { // Lance un nouvel intervalle
               if (tempsEnSecondes2 < 0) { // Vérifie si le temps est écoulé
                   clearInterval(interval2); // Arrête le compte à rebours lorsque le temps est terminé
                   countdownDiv2.innerText = "Terminé"; // Affiche "Terminé !" à la fin
                   lectureAnnonce("finEvaluation");
               }
                else{
               let heuresRestantes2 = Math.floor(tempsEnSecondes2 / 3600); // Calcule les heures restantes
               let ResteMinutes2 = Math.floor((tempsEnSecondes2 % 3600) / 60); // Calcule les minutes restantes
               let secondes2 = tempsEnSecondes2 % 60; // Calcule les secondes restantes
               
               countdownDiv2.innerText = `${heuresRestantes2.toString().padStart(2, '0')}:${ResteMinutes2.toString().padStart(2, '0')}:${secondes2.toString().padStart(2, '0')}`; // Affiche le compte à rebours
               
               // Action à exécuter chaque fois qu'une heure passe
               if (secondes2 === 0 && ResteMinutes2 === 0 && heuresRestantes2 < heures2 && heuresRestantes2>0) {
                   //On va lire un audio en fonction de la classe qui sera choisie
                      
                    switch(deuxiemeChoix.value){

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

               tempsEnSecondes2--; // Décrémente le temps restant
           }
           }, 1000); // Rafraîchissement toutes les secondes (1000ms = 1s)
           compteurClique2=true;
          }
       }
       }

       function pauseCountdown2() {
           clearInterval(interval2); // Arrête le compte à rebours actif
       }

       function resetCountdown2(classe2) {
        compteurClique2=false;
           clearInterval(interval2); // Arrête le compte à rebours actif
           document.getElementById("countdownClasse2").innerText = ""; // Réinitialise l'affichage du compte à rebours
             controlHeure2=0;
              heureDebut2.innerHTML="Start: ";
              heureFin2.innerHTML="End: ";
          }