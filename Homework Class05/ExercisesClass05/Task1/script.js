
// Task 1

let arr1 = [1, 2, 3];
let arr2 = [80, 5, 100];
let arr3 = [-500, 0, 50];

function getFirstValue (arrValue) {
    let i = 0;
    let shifted = arrValue.shift();
    return shifted;
}

console.log(`The first element from Array: [${arr1}] is ${getFirstValue(arr1)}`);
console.log(`The first element from Array: [${arr2}] is ${getFirstValue(arr2)}`);
console.log(`The first element from Array: [${arr3}] is ${getFirstValue(arr3)}`);