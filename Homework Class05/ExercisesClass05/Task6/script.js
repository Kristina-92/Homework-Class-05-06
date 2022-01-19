
// Task 6 

function arrayMin(arr) {
    let i = arr.length
    let min = Infinity;
    while (i--) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let i = arr.length;
    let max = -Infinity;
    while (i--) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function differenceBtwMinMax(arr) {
      let result = arrayMax(arr) - arrayMin(arr);
        return result;
  }

let array = [10, 4, 1, 4, -10, -50, 32, 21];

differenceMinMax = differenceBtwMinMax(array);
console.log(`Smallest number is ${arrayMin(array)}, biggest is ${arrayMax(array)} and difference between them is ${differenceMinMax}`)

let arraySecond = [44, 32, 86, 19];

differenceMinMax = differenceBtwMinMax(arraySecond);
console.log(`Smallest number is ${arrayMin(arraySecond)}, biggest is ${arrayMax(arraySecond)} and difference between them is ${differenceMinMax}`)

