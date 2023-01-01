//INVENTORY PAGE JS
//bringing json file information into the DOM
const invGrid = document.querySelector('.inventory-grid');
const requestURL = 'https://maryna-kryvoruchenko.github.io/bpa/car-info.json';
let searchBtn = document.querySelector('#topSearchBtn');
searchBtn.addEventListener('onclick', function(){
    fetch(requestURL)
    .then (function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        const carsObj = jsonObject['cars'];
        console.log(carsObj);
        searchBy(carsObj);
    });
})


fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const carsObj = jsonObject['cars'];
    carsObj.forEach(displayInvItem);
    console.log(carsObj);
});

function displayInvItem(car){
//   console.log(car);
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
    let inpMake = document.querySelector('#make').value;
    console.log(inpMake);
        var outMake = cars.filter(car=> car.make === inpMake);
        console.log(outMake);
   

    
    // var result = cars.filter(car=> car.color === "Blue");
}



// document.getElementById('topSearchBtn').addEventListener('click', searchBy);




// console.log(result);
// displayInvItem(cars);