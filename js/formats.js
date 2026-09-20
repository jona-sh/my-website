function macheRot() {
    /* bekommt CSS-Selektor als string -> gibt nodelist zurück */
    const ueberschriften = document.querySelectorAll("h1, h2, li");
    ueberschriften.forEach(  function(element) {
        element.classList.remove("blau");
        element.classList.add("rot");
    }  );
    const derButton = document.querySelector("#magischerRotButton") /* CSS selektor by id */
    derButton.textContent = "mache blau"
    derButton.removeEventListener("click", macheRot);
    derButton.addEventListener("click", macheBlau);
}
function macheBlau() {
    /* bekommt CSS-Selektor als string -> gibt nodelist zurück */
    const ueberschriften = document.querySelectorAll("h1, h2, li");
    ueberschriften.forEach(  function(element) {
        element.classList.remove("rot");
        element.classList.add("blau");
    }  );
    const derButton = document.getElementById("magischerRotButton") /* ALTERNATIV: document.querySelector("#magischerRotButton") /* CSS selektor by id */
    derButton.textContent = "mache rot"
    derButton.removeEventListener("click", macheBlau);
    derButton.addEventListener("click", macheRot);
}
document.getElementById("magischerRotButton").addEventListener("click", macheRot);