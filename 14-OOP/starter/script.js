'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function, each object will inherit the function and this will be bad for performance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. A NEW {} (empy object) is created
// 2. Function is called, and in this function call, the this keyword will be set to this newly created object (empty object)
// 3. This newly created object is linked to prototype
// 4. The object that was created in the begginnning returns the empty object {}. And now it no longer needs to be empty

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes

// Each and every function has a property called prototype, including construnctor functions. Each object created by the constructor function will get access to the properties and methods that we define on the constructor function's prototype property

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(Person.prototype);

console.log(jonas);

console.log(jonas.__proto__);
console.log(Person.__proto__);

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.__proto__ === Person.prototype);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.log(Person.__proto__);

const arr = [1, 2, 2, 4, 5, 5, 3];

console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // -> Not a good idea
// The next version of JS might add a different method with the same name. When you work on a team if multiple developers create different methods with the same name, it will create a lot of bugs.

const h1 = document.querySelector('h1');

console.dir(h1);

console.dir(x => x + 1);

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();

console.log(mike.__proto__.__proto__);

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first, it creates the this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new Student('Martha Jones', 2000);
const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');

martha.introduce();
martha.calcAge();

// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2002, 'Computer Science');

jay.introduce();

jay.calcAge();

class Account {
  // Public fields (A property that will be an all instances)
  locale = navigator.language;
  // Private Fields (Not accesible from the outside)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public Methods
  deposit(val) {
    this.#movements.push(val);
  }

  getMovements() {
    return this.#movements;
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
  // Private Methods
  #approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

acc1.requestLoan(30);
console.log(acc1);

console.log(acc1.getMovements());
