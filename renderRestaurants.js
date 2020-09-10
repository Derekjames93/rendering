
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
   let aString = '';
   for (let count = 0; count < restaurants.length; count++) {
       let newRest = restaurants[count];
       
       aString += `
        <div style="background-color:gray; border-radius:5px; width:300px; margin:5px; margin-left:0px>
            <p style="font-size:28px">${newRest.name}</p><p>${newRest.type}</p> <p> ${'$'.repeat(newRest.priceRating)}</p>
        </div>
       `
       
   }
   
    return `
        <div class="mt-5 d-flex flex-row justify-content-start" >
            ${aString}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}