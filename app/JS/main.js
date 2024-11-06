import "../css/style.css"
import {food} from "../JS/Products.js"

const cheapfood = food.filter((food) => (food.price < 10))
console.log(cheapfood)

const expensivefood = food.filter((food) => (food.price > 10))
console.log(expensivefood)

food.forEach((food) => {
    const html = `
    <div class = "card">
        <h2>${food.name}</h2>
        <h2>${food.origin}</h2>
        <h2>${food.price}</h2>
    </div>
    `;

})







