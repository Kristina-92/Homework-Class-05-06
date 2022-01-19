
// Homework 2 Solution 1

function sumOf5Numbers(){
    let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
    return sum;
}

let numbers = [2, 5, 15, 65, 20];

console.log(numbers);

alert(`The sum of the array of numbers: ${numbers} is ${sumOf5Numbers(numbers)}`);



// Homework 2 Solution 2

function sumOf5Numbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
    sum = sum + numbers[i];
    }
    return sum;
}
    
    let arrNumbers = [2, 5, 15, 65, 20];
    console.log(arrNumbers);
    console.log(`The sum of the array of numbers: ${arrNumbers} is ${sumOf5Numbers(arrNumbers)}`);


// Homework 2 BONUS

function validateNumber(number) {
    if (typeof number === "number") {
        return true;
    } else {
        console.log("Error!");
        return false;
    }
}

function sumof5Numbers (array) {
    let sum = 0;
    for (let number of array) {
        if (validateNumber(number) === false){
            return;
        }else {
            sum += number;
        }
    }
    return sum;
}

let arrayOfNumbers = [52, 2, 10, 25, 5];
console.log(arrayOfNumbers);
let calculateSumOfNumbers = sumof5Numbers(arrayOfNumbers);
console.log(calculateSumOfNumbers);


