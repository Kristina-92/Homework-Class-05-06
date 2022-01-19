
// Homework 2 

  let  numbersList = "";
  let number = 1;

  while (number <= 20) {
      if (number % 2 === 0) {
        numbersList += `${number} \n`;
      } else {
        numbersList += `${number} `;
      }
      number++;
  }

    console.log(numbersList)

