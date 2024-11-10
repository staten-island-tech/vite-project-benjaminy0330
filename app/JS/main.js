import "../css/style.css"
import {food} from "../JS/Products.js"

const cheapfood = food.filter((food) => (food.price < 10))
console.log(cheapfood)

const expensivefood = food.filter((food) => (food.price > 10))
console.log(expensivefood)

const vegetariantrue = food.filter((food) => (food.vegetarian))
console.log(vegetariantrue)

const cardlocation = document.getElementById("cards");

food.forEach((food) => {
    const html = `
    <div class = "card">
        <h2 id = "name">${food.name}</h2>
        <h4 id = "origin">${food.origin}</h4>
        <h2 id = "price">${food.price}</h2>
    </div>
    `;

cardlocation.insertAdjacentHTML("beforeend", html)

})







