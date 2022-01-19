
// Task 2

let arr1 = [1, 2, 3, 4];
let arr2 = [9, 9, 2, 3, 4];
let arr3 = [];

function reverseArr(array){
    let reverse = [];
    for (let i = array.length - 1; i > -1; i--){
    reverse.push(array[i]);
    }
    return reverse;
}

console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));

