  var boutonSupprimer = document.getElementById("bouton-supprimer");

  boutonSupprimer.addEventListener("click", function() {
      var elementASupprimer = document.getElementById("element-a-supprimer");
      elementASupprimer.remove();
  });