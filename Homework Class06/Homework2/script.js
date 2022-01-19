
// Homework 2

let numbers = [2, 5, 6, 12, 18];

function arrNumbers(numbers, element) {
        console.log(element);
        element.innerHTML = "";
        element.innerHTML += "<ul>";
        for (let i = 0; i < numbers.length; i++){
            element.innerHTML += `<li>${numbers[i]}</li>`;
        }
        element.innerHTML += "</ul>";
    }

    function sum() {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
        }
        return sum;
    }
    
    let sumOfNumbers = sum(numbers);

let newElement = document.createElement("h4");
let text = document.createTextNode("The array of numbers contains the following numbers:");

newElement.appendChild(text);

let div = document.getElementById("title");
div.insertBefore(newElement, div.firstChild);

let numbersDiv = document.getElementById("numbers");
arrNumbers(numbers, numbersDiv);

let sumOfNumbersDiv = document.getElementById("sum");
sumOfNumbersDiv.innerHTML += `<p> The sum of the numbers is: ${sumOfNumbers}</p>`;
console.log (sumOfNumbersDiv.innerHTML);

let equationDiv = document.getElementById("equation");
equationDiv.innerHTML += `<p> The sum of the array numbers is calculated using the following equation: ${numbers.join(' + ')} = ${sumOfNumbers}</p>`;
console.log(equationDiv.innerHTML);
