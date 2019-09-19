document.addEventListener('DOMContentLoaded', function () {

const dogPicsapiURL = "https://dog.ceo/api/breeds/image/random/4"
const dogBreedsapiURL = "https://dog.ceo/api/breeds/list/all"

const dogsGoHere = document.querySelector("#dog-image-container")
const dogBreedsGoHere = document.querySelector("#dog-breeds")
const filterbutton = document.querySelector("#breed-dropdown")

let dogImagearray;
let dogBreedArray;

function parseAsJSON(data) {  return data.json()};

function renderDogImg(imgfile) {
  dogsGoHere.insertAdjacentHTML("beforeend", `<img src=${imgfile}></img>`)
}  // Ends renderDogImg()
function renderAllDogImgesInArr(arr) {
  arr.forEach( function(arr) { renderDogImg(arr)})
}

function buildAndAddDogBreedLI(breed) {
  dogBreedsGoHere.insertAdjacentHTML("beforeend", `<li>${breed}</li>`)
}
function buildAndAddALLBreedLIs(arr) {
  document.querySelectorAll("li").forEach(li => {li.remove()})
  arr.forEach( function(breed) { buildAndAddDogBreedLI(breed)})
}


function createsArrayOfBreeds(resp){
  dogBreedArray = []
  allKeysAndValues = Object.entries(resp.message)
  for ( arr of allKeysAndValues){ 
    // console.log(arr)
    if (arr[1].length == 0 ) {
      dogBreedArray.push(arr[0])
    } else {
      arr[1].forEach( function(breed){ 
        dogBreedArray.push(breed + " " + arr[0])
      }) // Ends forEach loop
    } // Ends if loop
  } // ends for...of loop
}  // Ends Creates Array of Breeds function

function filterAllLIs(allLIsarr, buttonValue) {
  filteredDogBreedArray = []
  for (let li of allLIsarr) {
    if (li.innerText.charAt(0).toLowerCase() === buttonValue.toLowerCase()) {
      filteredDogBreedArray.push(li.innerText)
    }  // ENDS if loop about the first letter
  } // ends FOR...OF loop on allLIsarr
  return filteredDogBreedArray
} // ends filteAllLIs()


//FETCH to add Dog Pictures
fetch(dogPicsapiURL)
  .then(parseAsJSON)
  .then( function(response) {
    dogImagearray = response.message;
    renderAllDogImgesInArr(dogImagearray) })     
    // console.dir(dogImagearray) })     

//FETCH to add dog breeds
fetch(dogBreedsapiURL)
  .then(parseAsJSON)
  .then( function (resp) { 
    createsArrayOfBreeds(resp)
    buildAndAddALLBreedLIs(dogBreedArray)
    return document.querySelectorAll("li")
  }) // Ends second THEN block
  .then( function (allLIs) { 
    // Event Listener for ONCLICK of LI
    allLIs.forEach(function(li) {
      li.addEventListener("click", function(event) {
        // event.preventDefault()
        console.dir(li)
        li.style.color = "red";
      })// ends ONCLICK of LI Event listener
    })  // end s forEACH loop
    return allLIs
  }) // ends third THEN block

  .then ( function (allLIs) {
    filterbutton.addEventListener("change", function(event) {
      if (event.target.value === "") {
        document.querySelectorAll("li").forEach(li => {li.remove()})
        for( let obj of allLIs) {
          dogBreedsGoHere.insertAdjacentElement("beforeend", obj)
        }// ends for...of loop
      }else{
      filteredDogBreedArray = filterAllLIs(allLIs, event.target.value)
      buildAndAddALLBreedLIs(filteredDogBreedArray)}
    } ) // ends Filter Button's CLICK listener
  }) // ends FOURTH THEN block

});  // Ends DOM Content Loaded event listener