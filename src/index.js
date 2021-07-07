console.log('%c HI', 'color: firebrick')

let allBreeds = document.querySelector('ul#dog-breeds')
let dogs;

//why do I need to declare it her and not in the second fetch
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(function(response) {
    let data = response.json()
    return data
})
.then(function(data) {
    let pictures = document.querySelector('#dog-image-container')
    data.message.forEach(function(element){
        pictures.insertAdjacentHTML('beforeend', `<img src=${element}>`)
    })
})

fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response){
    let data = response.json()
    return data
})
.then(function(data){
    dogs = data.message

    let breeds = data.message
    for(breed in breeds){
        allBreeds.insertAdjacentHTML('beforeend', `<li><span data-type='breed'>${breed}</span></li>`)      
    }
})

document.addEventListener('click', function(e){
    e.preventDefault()
   if( e.target.tagName === 'SPAN' && e.target.dataset.type === 'breed') {
       e.target.style.color = 'red'
    }
})

const dropDown = document.querySelector('select')

dropDown.addEventListener('change', function(e){
    let letter = e.target.value
    // fetch('https://dog.ceo/api/breeds/list/all')
    // .then(function(response){
    //     let data = response.json()
    //     return data
    // })
    // .then(function(data){
    //     let breeds = data.message
        allBreeds.innerHTML = ""
        if (letter === "Please Select A Letter"){
            for(breed in dogs){
                    allBreeds.insertAdjacentHTML('beforeend', `<li><span data-type='breed'>${breed}</span></li>`)      
                }
        }
        else {
            console.log(dogs)
            for(breed in dogs){
                if (breed[0] === letter){
                    allBreeds.insertAdjacentHTML('beforeend', `<li><span data-type='breed'>${breed}</span></li>`)      
                }
            }
        }

    // })
})

    // Instead of allDogs being from the DOM, get them from the fetch
 
        // instead of using innerText, you are going to use breed[0] or dog.breed[0]
        



//update the html with the new array of dogs
