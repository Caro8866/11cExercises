"Use strict";
/* // ! Functions (2.15)

// ? Basics
// Delcaring a function
function myFunc() {
  // code goes here
}
myFunc(); // Calling a function

myFunc; // Function reference ( as in event listeners)

// ? Function parameters

function myFunc(parm1, parm2) {
  // code uses parm1 and parm2
}

// ? Using parameters #1

alert("Do not use alerts for user info!"); // string parameter to alert:

console.log("Javascript is running"); // String parameter to console.log

const msg = "Javascript is running"; // Another way to do string parameter to console.log
console.log(msg);

// ? Using parameters #2
// Finding first name in a full name
const firstSpace = fullname.indexOf(" ");
const firstName = fullname.substring(0, firstSpace);
// or
const firstname = fullname.substring(0, fullname.indexOf(" "));

// ? Using parameters #3
window.addEventListener("DOMContentLoaded", start);
// DOMContentLoaded = string
// start = refernece to function
 */
// !-----------EXERCISES-----------!
// ? Exercises 1a
firstName = "peter";
function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName}`);
}

sayHello("Caroline");

// ? Exercises 1b

// 1. Same output is outputted
// 2. myName has not been defined
// 3. the name inside the sayHello("") is said not the peter
// 4. Only hello is outputted
// 5. only the first name is said as function has not been edited

// ? 2a

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}.`);
}
presentPet("Caroline", "Dog", "Bella");

presentPet(firstName, animalType, animalName); // does not work as variables have not been definied
