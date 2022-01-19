
//  Homework 3

let array = [3, 5, 25, 8, 11];
let max = array[0]; 
let min = array[0];

for (let i = 0; i <= array.length-1; i++) {
    if (array[i] > max) {
    max = array[i]; 
    }
    if (array[i] < min) {
    min = array[i];
    }
}

function sumOfMinMax(){
    let result = min + max;
        return result;
    }

let newString = (`Max: ${max}, Min: ${min}, Sum: ${sumOfMinMax()}`);
console.log(newString);
