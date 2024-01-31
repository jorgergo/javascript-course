'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(element => element[0]).join('');
  })
}

createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accu, curr) => accu + curr);
  labelBalance.textContent = `${acc.balance}€`;
}

const calcDisplaySummary = function (acc) {

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accu, curr) => accu + curr);
  labelSumIn.textContent = `${incomes}€`;

  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((accu, curr) => accu + curr);
  labelSumOut.textContent = `${Math.abs(expenses)}€`

  const interest = acc.movements
    .filter(deposit => deposit > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter(deposit => deposit >= 1)
    .reduce((accu, curr) => accu + curr);
  labelSumInterest.textContent = `${interest}€`
}

const updateUI = function (acc) {
  // Display and calculate the balance

  calcDisplayBalance(acc);

  // Calculate summary

  calcDisplaySummary(acc)

  // Display Movements

  displayMovements(acc.movements);
}


// LogIn Functionality

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear the input fields and lose focus on pin input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Update UI

    updateUI(currentAccount);
  }
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (Number(inputClosePin.value) === currentAccount.pin && inputCloseUsername.value === currentAccount.username) {
    const indexAcc = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete Account
    accounts.splice(indexAcc, 1);

    // Log out
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {

    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI

    updateUI(currentAccount);

    // Clear the input fields and lose focus on both inputs

    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
  }

})

let isSorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !isSorted)
  isSorted = !isSorted;
})



// const randomDiceRolls = Array.from({ length: 100 }, (element => Math.round(Math.random() * 100)))

// console.log(randomDiceRolls);



// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), mov => Number(mov.textContent.replace('€', '')));

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(mov => Number(mov.textContent.replace('€', '')));

//   console.log(movementsUI2);
// })


// ARRAY METHODS PRACTICE

// 1. 
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(bankDepositSum);

// 2.

// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000)
//   .length
// console.log(numDeposit1000);

// const numDepositOneThousand = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, curr) => curr >= 1000 ? ++acc : acc, 0)
// console.log(numDepositOneThousand);

// 3. 

// const [deposits, withdrawals] = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, curr) => {
//       // curr > 0 ? acc[0] += curr : acc[1] += curr;
//       acc[curr > 0 ? 0 : 1] += curr;
//       return acc
//     }, [0, 0])

// console.log(deposits, withdrawals);



// 4.



/*
// flat

const generalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr);
console.log(generalBalance);

// flatMap

const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);


// Sorting

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort())
console.log(owners); // The sort method also mutates the original array, so we have to be careful when we use it.

// Numbers
const movements = account1.movements;
console.log(movements);

console.log(movements.sort((a, b) => a - b));

*/
/*

// Flat method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8,];

console.log(arr.flat());


const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8,];

console.log(arrDeep.flat(2));

*/
/*
// Separate callback

const deposit = mov => mov > 0;

console.log(account4.movements.every(deposit));

*/
/*
// Some and Every


// SOME

const movements = account1.movements
console.log(movements);

// Equality
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130));

// Condition
console.log(movements.some(mov => mov > 2000));



// EVERY

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


*/
/*
// Take all the movement deposits, convert them from EUR to USD and add them all up.

const movements = account1.movements;

console.log(movements);
console.log(movements.find(mov => mov < 0));

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

// const accountfor = function (accounts) {
//   for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') {
//       return acc
//     }
//   }
// }
// console.log(accountfor(accounts));
*/
///////////////////////////////////////
// Coding Challenge #2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2:

GOOD LUCK 😀


const calcAverageHumanAge = dogAges =>
  dogAges
    .map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const maxValue = movements.reduce((acc, curr) => acc > curr ? acc : curr, movements[0])

console.log(maxValue);
*/
/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const deposits = movements.filter(mov => mov > 0);

const withdrawals = movements.filter(mov => mov < 0);

console.log(deposits);
console.log(withdrawals);

