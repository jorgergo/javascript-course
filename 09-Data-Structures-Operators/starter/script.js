'use strict';
/*
///////////////////////////////////////
// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textString = document.querySelector('textarea').value;
  const arrayOfVariables = textString.toLowerCase().replaceAll(' ', '').split('\n');
  for (const [index, variable] of arrayOfVariables.entries()) {
    const [first, second] = variable.split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
})


// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(
//       `Here is your delicious ${mainIngredient} pizza, ${otherIngredients.length > 1
//         ? `with ${otherIngredients}`
//         : 'with no other ingredients'
//       }`
//     );
//   },
// };

// const message = 'Me gustaría ser un conductor de aviones o un conductor de autos de carreras';

// console.log(message.replaceAll('conductor', 'piloto'));

// console.log(`${'💻'.repeat(5)}`);


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct! 🎉'],
//   [false, 'Try again!'],
// ])

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// // Quiz app

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof (key) === 'number') console.log(`Answer ${key}: ${value} `);
// }

// const answer = 3;

// console.log(question.get(answer === question.get('correct')));



// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');

// console.log(rest.set(2, 'Lisbon Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// console.log(rest);
// rest.delete(2);
// console.log(rest);





// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ])

// console.log(ordersSet.size
// );

// console.log(ordersSet);

// console.log(ordersSet.has('Pizza'));

// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');

// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');

// console.log(ordersSet);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const element of menu) {
//   console.log(element);
// }

// for (const [index, element] of menu.entries()) {
//   console.log(`${index} : ${element}`);
// }

// // Rest Pattern and Parameters
// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // Functions

// const add = function (...numbers) {
//   // REST OPERATOR
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(add(5, 3, 5, 6));

// const x = [23, 5, 7];

// console.log(add(...x)); // SPREAD OPERATOR

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('ham');

// // SPREAD OPERATOR
// // It can be used on all iterables, including arrays, strings, and other data structures like sets, and maps. IT NOW ALSO SUPPORTS OBJECTS
// // It is used for building new arrays or to be passed to a function as multiple parameters

// // Used for copying arrays and merging two or more arrays together
// const arr = [3, 4, 5];
// const arrcopy = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(arrcopy);

// const arrcopy1 = [1, 2, ...arr]; // Takes all the values out of the array, it can only be used in places where we would otherwise write values separated by commas
// // console.log(...arr);
// // console.log(3, 4, 5);

// const [a, b, c] = arr; // Creates variables and stores each item in a variable
// // console.log(a, b, c);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // Main menu copy
// const menuCopy = [...restaurant.mainMenu];

// // Merging two arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(fullMenu);

// // Using it on strings
// const jorge = 'Jorge';
// const spreadJorge = [...jorge, ' ', 'G.'];
// // console.log(spreadJorge);

// const ingredients = [
//   'shrimp',
//   'cheese',
//   'ham',
//   // prompt("Let's make pasta!, Ingredient 1: "),
//   // prompt("Let's make pasta!, Ingredient 2: "),
//   // prompt("Let's make pasta!, Ingredient 3: "),
// ];

// restaurant.orderPasta(...ingredients);

// // Making a copy of an object and adding to it

// const newRestaurant = {
//   foundedIn: 1998,
//   founder: 'Giuseppe Salvatore',
//   ...restaurant,
// };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';

// console.log(restaurant);
// console.log(restaurantCopy);

///////////////////////////////////////////////////////
//                    ARRAYS                          //
///////////////////////////////////////////////////////

// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr; // Destructuring assignment, it destructs an array and each element on the left is an element of the array

// // console.log(a, b, c);
// // console.log(arr);
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories; //We can skip an element in the middle without creating new variables for each element of the array, the order matters, so skipping with a blank space is enough
// // console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary]; // reassigns the variables, the right side is creating an array with the actual values of the variables, then, the left side gets those values from the array, and reassigns them to the variables in the order specified.
// // const [pablo, juan] = [1, 3];
// // console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(1, 2);
// // console.log(starter, mainCourse);

// // Nested destructuring

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

///////////////////////////////////////////////////////
//                    OBJECTS                        //
///////////////////////////////////////////////////////

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // DEFAULT VALUES
// // Si no hay una propiedad en el objeto que se llame así, se puede especificar un valor por defecto para que la variable no quede como undefined.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // MUTATING VARIABLES

// let a = 111;
// let b = 999;

// const obj = { a: 1, b: 2, c: 3 };

// ({ a, b } = obj); // Para usar el destructing de objetos con variables que ya estaban definidas, tienes que poner entre paréntesis todo alv
// console.log(a, b);

// // NESTED OBJECTS
// const {
//   thu,
//   fri: { open, close },
//   sat,
// } = openingHours;
// console.log(thu, open, close, sat);
