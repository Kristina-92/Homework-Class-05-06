
// Task 7 Multiply by length

function multiply(array) {
    let i = 0;
    do {
        array[i] = array[i] * array.length;
        i++;
    } while (i < array.length);

    return array;
}

let arrayOne = [2,3,1,0];

resultOne = multiply(arrayOne);
console.log(resultOne);

let arrayTwo = [4, 1, 1];

resultTwo = multiply(arrayTwo);
console.log(resultTwo);

let arrayThree = [1, 0, 3, 3, 7, 2, 1];

resultThree = multiply(arrayThree);
console.log(resultThree);

let arrayFour = [0];

resultFour = multiply(arrayFour);
console.log(resultFour);

