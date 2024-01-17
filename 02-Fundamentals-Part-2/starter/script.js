'use srict';

// ----------------------------------------------

// let hasDriversLicense = false;

// const passTest = false;

// if (passTest) hasDriversLicense = true;

// hasDriversLicense
//   ? console.log('I can drive!🚗')
//   : console.log("I can't drive 🥺");

// ----------------------------------------------

// function logger() {
//   console.log('My name is Jonas');
// }

// // calling  /  running / invoking function
// logger();
// logger();
// logger();

// ----------------------------------------------

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ----------------------------------------------
// Function declaration

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(2002);

// // Function expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(2002);

// // LOG
// console.log(age1, age2);

// ----------------------------------------------

// Arrow function

// const calcAge3 = (birthYear) => 2023 - birthYear;

// const yearsUntilRetirement1 = function (birthYear) {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2002, 'Jorge'));
// ----------------------------------------------

// function fruitSlicer(fruit) {
//   return fruit * 8;
// }

// function fruitProcessor(apples, oranges) {
//   const appleSlices = fruitSlicer(apples);
//   const orangeSlices = fruitSlicer(oranges);
//   const juice = `Juice with ${appleSlices} apple slices and ${orangeSlices} orange slices`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// ----------------------------------------------

// const calcAge = function (birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2002, 'Jorge'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//  ----------------------------------------------------------

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// const calcAverage = (firstScore, secondScore, thirdScore) =>
//   (firstScore + secondScore + thirdScore) / 3;

// const scoreDolphins = calcAverage(44, 23, 71); // 46
// const scoreKoalas = calcAverage(65, 54, 49); // 56

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
//   } else console.log(`No team wins..`);
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
//  ----------------------------------------------------------

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'; //  Funciona porque no lo redefine, lo modifica

// console.log(friends);

// // friends = ['Bob', 'Alice']; No funciona porque lo redefine y es const

// const firstName = 'Jorge';
// const jorge = [firstName, 'González', 2023 - 2002, 'Student', friends];

// console.log(jorge);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//  ----------------------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter'];

// // ADD ELEMENTS
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // REMOVE ELEMENTS
// friends.pop(); //REMOVE LAST
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //REMOVE FIRST
// console.log(friends);

// //  LOOKS FOR AN INDEX OR IF THE VALUE EXISTS IN THE ARRAY
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// friends.push('23');
// console.log(friends.includes(23));

//  ----------------------------------------------------------

// const jorgeArray = [
//   'Jorge',
//   'Gonzalez',
//   2023 - 2002,
//   'student',
//   ['Michael', 'Peter', 'Steven'],
// ];

// const jorge = {
//   firstName: 'Jorge',
//   lastName: 'Gonzalez',
//   age: 2023 - 2002,
//   job: 'Student',
//   friends: ['Michael', 'Peter', 'Steven'],
// };

// console.log(jorge);

// console.log(jorge.lastName); // DOT Notation
// console.log(jorge['lastName']); // BRACKET Notation

// const nameKey = 'Name';

// console.log(jorge['first' + nameKey]); // BRACKET Notation (You can use expressions inside the brackets)
// console.log(jorge['last' + nameKey]); // BRACKET Notation

// const interestedIn = prompt(
//   'What do you want to know about Jorge? Choose between firstName, lastName, age, job and friends'
// );

// console.log(
//   jorge[interestedIn]
//     ? jorge[interestedIn]
//     : 'Not an option, Choose between firstName, lastName, age, job and friends'
// );

// console.log(
//   `${jorge.firstName} has ${jorge.friends.length} friends, and his best friend is called ${jorge.friends[0]}`
// );

//  ----------------------------------------------------------

// const jorge = {
//   firstName: 'Jorge',
//   lastName: 'Gonzalez',
//   birthYear: 2002,
//   job: 'Student',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2023 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     return this.summary;
//   },
// };

// // console.log(jorge.calcAge());
// // console.log(jorge['calcAge']());

// // console.log(jorge.age);
// // console.log(jorge['age']);

// console.log(jorge.getSummary());

//  ----------------------------------------------------------

// // FOR LOOP

// // for loop keeps running while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   // console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// const jorgeArray = [
//   'Jorge',
//   'Gonzalez',
//   2023 - 2002,
//   'student',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// const typesArray = [];

// for (let i = 0; i < jorgeArray.length; i++) {
//   console.log(jorgeArray[i], typeof jorgeArray[i]);
//   // typesArray[i] = typeof jorgeArray[i];
//   typesArray.push(typeof jorgeArray[i]);
// }

// console.log(typesArray);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// // continue and break

// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jorgeArray.length; i++) {
//   if (typeof jorgeArray[i] !== 'string') continue;
//   console.log(jorgeArray[i], typeof jorgeArray[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jorgeArray.length; i++) {
//   if (typeof jorgeArray[i] === 'number') break;
//   console.log(jorgeArray[i], typeof jorgeArray[i]);
// }

//  ----------------------------------------------------------

// LOOPING BACKWARDS AND LOOPS IN LOOPS

// const jorgeArray = [
//   'Jorge',
//   'Gonzalez',
//   2023 - 2002,
//   'student',
//   ['Michael', 'Peter', 'Steven'],
// ];

// const typesArray = [];

// for (let i = jorgeArray.length - 1; i >= 0; i--) {
//   console.log(i, jorgeArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercise ${exercise} -----`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//   }
// }

//  ----------------------------------------------------------

// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep} 🏋️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

//  ----------------------------------------------------------

// CODING CHALLENGE #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
