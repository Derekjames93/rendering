
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    let aString = ''
    for (let count = 0; count < pokerHand.length; count++) {
        const newHand = pokerHand[count];

        aString += `
            <div> 
                <img src="./cards/${newHand.value}${newHand.suit}.png" >
            </div>`
    }





    return `
        <div class="text-center mt-5; d-flex flex-row">
            ${aString}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "Q",
            suit: "S"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}