console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// add dog images
fetch(imgUrl)
    .then(function(response) {return response.json()})
    .then(function(object) {
        const dogContainer = document.querySelector("#dog-image-container")
        object.message.forEach(function(dogPic) {
            dogContainer.insertAdjacentHTML("beforeend", 
            `<img src="${dogPic}" width="200vw">`)
        })
    })

// add list of dog breeds
fetch(breedUrl)
    .then(function(response) {return response.json()})
    .then(function(object) {
        const breedList = document.querySelector("#dog-breeds")
        for (let breed in object.message) {
            if(object.message[breed].length) {
                object.message[breed].forEach(function(spcBreed){
                    breedList.insertAdjacentHTML("beforeend",
                    `<li data-clicked="false">${breed} - ${spcBreed}</li>`)
                })
            }
            else {
                breedList.insertAdjacentHTML("beforeend",
                `<li data-clicked="false">${breed}</li>`)
            }
        }
    })

// change color of dog breed text to red
document.addEventListener("click", function(event){
    if(event.target.dataset.clicked === "false"){
        event.target.dataset.clicked = "true"
        event.target.style.color = "red"
    }
})

// if the dropdown is changed, then filter breeds accordingly
function filterFunction() {
    const x = document.querySelector("#breed-dropdown").value 
    const lis = document.querySelectorAll("li")
    lis.forEach(function(li) {
        if(x !== "-- all breeds --"){
            li.style.display = ""
            if (li.innerText[0] !== x) {
                li.style.display = "none"
            }
        } else {
            li.style.display = ""
        }
    })
}