// Accumlator -> Snowball
console.log(movements);


// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Accumulator: ${acc} + Current: ${curr}`);
//   return acc + curr
// }, 0);

const balance = movements.reduce((acc, curr) => acc + curr, 0);


console.log(balance);

*/
/*
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];

for (const movement of movements) {
  movementsUSDfor.push(movement * eurToUsd);
}

// console.log(movementsUSDfor);


const movementsDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescriptions);

*/
// console.log(containerMovements.innerHTML);

///////////////////////////////////////
// Coding Challenge #1
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogs = dogsJulia.slice(1, -1).concat(dogsKate);
  dogs.forEach(function (dogAge, i) {
    dogAge >= 3 ? console.log((`Dog number ${i + 1} is an adult, and is ${dogAge} years old`)) : console.log((`Dog number ${i + 1} is still a puppy 🐶`));
  })
}

checkDogs(dogsJulia, dogsKate);

*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* 
/////////////////////////////////////////////////
                    SLICE METHOD
/////////////////////////////////////////////////
*/
/*
// Arrays are objects, and these array methods are simply functions that are attached to all arrays that we create on JavaScript. 

let arr = ['a', 'b', 'c', 'd', 'e'];


// You can define only the starting point and it will stop at the end of the array.
console.log(arr.slice(0)); // Output:  ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(2)); // Output: ['c', 'd', 'e']

// You can also specify where you want it to end the slice.
console.log(arr.slice(0, 5)); // Output: ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(0, 2)); // Output: ['a', 'b']

// In addition, you can start at the end of the array
console.log(arr.slice(-5)); // Output: ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(-2)); // Output: ['d', 'e']

// We can also use a negative index as the end parameter. This slices from the start point and excludes the last n elements you put on as negative index.

console.log(arr.slice(0, -1)) // Output: ['a', 'b', 'c', 'd'] all minus the last
console.log(arr.slice(3, -1))  // Output: ['d']  starts on d, and excludes the last value

// Finally, we can use the slice method to create a shallow copy of an array

let arrcopy = arr.slice()
console.log(arrcopy);
*/
/* 
/////////////////////////////////////////////////
                    SPLICE METHOD
/////////////////////////////////////////////////
*/
/*
// This method works almost the same as the slice method, but here, it 'steals' the values selected from the original array. So if we 'splice' an array, the original array will lose the values we selected with 'splice'

console.log(arr.splice(-1));

console.log(arrcopy.splice(1, 3)); //number of elements we want to delete from the original array is the second parameter

/*


/* 
/////////////////////////////////////////////////
                    REVERSE METHOD
/////////////////////////////////////////////////
*/
/*
console.log(`REVERSE\n-----------------`);

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // This method mutates the original array
console.log(arr2);

*/
/* 
/////////////////////////////////////////////////
                    CONCAT METHOD
/////////////////////////////////////////////////
*/
/*
const letters = arr.concat(arr2)

console.log(letters);

console.log([...arr, ...arr2]);

/* 
/////////////////////////////////////////////////
                    JOIN METHOD
/////////////////////////////////////////////////
*/
/*
console.log(letters.join('-'));

/* 
/////////////////////////////////////////////////
                    AT METHOD
/////////////////////////////////////////////////
*/
/*
arr = [23, 11, 64];
console.log(arr);

console.log(arr[0]);
console.log(arr.at(1));

// Getting last array method

console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // Cleanest method
console.log(arr.at(-2)); // Almost last
*/
/*

console.log('------ for of ------');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}

console.log('------ forEach ------');

movements.forEach(function (mov, i, array) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});


const weight = Number(prompt('Escribe tu peso:'));
const height = Number(prompt('Escribe tu altura:'));


const BMI = function (w, h) {
  return w / h ** 2;
}

console.log(`Your calculated BMI is: ${BMI(weight, height)}`);

BMI(weight, height)

// movements.forEach((mov, i, array) => {
//   if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });

*/