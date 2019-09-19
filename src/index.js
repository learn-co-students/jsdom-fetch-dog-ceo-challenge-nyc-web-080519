console.log('%c HI', 'color: firebrick')

getDoggos();

function getDoggos() {
    dogs = fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => addImages(data))
    return dogs
}

// fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then((response) => response.json())
//     .then(data => addImages(data))

function addImages(data) {
    const imgLinks = data["message"]
    const container = document.querySelector("div#dog-image-container")

    imgLinks.forEach(element => {
        container.insertAdjacentHTML('beforeend', `<img src= ${element}></img>` )
    });
}

// function addImages(data) {
//     const container = document.querySelector("#dog-image-container")
//     myLis = data["message"]
//     myLis.forEach((li) => {
//         container.insertAdjacentHTML('beforeend', `<img src= ${li}></img>`)
//     })
// }