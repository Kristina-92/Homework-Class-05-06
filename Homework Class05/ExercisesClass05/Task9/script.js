
// Task 9: Generate a Countdown of Numbers in an Array

function countdown(number){
    let i = number;
    let array = [];
    while(i >= 0) {
        array.push(i);
        i--;
    }
    return array;
}

let countdownFive = countdown(5);
console.log(countdownFive);

let countdownOne = countdown(1);
console.log(countdownOne);

let countdownZero = countdown(0);
console.log(countdownZero);

let countdownTen = countdown(10);
console.log(countdownTen);


