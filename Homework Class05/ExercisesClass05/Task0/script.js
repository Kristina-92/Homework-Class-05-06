
// Task 0

function createArray(num){
    let array = [];
    let start = 1;
        while (start <= num){
            array += start + " ";
            start ++;
        }
    return array;
}

console.log(createArray(5));
console.log(createArray(10));
console.log(createArray(-5));