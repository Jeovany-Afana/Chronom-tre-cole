<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifie si la classe a été sélectionnée

        $classe = $_POST["bouton_choisi"];

         echo $_POST['commentaire'];
    // Vérifie si un commentaire a été saisi
    if (isset($_POST["commentaire"])) {
             
      header("location:index3.html");
          
    }
}
?>

<?php
// Contenu à écrire dans le fichier

// Écriture dans un fichier
$file = fopen($classe.'.txt', 'a'); // 'w' indique que le fichier est ouvert en mode écriture
fwrite($file, $_POST["commentaire"]."\n");
fclose($file);
?>

