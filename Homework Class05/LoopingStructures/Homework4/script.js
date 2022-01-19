
// Homework 4

let firstName = ["Bob", "Tom", "Allison", "Steve"];
let lastName = ["Dylan", "Taylor", "Ford", "Jobs"];

let fullName = [];

function combineArrays(arr1, arr2){
  let  i = 0;
  let j = 0;
  let n1 = arr1.length;
  let n2 = arr2.length;

  while(i < n1 && j < n2){
    fullName.push(i+1 + "." + arr1[i] + " " + arr2[j]);
      i++, j++;
    }
  return fullName;
}

let arrFullName = combineArrays(firstName, lastName)
console.log(arrFullName);



