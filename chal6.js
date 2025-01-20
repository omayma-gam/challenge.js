var bouton = document.getElementById("mon-bouton");
var monDiv = document.getElementById("mon-div");

bouton.addEventListener("click", function() {
    if (monDiv.style.display === "none") {
        monDiv.style.display = "block";
    } else {
        monDiv.style.display = "none";
    }
});