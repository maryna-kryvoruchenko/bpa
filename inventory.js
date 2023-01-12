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

function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
}

function displayInvItem(car){
    // template for car display
    let template = `<a href="#" class="car-link">
    <section class="inv-item">
    <img class="inv-image" src="${car.image}" alt="${car.year} ${car.make} ${car.model}">
    <h4>${car.year} ${car.make} ${car.model}</h4>
    <p class="prices">Purchase Price: $${car.buy} <br><span> Rental Price: $${car.rent} / day</span></p>
    <p>Color: ${car.color} <br> ${limit(car.details, 50)}...</p>
    <p class="more">Click to see more details</p>
    </section></a>`;
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
    // console.log(inpYear);
    //filtering through json to find matches to the user input and setting to new array
    // just make input
    if (inpMake.length != 0 && inpModel.length == 0 && inpColor.length == 0 && inpYear.length == 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()));

        outputArray.forEach(displayInvItem);
    } 
    //just model
    else if(inpModel.length != 0 && inpMake.length == 0 && inpColor.length == 0 && inpYear.length == 0){
        let outputArray = cars.filter(car=>new RegExp(inpModel).test(car.model.toLowerCase()));

        outputArray.forEach(displayInvItem);  
    }
    // just color
    else if (inpColor.length != 0 && inpModel.length == 0 && inpMake.length == 0 && inpYear.length == 0){
        let outputArray = cars.filter(car=>new RegExp(inpColor).test(car.color.toLowerCase()));

        outputArray.forEach(displayInvItem);
    }
    //just year
    else if(inpYear.length != 0 && inpMake.length == 0 && inpModel.length == 0 && inpColor.length == 0 ){
        let outputArray = cars.filter(car=>new RegExp(inpYear).test(car.year));

        outputArray.forEach(displayInvItem);
    }

    // make and model filled out
    else if (inpMake.length != 0 && inpModel.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) 
        && new RegExp(inpModel).test(car.model.toLowerCase()));

        outputArray.forEach(displayInvItem);  
    } 

    // make model and color filled out
    else if (inpMake.length != 0 && inpModel.length != 0 && inpColor.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) 
        && new RegExp(inpModel).test(car.model.toLowerCase()) 
        && new RegExp(inpColor).test(car.color.toLowerCase()));

        outputArray.forEach(displayInvItem);    
    } 
    // make model color and year filled out
    else if (inpMake.length != 0 && inpModel.length != 0 && inpColor.length != 0 && inpYear.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) 
        && new RegExp(inpModel).test(car.model.toLowerCase()) 
        && new RegExp(inpColor).test(car.color.toLowerCase()) 
        && new RegExp(inpYear).test(car.year));

        outputArray.forEach(displayInvItem);    
    } 

    // make and color
    else if(inpMake.length != 0 && inpColor.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) 
        && new RegExp(inpColor).test(car.color.toLowerCase()));

        outputArray.forEach(displayInvItem);   
    }
    // model and color 
    else if (inpModel.length != 0 && inpColor.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpModel).test(car.model.toLowerCase()) 
        && new RegExp(inpColor).test(car.color.toLowerCase()));

        outputArray.forEach(displayInvItem);    
    }
    // year and color
    else if (inpColor.length != 0 && inpYear.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpColor).test(car.color.toLowerCase()) 
        && new RegExp(inpYear).test(car.year));

        outputArray.forEach(displayInvItem);    
    } 
    
    // year and make
    else if (inpMake.length != 0 && inpYear.length != 0){
        let outputArray = cars.filter(car=> new RegExp(inpMake).test(car.make.toLowerCase()) 
        && new RegExp(inpYear).test(car.year));

        outputArray.forEach(displayInvItem); 
    }
    //year and model
    else if(inpModel.length != 0 && inpYear.length != 0 ){
        let outputArray = cars.filter(car=> new RegExp(inpModel).test(car.model.toLowerCase()) 
        && new RegExp(inpYear).test(car.year));

        outputArray.forEach(displayInvItem);
    }

    // no input just gives the whole inventory
    else if (inpMake.length == 0 && inpModel.length == 0 && inpColor.length == 0 && inpYear.length == 0){  
        cars.forEach(displayInvItem);
    }
    
}

function filterBy(cars){
    let template = '';
    document.querySelector('.inventory-grid').innerHTML = template;

    let filMake = document.querySelector('#fmake').value;
    let filterArray = cars.filter(car=> car.make.toLowerCase() === filMake);
    filterArray.forEach(displayInvItem);
    
}

