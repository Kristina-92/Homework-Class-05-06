
// Homework Part 1

let firstDiv = document.getElementById("first");
    console.log(firstDiv);

let firstCh = firstDiv.firstElementChild;
    console.log(firstCh);
    firstCh.innerText = "This page is really cool";

let paragraph = document.querySelector(".paragraph");
    console.log(paragraph.innerText)
    paragraph.innerText = "";
    paragraph.innerText = "This exercise is supposed to be easy.";
    console.log(paragraph.innerText);

let paragraphSecond = document.getElementsByClassName("second");
    console.log(paragraphSecond);
    secondParagraph = paragraphSecond[0];
    secondParagraph.innerText = "At first it looks easy, until you ty to change something.";

let textOne = document.getElementsByTagName("text");
let firstText = textOne[0];
    firstText.innerText += " changing their content.";

let lastDiv = document.getElementsByTagName("div");
    console.log(lastDiv[2].children);

let headingOne = lastDiv[2].firstElementChild;
    console.log(headingOne.innerText);
    headingOne.innerText = "New Heading";

let sibling = headingOne.nextElementSibling;
    console.log(sibling.innerText);
    sibling.innerText = "This is the new text";







