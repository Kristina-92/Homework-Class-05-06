
// Task 7

function canClearHurdles(array, jumpHeight) {
    let clearAllHurdles = false;
    let max = array[0];

    while (array.length == 0){
        return clearAllHurdles = true;
    }

    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    for (let i = 0; i < array.length; i++){
        if (jumpHeight >= max){
            clearAllHurdles = true;
        }
    }       
    return clearAllHurdles;
}

    let hurdleJump = [1, 2, 3, 4, 5];
    let hurdleJump1 = [1, 2, 3, 4, 5];
    let hurdleJump2 = [5, 5, 3, 4, 5];
    let hurdleJump3 = [1, 4, 1];
    let hurdleJump4 = [];

    
    let result = (canClearHurdles (hurdleJump, 5));
    console.log(result);

    let result1 = (canClearHurdles (hurdleJump1, 3));
    console.log(result1);

    let result2 = (canClearHurdles (hurdleJump2, 10));
    console.log(result2);

    let result3 = (canClearHurdles (hurdleJump3, 1));
    console.log(result3);
    
    let result4 = (canClearHurdles (hurdleJump4, 5));
    console.log(result4);
   
    
   
    