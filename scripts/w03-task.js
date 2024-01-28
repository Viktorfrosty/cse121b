/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers( addNumber1, addNumber2) {
    var addNumber1 = Number(document.querySelector("#add1").value);
    var addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function( subtractNumber1, subtractNumber2) {
    var subtractNumber1 = Number(document.querySelector("#subtract1").value);
    var subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (multiplyNumber1, multiplyNumber2) => {
    var multiplyNumber1 = Number(document.querySelector("#factor1").value);
    var multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1,multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(dividend, divisor) {
    var dividend = Number(document.querySelector("#dividend").value);
    var divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend,divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    var subtotal = Number(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked) {
        var subtotal = subtotal - (subtotal * 0.2);
    }
    document.getElementById("total").textContent = `$ ${subtotal.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById("array");
arrayElement.innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map((number) => 2 * number);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map((number) => 2 * number).reduce((sum, number) => sum + number);