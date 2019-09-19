
document.addEventListener("DOMContentLoaded", function(){
    addDogPictures()
    addBreed()
    updateColor()
    filterBreed()
})

console.log('%c HI', 'color: firebrick')

function addDogPictures() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        const imageContainer = document.querySelector('#dog-image-container')
        object.message.forEach(function(element){
            imageContainer.insertAdjacentHTML('afterbegin', `<img src= ${element}></img>`)
        })
    })
}

let dogType;

function addBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        dogType = Object.keys(object.message)
        dogType.forEach(function(element){
            document.querySelector('#dog-breeds').insertAdjacentHTML('afterbegin', `<li>${element}</li>`)
        })
    })
}

function updateColor(){
    document.querySelector('#dog-breeds').addEventListener("click", function(){
        const list = event.target
        if (list.style.color === "") {
            list.style.color = "orange"
        } else if (list.style.color === "orange") {
            list.style.color = ""
        }
        })
}

function filterBreed(){
document.querySelector('#breed-dropdown').addEventListener("change", function(e) {
    let filtered = dogType.filter(function (breed){
        return breed.charAt(0) === `${e.target.value}`
    })
    document.querySelector("#dog-breeds").innerHTML = ""
    filtered.forEach(function (breed){
        document.querySelector("#dog-breeds").insertAdjacentHTML("beforeend", `<li data-id=${breed.charAt(0)}>"${breed}"</li>`)
    })
})
}



