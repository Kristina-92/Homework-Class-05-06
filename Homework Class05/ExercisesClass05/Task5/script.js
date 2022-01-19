
// Task 5

let arrayNative = [1, 2, 3, 4];
let arrayNative1 = [-1, 2, -3, 4];
let arrayNative2 = [];

function negateArray (array) {
    let negativeArray = [];
        for (i = 0; i < array.length; i++) {
            let oppositeNumber = array [i] * -1;
            negativeArray.push(oppositeNumber); 
        }
    return negativeArray;
}

console.log(negateArray (arrayNative));
console.log(negateArray (arrayNative1));
console.log(negateArray (arrayNative2));



