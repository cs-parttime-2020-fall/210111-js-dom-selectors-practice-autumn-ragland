// console.log("21 01 11 JS DOM Selectors Practice");

// Select the assignment title from the dom 
let heading = document.querySelectorAll("h1")[0];
// output the text only to the console.
console.log(heading.innerText);

// Apply the class title to the assignment title
heading.setAttribute("class", "title");

// select container div
let container = document.querySelector(".container");
console.log(container);
// update text color
container.style.color = "#DBA159";

// select placeholder text
let displayUserValue = document.querySelector("#userValue");

// confirmed if user wanted to update placeholder
let updateText = confirm("Would you like to update the text?");
// if true
if(updateText){
    // prompt for new value
    let userValue = prompt("enter anything");
    // replace placeholder text
    displayUserValue.innerHTML = `<h1>${userValue}</h1>`;
}
