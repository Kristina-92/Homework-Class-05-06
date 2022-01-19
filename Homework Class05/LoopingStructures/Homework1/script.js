
// Homework 1

let array = ["Hello", "there", "students", "of", "SEDC", "!"];

function string(arr){
    for(let i = 0; i < arr.length; i++) {
        let text = arr.join(" ");
        return text;    
    }
}
 console.log(`"${string(array)}"`);