
// Bonus Homework


let nameOfRecipe = prompt("Please enter the name of the recipe");
let recipeName = document.getElementById("heading");
recipeName.innerHTML += `<h3> Recipe for ${nameOfRecipe} </h3>`;
console.log(recipeName.innerHTML);

let numberOfIngredients = parseInt(prompt("Please enter the number of ingredients"));

function listOfIngredients(ingredients, element){
    console.log(element);
        element.innerHTML = "";
        element.innerHTML += `<ul>`;
        let i = 0;
        while(i < numberOfIngredients){
            ingredients = prompt("Enter the necessary ingredients");
            i++;
            element.innerHTML += `<li> ${ingredients} </li>`;
        }
        element.innerHTML += `</ul>`;
}

let divElement = document.getElementById("ingredients");
listOfIngredients(ingredients, divElement);

let newElement = document.createElement("p");
console.log(newElement);

let text = document.createTextNode(`To make ${nameOfRecipe} you will need the following ingredients:`);

newElement.appendChild(text);

let element = document.getElementById("main");
element.insertBefore(newElement, element.firstChild);



// Recipe in a table (using the CSS file)


// function createTable() {
//   let myTableDiv = document.getElementById("myDynamicTable");
  
//     let table = document.createElement('table');
    
//     let tableBody = document.createElement('tbody');
//     table.appendChild(tableBody);

//     let nameOfRecipe = prompt("Please enter the name of the recipe");

//     let tr = document.createElement('tr');
//     tableBody.appendChild(tr);

//     let th = document.createElement('th');

//     th.appendChild(document.createTextNode(`Recipe: ${nameOfRecipe}`));
//     tr.appendChild(th);

//     let numberOfIngredients = parseInt(prompt("Please enter the number of ingredients"));

//     let i = 0;

//         while(i < numberOfIngredients){
//             let tr = document.createElement('tr');
//             tableBody.appendChild(tr);

//             let ingredients = prompt("Enter the necessary ingredients");
            
//             let td = document.createElement('td');
            
//               td.appendChild(document.createTextNode(`Ingredient ${i+1}: ${ingredients}`));
//               tr.appendChild(td);

//             i++;
//         }

//   myTableDiv.appendChild(table);

// }

// createTable();
