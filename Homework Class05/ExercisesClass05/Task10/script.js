
// Task 10: Odd Up, Even Down

function transform(array){
    let i;
    for (i = 0; i < array.length; i++){

        if (array[i] % 2 == 1){
            array[i]++;
        } else {
            array[i]--;
        }
    }
    return array;  
}

    let arrayToChange = [1, 2, 3, 4, 5];

    let result = transform(arrayToChange);
    console.log(result);

    let arrayToTransform = [3, 3, 4, 3]

    let resultOne = transform(arrayToTransform);
    console.log(resultOne);

    let arrayToUpdate = [2, 2, 0, 8, 10];

    let resultTwo = transform(arrayToUpdate);
    console.log(resultTwo);


     