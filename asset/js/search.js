import { params } from "./variable.js";
import { render } from "./render.js";

const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");
const searchDropdown = document.querySelector("#search-dropdown");
const tag = document.querySelectorAll(".suggest-tags .tag");

const search = () => {
    params.q = inputSearch.value;
    render();
}

buttonSearch.addEventListener("click", function () {
    search();
})

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }
})

inputSearch.addEventListener("focus", function () {
    searchDropdown.style.display = "block";
})
inputSearch.addEventListener("blur", function () {
    setTimeout(() => {
        searchDropdown.style.display = "none";
    }, 200);
});


tag.forEach(item => {
    item.addEventListener("click", function () {
        inputSearch.value = item.innerText;
        search();
        const projectSection = document.querySelector("#projects"); // Nhắm vào ID của vùng chứa sản phẩm
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt mà xuống dưới
        }
    })
});
