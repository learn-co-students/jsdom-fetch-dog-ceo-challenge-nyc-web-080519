document.addEventListener("DOMContentLoaded", () =>{
  console.log('%c HI', 'color: firebrick')

  const dogBreedsContainer = document.getElementById("dog-breeds");
  const dogImageContainer = document.getElementById("dog-image-container");
  let dogBreedsArr = [];

  //challenge 1 dog images
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
      data.message.forEach(img => {
        dogImageContainer.insertAdjacentHTML('beforeend', `<img src=${img}>`)
      })
    });

  //challenge 2 breed
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => {
      for (let key in data.message) {
        //if key is an array, drill down again to get subbreeds
        dogBreedsArr.push(key)
        renderDogBreed(key)
      }
    });

  function renderDogBreed(breed) {
    dogBreedsContainer.insertAdjacentHTML('beforeend', `<li>${breed}</li>`)
  }
  
  dogBreedsContainer.addEventListener("click", e => {
    if (e.target.tagName === "LI") e.target.style.color = "magenta";
  })

  document.addEventListener("change", e => {
    dogBreedsContainer.innerHTML = ""
    let filteredBreeds = getAlphaBreeds(e.target.value)
    filteredBreeds.forEach(renderDogBreed)
  })

  function getAlphaBreeds(letter) {
    return dogBreedsArr.filter(breed => breed[0] === letter)
  }







})