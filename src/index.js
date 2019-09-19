console.log('%c HI', 'color: firebrick')

const breeds = []
document.addEventListener("DOMContentLoaded",function(){
    const breedlist = document.querySelector("#dog-breeds")
    const picslist = document.querySelector("#dog-image-container")
    fetch("https://dog.ceo/api/breeds/image/random/4").then(convertJson).then(displayImages)
    // fetch('https://dog.ceo/api/breeds/list/all').then(convertJson).then(console.log)
    fetch('https://dog.ceo/api/breeds/list/all').then(convertJson).then(addBreeds)
    const ddown = document.querySelector("#breed-dropdown")

    ddown.addEventListener("change", function(e){
        let a = myfilter(e.target.value)
        // console.log(displayfilteredbreeds(a))
        breedlist.innerHTML = ``
        displayfilteredbreeds(a)
        })
    
    
})

document.addEventListener("dblclick",function(e){
    const breedlist = document.querySelector("#dog-breeds")
    if(e.target.parentElement === breedlist){
        if(e.target.style.color === "orange"){
            e.target.style.color = ""
        } else {
            e.target.style.color = "orange"
        }
    }
})

function convertJson(data){
    console.log("converting")
    return data.json()
}
function displayImages(body){
    picslist = document.querySelector("#dog-image-container")
    console.log("displaying pics")
    body.message.forEach(function(img){
        picslist.insertAdjacentHTML("beforeend",`<img src="${img}">`)
    })
}

function addBreeds(body){
    breedlist = document.querySelector("#dog-breeds")
    console.log("displaying breeds")
    for (let breed in body.message) {
        breeds.push(breed)
        breedlist.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
    }
   
}

function myfilter(letter){
    const answer = []
    breeds.forEach(function(breed){
        if(breed[0] === letter){
            answer.push(breed)
        }
    })
    return answer 
}
function displayfilteredbreeds(array){
    array.forEach(function(breed) {
        console.log(array)
        console.log(breed)
        console.log(breedlist)
        breedlist.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
    })
}