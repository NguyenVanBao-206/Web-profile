const userTrigger = document.querySelector("#userTrigger")
const authMenu = document.querySelector("#authMenu")


userTrigger.addEventListener("click", () => {
    authMenu.classList.toggle("show")
})