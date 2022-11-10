//INVENTORY PAGE JS
//bringing json file information into the DOM
const invGrid = document.querySelector('.inventory-grid');

function displayInvItem(cars){
  console.log('made it to the function')
  console.log(cars);
  document.querySelector('.inventory-grid').innerHTML = `<section class="inv-item">
  <img class="inv-image" src="${cars.image}" alt="${cars.year} ${cars.make} ${cars.model}">
  <h4>${cars.year} ${cars.make} ${cars.model}</h4>
  <ul class="details">
    <li>Color: ${cars.color}</li>
    <li>${cars.details}</li>
  </ul>
  <p class="prices">Purchase Price: ${cars.buy} <span> Rental Price: ${cars.rent}</span></p>
  </section>`;

}

displayInvItem();

fetch('car-info.json')
.then(function(jsonObject){
  const car = jsonObject['cars'];
  car.forEach(displayInvItem);
})