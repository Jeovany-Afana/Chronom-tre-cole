const uneClasse=document.getElementById("uneClasse");
const deuxClasses=document.getElementById("deuxClasses");
const troisClasses=document.getElementById("troisClasses");
const quatreClasses=document.getElementById("quatreClasses");
const classe1=document.getElementById("classe1");
const classe2=document.getElementById("classe2");
const classe3=document.getElementById("classe3");
const classe4=document.getElementById("classe4");
const chrono1=document.getElementById("countdownClasse1");
const chrono2=document.getElementById("countdownClasse2");
const chrono3=document.getElementById("countdownClasse3");
const chrono4=document.getElementById("countdownClasse4");


uneClasse.addEventListener("click",function(){

    classe1.style.top="43%";
    classe1.style.left="25%";
    classe1.style.height="47%";
    classe2.style.opacity="0";
    classe2.style.zIndex="-1";
    classe3.style.opacity="0";
    classe3.style.zIndex="-1";
    classe4.style.opacity="0";
    classe4.style.zIndex="-1";

   chrono1.style.marginTop="5%";
});

  deuxClasses.addEventListener("click",function(){

      
        classe3.style.opacity="0";
        classe3.style.zIndex="-1";
        classe4.style.opacity="0";
        classe4.style.zIndex="-1";
        classe2.style.opacity="8";
        classe2.style.zIndex="1";
       classe2.style.height="47%";
       classe2.style.top="43%";
       classe1.style.top="43%";
        classe1.style.left="3%";
        classe1.style.height="47%";

        chrono1.style.marginTop="5%";
        chrono2.style.marginTop="5%";
  });

  troisClasses.addEventListener("click",function(){

    classe2.style.opacity="8";
       classe2.style.height="32%";
       classe2.style.zIndex="1";
       classe2.style.top="32%";
       classe1.style.top="32%";
        classe1.style.left="3%";
        classe1.style.height="32%";
        classe4.style.opacity="0";
        classe4.style.zIndex="-1";
        classe3.style.opacity="1";
        classe3.style.zIndex="1"
        classe3.style.left="25%";

        chrono1.style.marginTop="-3%";
        chrono2.style.marginTop="-3%";
        chrono3.style.marginTop="-3%";
        chrono4.style.marginTop="-3%";
  });



quatreClasses.addEventListener("click",function(){

    classe2.style.opacity="8";
    classe2.style.zIndex="1";
    classe2.style.height="32%";
    classe2.style.top="32%";
    classe1.style.top="32%";
     classe1.style.left="3%";
     classe1.style.height="32%";
     classe3.style.opacity="8";
     classe3.style.left="3%";  
     classe3.style.zIndex="1";
     classe4.style.zIndex="1";
     classe4.style.opacity="8";  

        chrono1.style.marginTop="-3%";
        chrono2.style.marginTop="-3%";
        chrono3.style.marginTop="-3%";
        chrono4.style.marginTop="-3%";
});
