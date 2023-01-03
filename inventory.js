//INVENTORY PAGE JS
//bringing json file information into the DOM
const invGrid = document.querySelector('.inventory-grid');
const requestURL = 'https://maryna-kryvoruchenko.github.io/bpa/car-info.json';

fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const carsObj = jsonObject['cars'];
    carsObj.forEach(displayInvItem);
});

// when search button i clicked, json file is fetched and sent to the search function
let searchBtn = document.querySelector('#topSearchBtn');
searchBtn.addEventListener('click', function(){
    fetch(requestURL)
    .then (function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        const carsObj = jsonObject['cars'];
        searchBy(carsObj);
    });
});

let filterBtn = document.querySelector('#filterBtn');
filterBtn.addEventListener('click', function(){
    fetch(requestURL)
    .then (function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        const carsObj = jsonObject['cars'];
        filterBy(carsObj);
    });
});

function displayInvItem(car){
    // template for car display
    let template = `<section class="inv-item">
    <img class="inv-image" src="${car.image}" alt="${car.year} ${car.make} ${car.model}">
    <h4>${car.year} ${car.make} ${car.model}</h4>
    <ul class="details">
        <li>Color: ${car.color}</li>
        <li>${car.details}</li>
    </ul>
    <p class="prices">Purchase Price: ${car.buy} <span> Rental Price: ${car.rent}</span></p>
    </section>`
    document.querySelector('.inventory-grid').innerHTML += template;
}

function searchBy(cars){
    //clearing template for newly searched inventory items
    let template = '';
    document.querySelector('.inventory-grid').innerHTML = template;
    //getting user input 
    let inpMake = document.querySelector('#make').value.toLowerCase();
    let inpModel = document.querySelector('#model').value.toLowerCase();
    let inpColor = document.querySelector('#color').value.toLowerCase();
    let inpYear = document.querySelector('#year').value;
    let inpPrice = document.querySelector('#price').value;

    //filtering through json to find matches to the user input and setting to new array
    if (inpMake.length != 0 && inpModel.length == 0 && inpColor.length == 0){
        // let outputArray = cars.filter(car=> car.make.includes(inpMake));
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()));
        outputArray.forEach(displayInvItem);
    } else if (inpMake.length != 0 || inpModel.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) && new RegExp(inpModel).test(car.model.toLowerCase()));
        outputArray.forEach(displayInvItem);    
    } else if (inpMake.length != 0 || inpModel.length != 0 || inpColor.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) && new RegExp(inpModel).test(car.model.toLowerCase()) && new RegExp(inpColor).test(car.color.toLowerCase()));
        outputArray.forEach(displayInvItem);    
    }


    // displaying each item in array using the above function
    
}

function filterBy(cars){
    let template = '';
    document.querySelector('.inventory-grid').innerHTML = template;

    let filMake = document.querySelector('#fmake').value;
    let filterArray = cars.filter(car=> car.make.toLowerCase() === filMake);
    console.log(filMake);
    filterArray.forEach(displayInvItem);
}



// document.getElementById('topSearchBtn').addEventListener('click', searchBy);




// console.log(result);
// displayInvItem(cars);