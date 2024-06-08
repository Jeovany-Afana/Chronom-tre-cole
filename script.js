const paragraphe=document.getElementById("heureActuelle");

  function heureActuelle()
    {
        let actuellement=new Date();
          let heureAct=actuellement.getHours();
           let minutesAct=actuellement.getMinutes();
            let secondesAct=actuellement.getSeconds();

              paragraphe.innerHTML=heureAct+":"+minutesAct+":"+secondesAct;
    }

    setInterval(heureActuelle,1000);