console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let allBreeds = []; 
const dropdown = document.querySelector("#breed-dropdown") //has all the dog letter options 
const dogBreed = document.querySelector('#dog-breeds');
const allLis = document.querySelectorAll('li')

//Show all the dogs 
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((response) => response.json())
  .then(data => addImages(data))

function addImages(data){
  const container = document.querySelector("#dog-image-container")
  myLis = data["message"] 
  myLis.forEach((li) => {
    container.insertAdjacentHTML('beforeend', `<img src= ${li}></img>`)
  })
}

//Show all the breeds

fetch(breedUrl)
  .then((response) => response.json())
  .then(data => addBreeds(data))

function addBreeds(data){
  allBreeds = data["message"];

  for (let breed in allBreeds){
    dogBreed.insertAdjacentHTML('beforeend', `<li>${breed}</li>`)
  }
}

//Change the color upon click
const breedsContainer = document.querySelector("#dog-breeds")
  breedsContainer.addEventListener('click', (e) => {
    if(e.target.style.color === ''){
      e.target.style.color = 'purple'
    } else {
      e.target.style.color = ''
    }
  })

//Filter with a dropdown 
dropdown.addEventListener('change', ev => {
  //if dropdown value == something, then filter 
  //filter by breeds based on FIRST character of the breed AND the matching ev.target.value selection
  let filteredBreeds = []
  for (let breed in allBreeds) {
    if(breed[0] === ev.target.value){
      filteredBreeds.push(breed) 
    }
  }
  //clear the DOM
  dogBreed.innerHTML = ''; 
  //put the filtered breeds onto the DOM 
  filteredBreeds.forEach((breed) => {
    dogBreed.insertAdjacentHTML('beforeend', `
    <li>${breed}</li>
  `)
  })
});





