function computeLoan () {
    let amount = document.querySelector('#amount').value;
    let rate = document.querySelector('#rate').value;
    let months = document.querySelector('#months').value;
    console.log(amount);
    console.log(rate);
    console.log(months);

    let interest = (amount * (rate * .01)) / months;
    let total = ((amount/months) + interest).toFixed(2);
    console.log(interest);
    console.log(total)

    document.querySelector('#total').textContent = `$${total}`;
}

// Attribution: This validate() function was found on stackoverflow when searching for preventing negative inputs into form input field.
function validate(event) {
    if (event.key == "-") {
        event.preventDefault();
        return false;
      }
}

document.querySelector('#submit').addEventListener('click', computeLoan);