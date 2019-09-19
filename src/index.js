// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    addDogPictures()
    addBreed()
    changeTextColor()
    filter()
})

const breeds = []
const filter = function(){
    const filter = document.querySelector("#breed-dropdown")
    filter.addEventListener("change", function (event) {
        const breedUl = document.querySelector('#dog-breeds')
        breedUl.innerHTML = ""
        const option = event.target.value;
        breeds.forEach(function (ele) {
            const name = ele;
            if (name[0] === option) {
                let li = document.createElement('li');
                li.innerText = name;
                breedUl.append(li)
            }
        })
    })
}

function changeTextColor(){
    const breedUl = document.querySelector('#dog-breeds')
    breedUl.addEventListener("click", function () {
        // console.log("this ul container has been clicked!")
        const list = event.target
        list.addEventListener("click", function () {
            if (list.style.color === "") {
                list.style.color = "orange"
            } else if (list.style.color === "orange") {
                list.style.color = ""
            }
        })
    })
}

function addDogPictures(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    
    fetch(imgUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (resp) {
        const imageContainer = document.querySelector('#dog-image-container')
        resp.message.forEach(function (ele) {
            let image = document.createElement('img')
            image.src = ele
            imageContainer.append(image)
        })
    })
}

function addBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (resp) {
        const breedUl = document.querySelector('#dog-breeds')
        let test = resp.message
        for (let ele in test) {
            let li = document.createElement('li');
            li.innerText = ele;
            breeds.push(ele)
            // li.id = ele;
            breedUl.append(li)
        }
    })
}

// const filter = document.querySelector("#breed-dropdown")
// filter.addEventListener("change", function(event){
//     const breedUl = document.querySelector('#dog-breeds')
//     breedUl.innerHTML = ""
//     const option = event.target.value;
//     breeds.forEach(function(ele){
//         const name = ele;
//         if(name[0] === option){
//             let li = document.createElement('li');
//             li.innerText = name;
//             breedUl.append(li)
//         }
//     })
// })