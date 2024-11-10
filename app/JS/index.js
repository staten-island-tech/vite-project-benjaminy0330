import "../css/style.css"
import {food} from "./Products.js"


document.querySelector(".theme").addEventListener("click", function() {
    if(document.body.classList.contains("lively")){
        document.body.classList.add("gloomy");
        document.body.classList.remove("lively");
    } else{
        document.body.classList.add("lively");
        document.body.classList.remove("gloomy");
    }
});

const cardlocation = document.getElementById("cards");
//default
food.forEach((food) => {
        const html = `
        <div class = "card">
            <h2>${food.name}</h2>
            <h2>${food.origin}</h2>
            <img src="${food.image}" alt="food-image" class ="image">
            <h2>${food.price}</h2>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)
})


//all
document.querySelector(".all").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    
    food.forEach((food) => {
        const html = `
        <div class = "card">
            <h2>${food.name}</h2>
            <h2>${food.origin}</h2>
            <img src="${food.image}" alt="food-image" class ="image">
            <h2>${food.price}</h2>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)
        
})
})
//cheap
document.querySelector(".low").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    const cheapfood = food.filter((food) => (food.price < 8))
    console.log(cheapfood)

    cheapfood.forEach((food) => {
        const html = `
        <div class = "card">
            <h2>${food.name}</h2>
            <h2>${food.origin}</h2>
            <img src="${food.image}" alt="food-image" class ="image">
            <h2>${food.price}</h2>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)

        
})
})
//expensive
document.querySelector(".high").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    const expensivefood = food.filter((food) => (food.price > 8))
    console.log(expensivefood)

    expensivefood.forEach((food) => {
        const html = `
        <div class = "card">
            <h2>${food.name}</h2>
            <h2>${food.origin}</h2>
            <img src="${food.image}" alt="food-image" class ="image">
            <h2>${food.price}</h2>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)

        
})
})
//vegan


document.querySelector(".vegan").addEventListener("click", function(){
    document.querySelector(".cards").innerHTML = "";
    const vegetarian = food.filter(food => food.vegetarian);
    console.log(vegetarian);

    vegetarian.forEach((food) => {
        const html = `
        <div class = "card">
            <h2>${food.name}</h2>
            <h2>${food.origin}</h2>
            <img src="${food.image}" alt="food-image" class ="image">
            <h2>${food.price}</h2>
        </div>
        `;
        cardlocation.insertAdjacentHTML("beforeend", html)

        
})
})




/*const expensivefood = food.filter((food) => (food.price > 10))
console.log(expensivefood)

const vegetariantrue = food.filter((food) => (food.vegetarian))
console.log(vegetariantrue)*/

/*const vegetarianfood = [true];
const vegetarian = food.filter(food => vegetarianfood.includes(food.vegetarian));
console.log(vegetarian);*/

