// let country = "Mexico";

// let continent = "America";

// let population = 125.7;

// console.log(country);

// console.log(continent);

// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'Yes!';

// console.log(typeof javascriptIsFun);

// let year;

// console.log(typeof year);

// let joder = null;

// console.log(joder);

// const bonito = 'muy sucio';
// const perro = `Joder el perro está ${bonito}`;

// console.log(perro);

// const language = 'Spanish';

// const country = 'Mexico';

// const continent = 'America';

// const population = 125.7;

// const halfPopulation = population / 2;

// console.log(population + 1);

// const finlandPopulation = 6;

// let mexicoHigher = population > finlandPopulation;

// console.log(mexicoHigher);

// const avgPopulation = 33;

// mexicoHigher = population > avgPopulation;

// console.log(mexicoHigher);

// const firstDescription =
//   country +
//   ' is in ' +
//   continent +
//   " and it's " +
//   population +
//   ' million people speak ' +
//   language;

// const description = `${country} is in ${continent} and it's ${population} million people speak ${language}`;

// console.log(firstDescription);
// console.log(description);

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving licence 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years!`);
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIJohn > BMIMark) {
//    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// } else {
//    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// }

const age = 30;
if (age !== 30) console.log("Pablo");

const day = 'saturday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else console.log('Not a valid day!');
