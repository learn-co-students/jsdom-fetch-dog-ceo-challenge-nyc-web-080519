console.log('%c HI', 'color: firebrick')
const container = document.querySelector("#dog-image-container")
const breeds = document.querySelector("#dog-breeds")
const dropdown = document.querySelector("#breed-dropdown")
let allBreeds
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function (response){
    return response.json()
}).then(function (data){
    data.message.forEach(function (img){
        container.insertAdjacentHTML("beforeend", `<img src="${img}"/>`)
    })
})
fetch('https://dog.ceo/api/breeds/list/all')
.then(function (response){
    return response.json()
}).then(function (data){
    allBreeds = Object.keys(data.message)
    allBreeds.forEach(function (breed){
        breeds.insertAdjacentHTML("beforeend", `<li data-id=${breed.charAt(0)}>"${breed}"</li>`)
    })
})
breeds.addEventListener("click", function (e){
    e.target.style.color = "red"
})
dropdown.addEventListener("change", function(e) {
    let filtered = allBreeds.filter(function (breed){
        return breed.charAt(0) === `${e.target.value}`
    })
    breeds.innerHTML = ""
    filtered.forEach(function (breed){
        breeds.insertAdjacentHTML("beforeend", `<li data-id=${breed.charAt(0)}>"${breed}"</li>`)
    })
})