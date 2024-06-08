 let interval1; // Variable globale pour stocker l'intervalle du compte à rebours
 const caseHeures1=document.getElementById("inputClasse1");
 const caseMinutes1=document.getElementById("selectMinutes1");
 const premierChoix=document.getElementById("selection1");
 const heureDebut1=document.getElementById("heureDebut1");
 const heureFin1=document.getElementById("heureFin1");
   let compteurClique1=false;
 let date1=new Date();
 let controlHeure1=0;

   
function lectureHeure()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures1.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes1.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},4000);
                  }

                  else if(parseInt(caseMinutes1.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes1.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes1.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes1.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes1.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes1.value)===0)
         {
          setTimeout(function(){lectureAnnonce("Evaluation4h")},4000);
         };break;
    } ;
  }


  function lectureHeure5000()//Fonction qui va permettre de connaitre le nombre d'heures et de minutes et lire l'audio correspondant 
  {
    switch(parseInt(caseHeures1.value))//Suivant le nombre d'heures entrées par l'utilisateur
    {
       case 1:  if(parseInt(caseMinutes1.value)===0)
                  {
                   setTimeout(function(){lectureAnnonce("Evaluation1h")},6000);
                  }

                  else if(parseInt(caseMinutes1.value)===30)
                    {
                     setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                    };break;

       case 2: if(parseInt(caseMinutes1.value)===0)
                 {
                    setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                 }

               else if(parseInt(caseMinutes1.value)===30)
                 {
                  setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                 };break;

       case 3:
                 if(parseInt(caseMinutes1.value)===0)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                  }

                 else if(parseInt(caseMinutes1.value)===30)
                  {
                    setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                  };break;

       case 4:
         if(parseInt(caseMinutes1.value)===0)
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

        function startCountdown1(classe) {

             if(caseHeures1.value===''||premierChoix.value==='vide'||caseMinutes1.value===''||caseHeures1.value<0||caseMinutes1.value<0)
               {
                alert("Veuillez préciser la durée de l'épreuve(Heures/Minutes) et choisir une classe dans la liste");
               }

               else
      {
                  if(compteurClique1===true)
                  {
                     alert("Le compte à rebours est déjà en cours");
                  }

                  else//Au cas ou l'utilisateur n'a pas encore cliqué sur le bouton
                  {
                  
                     controlHeure1++;
                     //GESTION DES AUDIOS D'OUVERTURE POUR LE DEBUT DES EVALUATIONS
                     //Il faut penser au cas ou il y'a 0 heures
                     switch(premierChoix.value)
                   {

                      case "BTL1A": 
                                   
                                  lectureAnnonce("BTL1AChance");
                                       switch(parseInt(caseHeures1.value))
                                         {
                                            case 1:  if(parseInt(caseMinutes1.value)===0)
                                                       {
                                                        setTimeout(function(){lectureAnnonce("Evaluation1h")},5000);
                                                       }

                                                       else if(parseInt(caseMinutes1.value)===30)
                                                         {
                                                          setTimeout(function(){lectureAnnonce("Evaluation1h30")},4000);
                                                         };break;

                                            case 2: if(parseInt(caseMinutes1.value)===0)
                                                      {
                                                         setTimeout(function(){lectureAnnonce("Evaluation2h")},4000);
                                                      }

                                                    else if(parseInt(caseMinutes1.value)===30)
                                                      {
                                                       setTimeout(function(){lectureAnnonce("Evaluation2h30")},4000);
                                                      };break;

                                            case 3:
                                                      if(parseInt(caseMinutes1.value)===0)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h")},4000);
                                                       }

                                                      else if(parseInt(caseMinutes1.value)===30)
                                                       {
                                                         setTimeout(function(){lectureAnnonce("Evaluation3h30")},4000);
                                                       };break;

                                            case 4:
                                              if(parseInt(caseMinutes1.value)===0)
                                              {
                                               setTimeout(function(){lectureAnnonce("Evaluation4h")},5000);
                                              };break;
                                         }  ;break;

                      case "BTL2A":lectureAnnonce("BTL2AChance");lectureHeure(); break;
                      case "BTL2B":lectureAnnonce("BTL2BChance");lectureHeure();break;
                      case "BTL3": lectureAnnonce("BTL3Chance");lectureHeure();break;
                      case "L1GESTIONA":lectureAnnonce("L1GESTIONAChance");lectureHeure();break;
                      case "L2GESTIONA":lectureAnnonce("L2GESTIONAChance");lectureHeure();break;
                      case "L2GESTIONB":lectureAnnonce("L2GESTIONBChance");lectureHeure();break;
                      case "L2GESTIONC":lectureAnnonce("L2GESTIONCChance");lectureHeure();break;
                      case "FINANCE":lectureAnnonce("FINANCEChance");lectureHeure();break;
                      case "QHSE":lectureAnnonce("QHSEChance");lectureHeure();break;
                      case "COMMERCE":lectureAnnonce("COMMERCEChance");lectureHeure5000();break;
                      case "GESTION":lectureAnnonce("GESTIONChance");lectureHeure5000();break;
                      case "L1INFOA":lectureAnnonce("L1INFORMATIQUEAChance");lectureHeure();break;
                      case "L2INFO":lectureAnnonce("L2INFORMATIQUEChance");lectureHeure();break;
                      case "GENIE":lectureAnnonce("GENIEChance");lectureHeure5000();break;
                      case "RSS":lectureAnnonce("RSSChance");lectureHeure5000();break;
                      case "L1DROIT":lectureAnnonce("L1DROITChance");lectureHeure();break;
                      case "L2DROIT":lectureAnnonce("L2DROITChance");lectureHeure();break;
                      case "L1AGRO":lectureAnnonce("L1AGROChance");lectureHeure();break;  
                      case "L3GESTION":lectureAnnonce("L3GESTIONChance");lectureHeure();break;
                      case "L3INFO":lectureAnnonce("L3INFORMATIQUEChance");lectureHeure();break;
                      case "LICENCE1":lectureAnnonce("LICENCE1Chance");lectureHeure5000();break;
                      case "BTL1":lectureAnnonce("BTL1Chance");lectureHeure5000();break;
                      case "BTL2":lectureAnnonce("BTL2Chance");lectureHeure5000();break;
                      case "L2GESTION":lectureAnnonce("L2GESTIONChance");lectureHeure();break;
                        default: alert("Veuillez choisir une classe");
                   } 



                    let heures1 = parseInt(caseHeures1.value); // Récupère le temps en heures depuis l'élément HTML
                    let minutes1=parseInt(caseMinutes1.value);//On récupère les minutes depuis le fichier HTML
                    if (controlHeure1 === 1) 
                    {
                        let nouvelleDate = new Date(); // Obtenez la date actuelle
                        heureDebut1.innerHTML ="Start: "+ nouvelleDate.getHours() + "h" + nouvelleDate.getMinutes()+"mn"; // Affiche l'heure de début de l'épreuve
                        let hFin1=nouvelleDate.getHours()+heures1;
                        let mFin1=nouvelleDate.getMinutes()+minutes1;
                          if(mFin1>=60){hFin1+=Math.floor(mFin1/60); mFin1%=60;}
                        heureFin1.innerHTML ="End: "+ hFin1 + "h" + mFin1+"mn"; // Affiche l'heure de fin de l'épreuve
                    }
            clearInterval(interval1); // Arrête tout intervalle précédent pour éviter les doublons

           
            let tempsEnSecondes1 = (heures1 * 3600)+(minutes1*60); // Convertit le temps en secondes pour le compte à rebours
            
            let countdownDiv1 = document.getElementById("countdownClasse1"); // Référence à l'élément d'affichage du compte à rebours

            interval1 = setInterval(function() { // Lance un nouvel intervalle
                if (tempsEnSecondes1 < 0) { // Vérifie si le temps est écoulé
                    clearInterval(interval1); // Arrête le compte à rebours lorsque le temps est terminé
                    countdownDiv1.innerText = "Terminé"; // Affiche "Terminé !" à la fin
                    lectureAnnonce("finEvaluation");
                }
                 else{
                let heuresRestantes1 = Math.floor(tempsEnSecondes1 / 3600); // Calcule les heures restantes
                let ResteMinutes1 = Math.floor((tempsEnSecondes1 % 3600) / 60); // Calcule les minutes restantes
                let secondes1 = tempsEnSecondes1 % 60; // Calcule les secondes restantes
                
                countdownDiv1.innerText = `${heuresRestantes1.toString().padStart(2, '0')}:${ResteMinutes1.toString().padStart(2, '0')}:${secondes1.toString().padStart(2, '0')}`; // Affiche le compte à rebours
                
                // Action à exécuter chaque fois qu'une heure passe
                if (secondes1 === 0 && ResteMinutes1 === 0 && heuresRestantes1 < heures1 && heuresRestantes1>0) {
                    //On va lire un audio en fonction de la classe qui sera choisie
                       
                     switch(premierChoix.value){

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

                tempsEnSecondes1--; // Décrémente le temps restant
            }
            }, 1000); // Rafraîchissement toutes les secondes (1000ms = 1s)
            compteurClique1=true;
        }

   
}
    
        
        }

        function pauseCountdown1() {
            clearInterval(interval1); // Arrête le compte à rebours actif
        }

        function resetCountdown1(classe1) {
          compteurClique1=false;
            clearInterval(interval1); // Arrête le compte à rebours actif
            document.getElementById("countdownClasse1").innerText = ""; // Réinitialise l'affichage du compte à rebours
            controlHeure1=0;
            heureDebut1.innerHTML="Start: ";
            heureFin1.innerHTML="End: ";
          }