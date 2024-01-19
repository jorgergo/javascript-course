const suma = function (a, b) {
  // Function Expression
  return a + b;
};

console.log(suma(3, 4));

const resta = (a, b) => a - b; // Arrow Function (Function Expression)

console.log(resta(4, 3));

function division(a, b) {
  // Function Declaration
  return a / b;
}

// The difference between Function Declaration and Function Expression is that the first one can be called before it is declared, while the second one can't. This is because of the hoisting.
