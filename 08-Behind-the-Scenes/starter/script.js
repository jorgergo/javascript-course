'use strict';

///////////////////////////////////////
// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

///////////////////////////////////////

// Hoisting and TDZ in Practice

// // VARIABLES

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jorge';
// // Expressions (Values enter the TDZ)
// let job = 'student';
// const year = 2002;

// // FUNCTIONS

// console.log(addDeclaration(2, 3));
// // console.log(addExpression(2, 3));
// // console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// // Expressions (Values enter the TDZ)

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // EXAMPLE

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

///////////////////////////////////////
// The this Keyword in Practice

// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// // calcAge(2002);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// // calcAgeArrow(2003);

// const jorge = {
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// jorge.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jorge.calcAge;

// matilda.calcAge();

// const f = jorge.calcAge;

// console.log(f);
// f();
