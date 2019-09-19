document.addEventListener("DOMContentLoaded", function() {
    let imgContainer = document.querySelector("#dog-image-container")
    let breedsContainer = document.querySelector("#dog-breeds")
    let dropDown = document.querySelector("#breed-dropdown")
    let allTheBreeds;

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
        return response.json()
    })
    .then(renderImage)

    function renderImage(data) {
        data.message.forEach(function (img) {
            imgContainer.insertAdjacentHTML("beforeend", `<img src="${img}">`)
        })   
    }

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json()
    })
    .then(listBreeds)

    function listBreeds(data) {
        let allBreeds = Object.keys(data.message)
        allBreeds.forEach(function (breed) {
            breedsContainer.insertAdjacentHTML("beforeend", `<li data-id=${breed.charAt(0)}>${breed}</li>`)
        })
        allTheBreeds = [...allBreeds]
    }

    breedsContainer.addEventListener("click", function (event){
        event.target.style.color = "#FF69B4"
    })

    dropDown.addEventListener("change", function (event) {
        let letter = event.target.value
        breedsContainer.innerHTML = ''

        allTheBreeds.forEach(function (breed) {
            if (letter === breed[0]) {
                breedsContainer.insertAdjacentHTML("beforeend", `<li data-id=${breed.charAt(0)}>${breed}</li>`)
            }
        })
    })

  });