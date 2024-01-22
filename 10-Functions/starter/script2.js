const secureBooking = function () {  // This passenger count variable cannot be manipulated and accessed from the outside (scopes)
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

/*
Our code is first going to run on the global execution context, in there, we currently only have the secureBooking function, which means that the global scope now contains secureBooking.

  Global Execution
-------------------
  secureBooking()

When secureBooking is executed on line 10, a new execution context is created on top of the call stack, and since each execution context has a variable environment, the passengerCount is added to secureBooking's execution context.


  Global Execution          secureBooking  
-------------------       -----------------
  secureBooking()           passengerCount


In this case, the scope of the passengerCount variable is the function secureBooking. That scope, also has access to all the global scope variables, but not the other way around.

When the secureBooking function is called, a new function will be returned and stored on the booker variable. Now, the global execution context will also contain the booker variable.

  Global Execution          secureBooking  
-------------------       -----------------
  secureBooking()          passengerCount
  booker

Then, as the function returns, the secureBooking execution context is popped from the Call Stack. (Here is where the execution context, and the variable environment cease existing, including the variable passengerCount)

  Global Execution
-------------------  
  secureBooking()     
  booker
*/

booker(); // Returns 1 passengers
booker(); // Returns 2 passengers
booker(); // Returns 3 passengers

/*

As we call the function, we can see that the variable passengerCount is still being updated, even if it's execution context has ceased existing, which shouldn't be possible. This is where CLOSURES come in. 

CLOSURES not something we can create, they just exist and act in these kind of situation, JS does this completely automatically, and there is no way for a developer to access closed over variables from code, we can take look at them at the console using console.dir(function), but not reach into a closure and take variables from it. CLOSURES are just internal properties of functions.

A CLOSURE makes a function remember ALL the values that existed in the variable environment of the execution context in which that function was created or returned from. Even after that execution context is gone (the parent function has already returned). It keeps living somewhere in the engine. 

So, when we call booker(), it will try to increase the value of passengerCount, since the JS engine won't find it in booker's variable scope , it will instantly check if the variable is in the closure, even before checking if it is in an outer scope (scope chain). CLOSURE > SCOPE CHAIN



*/