const colors = ['Green', 'Red', "rgba(133,122,200)", "#f15025"]

// get the elements from the document
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


// Create a function that will listen for a click and do a function
btn.addEventListener('click', function () {

 // set a random number whole number which is equal to the arrays length which is used in value randomNumber
 const randomNumber = Math.floor(Math.random() * colors.length)

 // change the background color of the body by setting it equal to colors[randomNumber] which means within the array go through a random number of 1-3 and put it into the style, then below also add it into the text content of the span.color element
 document.body.style.backgroundColor = colors[randomNumber]
 color.textContent = colors[randomNumber]
});