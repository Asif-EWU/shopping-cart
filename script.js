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
    })
}

// FUNCTION to handle unit increment/decrement
function changeUnit(increment, incrementValue) {
    for (let i = 0; i < increment.length; i++) {
        const incrementBtn = increment[i];
        incrementBtn.addEventListener('click', function(event) {
            const parentDiv = event.target.closest('div');
            const childInput = parentDiv.querySelector('input');
            const unit = parseInt(childInput.value) + incrementValue;
            if(unit) childInput.value = unit;
        })
    }
}

// event handler for unit increment/decrement
const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');
changeUnit(plus, 1);
changeUnit(minus, -1);