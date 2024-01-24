///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  const body = document.querySelector('body')

  header.style.color = 'red';
  body.addEventListener('click', () => header.style.color = 'blue')
})();

// The addEventListener() function receives a callback function that changes the color of the header. Here, even if the function is an IIFE, which means it returns immediatly, the addEventListener callback function continues to have acces to the variable header, which should't exist since the IIFE, has already returned and it's execution context doesn't exist anymore. However, it still accesses the variable header, and uses it to manipulate the DOM, because the CLOSURE of the callback function remembers all the variables in the variable environment where the callback function was created, in this case the IIFE's variable environment.