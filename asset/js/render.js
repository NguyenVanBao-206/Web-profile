import { fetchApi } from "./fetchAPI.js";
import { params } from "./variable.js";


const projectGrid = document.querySelector("#project-grid")

export const render = () => {
  const api = `http://localhost:3000/projects?q=${params.q}&_page=${params.page}&_limit=${params.limit}`
  fetchApi(api)
    .then(data => {
      console.log("Dữ liệu nhận được:", data);
      let htmls = data.map(item => {
        return `
         <div class="project-card">
            <div class="project-image">
              <img src="${item.image}" alt="" />
            </div>
            <div class="project-info">
              <div class="project-content">
                <span class="project-category">${item.title}</span>
                <h6 class="project-title">${item.subtitle}</h6>
              </div>
              <div class="project-action">
                <a href=""><i class="fa-solid fa-plus"></i></a>
              </div>
            </div>
          </div>
            `
      })
      // console.log(htmls.join(""));
      projectGrid.innerHTML = htmls.join("")
    })
    .catch(error => {
      console.error("Lỗi khi kết nối API:", error);
    });
}