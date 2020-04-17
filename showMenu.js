        let menu = document.querySelector(".navbar .links .menu");
        let dropdown = document.querySelector(".dropdown");
function showMenu() {
    if(dropdown.style.display === "grid") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "grid";
    }
}