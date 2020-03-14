function openMenu() {
    mobileMenu.className = "mobilemenu shown";
}

function closeMenu() {
    mobileMenu.className = "mobilemenu hidden";
}

var hamburger;
var close;
var mobileMenu;
window.addEventListener('DOMContentLoaded', (event) => {
    hamburger = document.getElementById("hamburger");
    close = document.getElementById("close");
    mobileMenu = document.getElementById("mobilemenu");
    hamburger.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
});