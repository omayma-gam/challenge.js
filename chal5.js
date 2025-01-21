   //challenge 5
   var formulaire = document.getElementById("mon-formulaire");
   var champSaisie = document.getElementById("champ-saisie");
   var messageErreur = document.getElementById("message-erreur");

   formulaire.addEventListener("submit", function(event) {
       if (champSaisie.value.trim() === ""){
           event.preventDefault();
           messageErreur.textContent = "Le champ de saisie ne peut pas être vide.";
       } else {
           messageErreur.textContent = "";
       }
   });