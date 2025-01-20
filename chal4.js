//challenge 4
var boutons = document.querySelectorAll("button");

    boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        alert(bouton.textContent);
    });
});