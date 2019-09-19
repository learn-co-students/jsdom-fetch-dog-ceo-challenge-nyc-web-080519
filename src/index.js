console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const breeds = document.querySelector('#dog-breeds')
    const dogBreeds = []

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const images = document.querySelector('#dog-image-container')
        data.message.forEach(function(img) {
            images.insertAdjacentHTML("beforeend", `<img src=${img}>`)
        })
    })

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        for (const key in data.message) {
            dogBreeds.push(key)
            breeds.insertAdjacentHTML("beforeend", `<li>${key}</li>`)
        }
    })

    document.addEventListener("click", function(e) {
        if (e.target.tagName === 'LI') {
            e.target.style.color = "blue"
        }
    })

    document.addEventListener("change", function(e) {
        if (e.target.id === "breed-dropdown") {
            console.log("dropdown changed")
            switch (e.target.value) {
                case "a":
                    console.log("selected a")
                    filtered(e.target.value)
                    break;
                case "b": 
                    console.log("selected b")
                    filtered(e.target.value)
                    break;
                case "c":
                    console.log("selected c")
                    filtered(e.target.value)
                    break;
                case "d":
                    console.log("selected d")
                    filtered(e.target.value)
                    break;
                default:
                    console.log("default")
                    //show all dog breeds again
                    breeds.innerHTML = ""
                    dogBreeds.forEach(function(breed) {
                        breeds.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
                    })
            }
        }
    })

    function filtered(letter) {
        let filteredBreeds = dogBreeds.filter(function(breed) {
            return breed[0] === letter
        })
        breeds.innerHTML = ""
        filteredBreeds.forEach(function(breed) {
            breeds.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
        })
    }
})