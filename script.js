// FUNCTION to set total price
function setTotalPrice() {
    let subtotal = 0;
    const price = document.getElementsByClassName('price');
    for (let i = 0; i < price.length; i++) {
        subtotal += parseInt(price[i].innerText);
    }

    const totalTax = Math.floor(subtotal * tax);
    const total = subtotal + totalTax;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById('total').innerText = total;
}

// set initial total price
const tax = 0.05;
setTotalPrice();

// set unitPrice array
let unitPrice = [];
const price = document.getElementsByClassName('price');
for (let i = 0; i < price.length; i++) {
    unitPrice[i] = parseFloat(price[i].innerText);    
}

// remove section
var removeSection = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeSection.length; i++) {
    const section = removeSection[i];
    section.addEventListener('click', function(event) {
        event.target.closest('.cart-item').remove();
        setTotalPrice();
    })
}

// FUNCTION to set item price
function setItemPrice(itemSerial, unit) {
    const price = document.getElementsByClassName('price')[itemSerial];
    const itemPrice = unitPrice[itemSerial] * unit;
    price.innerText = itemPrice;
}

// FUNCTION to handle unit increment/decrement
function changeUnit(increment, incrementValue) {
    for (let i = 0; i < increment.length; i++) {
        const incrementBtn = increment[i];
        incrementBtn.addEventListener('click', function(event) {
            const parentDiv = event.target.closest('div');
            const childInput = parentDiv.querySelector('input');
            const unit = parseInt(childInput.value) + incrementValue;
            if(unit) {
                childInput.value = unit;
                setItemPrice(i, unit);
                setTotalPrice();
            }
        })
    }
}

// event handler for unit increment/decrement
const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');
changeUnit(plus, 1);
changeUnit(minus, -1);