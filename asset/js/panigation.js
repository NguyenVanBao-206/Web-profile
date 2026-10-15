import { params } from "./variable.js"
import { render } from "./render.js"

render();

const pagiPre = document.querySelector("#paginationPre")
const pagiNumBer = document.querySelector("#paginationNumber")
const pagiNext = document.querySelector("#paginationNext")

pagiPre.addEventListener("click", function () {
    if (params.page > 1) {
        params.page = params.page - 1;
        pagiNumBer.innerHTML = params.page;
        render();
    }
})
pagiNext.addEventListener("click", function () {
    if (params.page < 5) {
        params.page = params.page + 1;
        pagiNumBer.innerHTML = params.page;
        render();
    }
})