
function renderNametags(nametags) {
    let nameTagsString = '';
    for (let count = 0; count < nametags.length; count++) {
        nameTagsString += `
        <div> 
            <h2 style = "background-color:blue; color:white;">Hello, my name is </h2>
            <h3 style = "background-color:white; color:black">${nametags[count]}</h3>
            
        </div>`
    }



    return `
        <div class="text-center mt-5">
            ${nameTagsString}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
        "Kamilah",
        "Kim",
        "Stuart",
        "Ron",
        "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}