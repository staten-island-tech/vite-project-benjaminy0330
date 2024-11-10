const food =
[
    { name: "Sushi", origin: "Japan", price: 15.99, vegetarian: false, image:"https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"},
    { name: "Tacos", origin: "Mexico", price: 8.99, vegetarian: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/800px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"}, // Can be true if vegetarian, but typically not
    { name: "Pizza", origin: "Italy", price: 12.99, vegetarian: true, image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"}, // Assuming no meat toppings
    { name: "Croissant", origin: "France", price: 3.55, vegetarian: true, image: "https://upload.wikimedia.org/wikipedia/commons/2/28/2018_01_Croissant_IMG_0685.JPG"},
    { name: "Peking Duck", origin: "China", price: 25.99, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/8/81/Peking_Duck%2C_2014_%2802%29.jpg"},
    { name: "Paella", origin: "Spain", price: 18.99, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/1200px-01_Paella_Valenciana_original.jpg"}, // Typically includes seafood or meat
    { name: "Pierogi", origin: "Poland", price: 7.99, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pierogi_z_mas%C5%82em_-_2023.03.31.jpg/1200px-Pierogi_z_mas%C5%82em_-_2023.03.31.jpg"}, // Assuming potato/cheese filling
    { name: "Baklava", origin: "Turkey", price: 4.99, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png"},
    { name: "Poutine", origin: "Canada", price: 6.99, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/a/a6/OriginalPoutineLaBanquise.jpg"}, // Assuming no meat-based gravy
    { name: "Kimchi", origin: "Korea", price: 3.99, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Gimchi.jpg/640px-Gimchi.jpg"},
    { name: "Biryani", origin: "India", price: 10.59, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"}, // Often includes meat, can be vegetarian
    { name: "Bratwurst", origin: "Germany", price: 7.99, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Bratwurst.jpg"},
    { name: "Feijoada", origin: "Brazil", price: 13.99, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/9/90/Feijoada_%C3%A0_transmontada.jpg"},
    { name: "Falafel", origin: "Middle East", price: 4.99, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/5/57/Falafels_2.jpg"},
    { name: "Pho", origin: "Vietnam", price: 9.99, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg"}, // Can be true if vegetarian broth is used
    { name: "Empanada", origin: "Argentina", price: 3.25, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/7/78/Tapa_de_empanadillitas.JPG"}, // Can be true if vegetarian filling
    { name: "Tom Yum Soup", origin: "Thailand", price: 7.75, vegetarian: false, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/1200px-Tom_yam_kung_maenam.jpg"}, // Typically includes shrimp/meat
    { name: "Borscht", origin: "Russia", price: 6.59, vegetarian: true, image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Borscht_served.jpg"}, // Can be non-vegetarian with meat broth
    { name: "Goulash", origin: "Hungary", price: 8.99, vegetarian: false,image:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Gulyas080.jpg"},
    { name: "Fish and Chips", origin: "United Kingdom", price: 11.55, vegetarian: false,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/640px-Fish_and_chips_blackpool.jpg"}
]


export {food};