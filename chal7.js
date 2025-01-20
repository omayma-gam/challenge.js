function updateDateTime() {
    var horloge = document.getElementById("horloge");

    var maintenant = new Date();
    var dateTimeString = maintenant.toLocaleString();
    horloge.textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();