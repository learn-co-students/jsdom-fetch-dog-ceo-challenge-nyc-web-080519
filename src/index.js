document.addEventListener('DOMContentLoaded', function(e) {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const list = document.querySelector("#dog-breeds")
    const dropdown = document.querySelector("#breed-dropdown")

    list.addEventListener('click', function(e) {
        e.target.setAttribute("style", "color: green")
    })

    dropdown.addEventListener('change', function(e) {
        filterBreeds(e.target.value.toString())
    })

    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(addImages);

    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(addBreeds);

    function addImages(data) {
        data.message.forEach(function (image) {
            document.body.insertAdjacentHTML("beforeend", `<img src='${image}'>`)
        })
    }
    
    function addBreeds(data) {
        console.log(data)
        for (let key in data.message) {
            list.insertAdjacentHTML("beforeend", `<li>${key}</li>`)
        }
    }

    function filterBreeds(letter) {
        console.log(letter)
        for (let i = 0; i < list.children.length; i++) {
            console.log(`Looking at ${list.children[i].innerText}`)
            list.children[i].hidden = false
            console.log(`Now SHOWING ${list.children[i].innerText}`)
            if (list.children[i].innerText[0] !== letter) {
                list.children[i].hidden = true
                console.log(`Now HIDING ${list.children[i].innerText}`)
            }
        }
        // list.children.forEach(function (breed) {
        //     if (breed.innerText[0] !== letter) {
        //         breed.remove();
        //     }
        // })
    }
});


