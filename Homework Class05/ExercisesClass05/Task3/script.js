
// Task 3
 
let array1 = [1, 2, 3, 4];
let array2 = [2, 4, 6, 8, 10];
let array3 = [1, 3, 5, 7, 9];

function findItem(item, arr) {
let result = -1;
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] === item){
            result = arr.indexOf(item);
            break;
        }
    }
return result; 
}

let finalResult1 = (findItem(3, array1))
console.log(finalResult1);

let finalResult2 = (findItem(8, array2))
console.log(finalResult2);

let finalResult3 = (findItem(11, array3))
console.log(finalResult3);


