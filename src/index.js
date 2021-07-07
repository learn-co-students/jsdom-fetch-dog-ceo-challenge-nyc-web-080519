window.addEventListener('DOMContentLoaded', (event) => {

    // FETCH
    //----------------------------------------
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => addImages(data))
    // implicitly returns bc we're in an arrow function

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => addBreeds(data, breedsCont))


    // ADD
    //----------------------------------------
    const breedsCont = document.getElementById("dog-breeds")
    const allBreeds = []

    function addBreeds(data, breedsCont) {
        const breeds = data["message"]

        for (let breed in breeds) {
            allBreeds.unshift(breed)
            breedsCont.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
        }
    }
    function addImages(data) {
        const imgLinks = data["message"]
        const container = document.querySelector("div#dog-image-container")

        imgLinks.forEach(element => {
            container.insertAdjacentHTML('beforeend', `<img src= ${element}></img>`)
        });
    }

    // RE-COLORIZE
    //----------------------------------------
    document.addEventListener("click", function(e) {
        e.target.style.color = "magenta"
    })

    // SEARCH
    //----------------------------------------
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", function(event){
        matches = []
        filterLetter = event.target.value
        allBreeds.forEach(breed => {
            if ( breed[0] === filterLetter) { matches.push(breed) }
        })
        breedsCont.innerHTML = ""
        matches.forEach(e => {
            breedsCont.insertAdjacentHTML("beforeend", `<li>${e}</li>`)
        })
    })

});