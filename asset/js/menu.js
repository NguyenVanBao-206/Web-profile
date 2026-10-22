const iconMenu = document.querySelector("#icon-menu");
const menu = document.querySelector("#menu");

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
})