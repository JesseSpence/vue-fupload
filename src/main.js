import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(store).use(router).mount('#app')


// let menubtn = document.querySelector("#menu-btn")
//         let sidebar = document.querySelector("#sidebar")
// let container = document.querySelector(".my-container")
        
//         menubtn.addEventListener("click", () => {
//             sidebar.classList.toggle("active-nav"),
//                 container.classList.toggle("active-cont");
//         })