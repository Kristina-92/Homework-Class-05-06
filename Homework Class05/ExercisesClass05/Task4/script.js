
// Task 4

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 1, 2, 1, 1];
let array3 = [5, 5, 5, 6];
let array4 = [];

function checkForNumber(num, array) {
    let i = 0;
    let status = "false";
    while(i < array.length) {
        if(array[i] === num){
            status = "true";
        }
        i++;
    }
    return status;
}

isNumberPresent = (checkForNumber(3, array1));
console.log(isNumberPresent);

isNumberPresent1 = (checkForNumber(3, array2));
console.log(isNumberPresent1);

isNumberPresent2 = (checkForNumber(5, array3));
console.log(isNumberPresent2);

isNumberPresent3 = (checkForNumber(5, array4));
console.log(isNumberPresent3);