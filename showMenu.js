        let menu = document.querySelector(".navbar .links .menu");
        let dropdown = document.querySelector(".dropdown");
        let home = document.querySelector(".home");
function showMenu() {
    if(dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        home.style.marginTop = "100px";
    } else {
        dropdown.style.display = "grid";
        home.style.marginTop = "10px";
    }
}