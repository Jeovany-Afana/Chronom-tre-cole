const classes=document.querySelectorAll("form button");
let nombreClick=0;
let elementPrecedent;

  //GESTION DU FORMULAIRE

 function envoieValeur(value)
   {
      document.getElementById("boutonChoisi").value=value;
   }


  
  //GESTION DES MOUSEOVER POUR LES BOUTONS BLEUS
    classes[0].addEventListener("mouseover",function(){classes[0].style.backgroundColor="#3131EC";classes[0].style.color="white";});
    classes[0].addEventListener("mouseout",function(){classes[0].style.backgroundColor="white";classes[0].style.color="darkblue";});

    classes[1].addEventListener("mouseover",function(){classes[1].style.backgroundColor="#3131EC";classes[1].style.color="white";});
    classes[1].addEventListener("mouseout",function(){classes[1].style.backgroundColor="white";classes[1].style.color="darkblue";});

    classes[2].addEventListener("mouseover",function(){classes[2].style.backgroundColor="#3131EC";classes[2].style.color="white";});
    classes[2].addEventListener("mouseout",function(){classes[2].style.backgroundColor="white";classes[2].style.color="darkblue";});

    classes[4].addEventListener("mouseover",function(){classes[4].style.backgroundColor="#3131EC";classes[4].style.color="white";});
    classes[4].addEventListener("mouseout",function(){classes[4].style.backgroundColor="white";classes[4].style.color="darkblue";});

    classes[7].addEventListener("mouseover",function(){classes[7].style.backgroundColor="#3131EC";classes[7].style.color="white";});
    classes[7].addEventListener("mouseout",function(){classes[7].style.backgroundColor="white";classes[7].style.color="darkblue";});

    classes[8].addEventListener("mouseover",function(){classes[8].style.backgroundColor="#3131EC";classes[8].style.color="white";});
    classes[8].addEventListener("mouseout",function(){classes[8].style.backgroundColor="white";classes[8].style.color="darkblue";});

    classes[9].addEventListener("mouseover",function(){ classes[9].style.backgroundColor="#3131EC"; classes[9].style.color="white";});
    classes[9].addEventListener("mouseout",function(){ classes[9].style.backgroundColor="white"; classes[9].style.color="darkblue";});

    classes[11].addEventListener("mouseover",function(){classes[11].style.backgroundColor="#3131EC";classes[11].style.color="white";});
    classes[11].addEventListener("mouseout",function(){classes[11].style.backgroundColor="white";classes[11].style.color="darkblue";});

    classes[15].addEventListener("mouseover",function(){ classes[15].style.backgroundColor="#3131EC"; classes[15].style.color="white";});
    classes[15].addEventListener("mouseout",function(){ classes[15].style.backgroundColor="white"; classes[15].style.color="darkblue";});

    classes[16].addEventListener("mouseover",function(){classes[16].style.backgroundColor="#3131EC";classes[16].style.color="white";});
    classes[16].addEventListener("mouseout",function(){classes[16].style.backgroundColor="white";classes[16].style.color="darkblue";});

    classes[17].addEventListener("mouseover",function(){classes[17].style.backgroundColor="#3131EC";classes[17].style.color="white";});
    classes[17].addEventListener("mouseout",function(){classes[17].style.backgroundColor="white";classes[17].style.color="darkblue";});

//GESTION DES MOUSEOVER POUR LES BOUTONS JAUNES
classes[5].addEventListener("mouseover",function(){classes[5].style.backgroundColor="#FCDF06";classes[5].style.color="white";});
classes[5].addEventListener("mouseout",function(){classes[5].style.backgroundColor="white";classes[5].style.color="darkblue";});

classes[3].addEventListener("mouseover",function(){classes[3].style.backgroundColor="#FCDF06";classes[3].style.color="white";});
classes[3].addEventListener("mouseout",function(){classes[3].style.backgroundColor="white";classes[3].style.color="darkblue";});

classes[6].addEventListener("mouseover",function(){classes[6].style.backgroundColor="#FCDF06";classes[6].style.color="white";});
classes[6].addEventListener("mouseout",function(){classes[6].style.backgroundColor="white";classes[6].style.color="darkblue";});

classes[10].addEventListener("mouseover",function(){classes[10].style.backgroundColor="#FCDF06";classes[10].style.color="white";});
classes[10].addEventListener("mouseout",function(){classes[10].style.backgroundColor="white";classes[10].style.color="darkblue";});

classes[12].addEventListener("mouseover",function(){classes[12].style.backgroundColor="#FCDF06";classes[12].style.color="white";});
classes[12].addEventListener("mouseout",function(){classes[12].style.backgroundColor="white";classes[12].style.color="darkblue";});

classes[13].addEventListener("mouseover",function(){classes[13].style.backgroundColor="#FCDF06";classes[13].style.color="white";});
classes[13].addEventListener("mouseout",function(){classes[13].style.backgroundColor="white";classes[13].style.color="darkblue";});

classes[14].addEventListener("mouseover",function(){classes[14].style.backgroundColor="#FCDF06";classes[14].style.color="white";});
classes[14].addEventListener("mouseout",function(){classes[14].style.backgroundColor="white";classes[14].style.color="darkblue";});

classes[5].addEventListener("mouseover",function(){classes[5].style.backgroundColor="#FCDF06";classes[5].style.color="white";});
classes[5].addEventListener("mouseout",function(){classes[5].style.backgroundColor="white";classes[5].style.color="darkblue";});

classes[18].addEventListener("mouseover",function(){classes[18].style.backgroundColor="#FCDF06";classes[18].style.color="white";});
classes[18].addEventListener("mouseout",function(){classes[18].style.backgroundColor="white";classes[18].style.color="darkblue";});

  classes.forEach(element => {
    
      element.addEventListener("click",function()
      {
         
         nombreClick++;
         
           if(nombreClick===1)
             {
                  elementPrecedent=element;//On affecte l'élément choisi à la variable elementPrecedent afin de la modifier plus tard au cas ou l'utilisateur change d'avis
                  element.style.transform="scale(1.1)";
                  element.style.borderColor="green";
             }
            
            else {
                let demandeConfirmation=confirm("Etes vous sur de vouloir changer la classe choisie précédement ?");
                  
                  if(demandeConfirmation)
                    {
                        elementPrecedent.style.transform="scale(1)";//On initialise l'élément précédant avec ses valeurs de départ
                        elementPrecedent.style.borderColor="initial";

                        elementPrecedent=element;
                        element.style.transform="scale(1.1)";
                        element.style.borderColor="green";
                    }
            }
      });

      element.addEventListener("submit",function(e){
        e.preventDefault();
      })
  });