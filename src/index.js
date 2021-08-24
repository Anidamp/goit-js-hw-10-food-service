import "./styles.css";
import items from "./menu.json";
import menuTemplate from "./templates/template.hbs";

const list = document.querySelector('.js-menu');


 const markup = menuTemplate(items);
 list.insertAdjacentHTML('afterbegin', markup);