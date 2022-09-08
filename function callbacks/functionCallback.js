"use strict";
/*
function congreet(name) {
  console.log("Congrats " + name);
}
console.log("Wait for it...");
setTimeout(congreet, 10, "Fred");

//? ----------------------------------

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}
const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: true,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};
console.log("Is Person4 hired?", person4.hired);

hire(person4);

console.log("Is Person4 hired?", person4.hired);

fireOrHire(fire, person4);

console.log("Is Person4 hired?", person4.hired);

console.log("Is Person3 hired?", person3.hired);

fireOrHire(fire, person3);

console.log("Is Person3 hired?", person3.hired);
*/
//?---------------------------------------------------------------------

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParams(a, b, c) {
  console.log(`a(person): ${a}, b(index): ${b}, c(array): ${c}`);
}

people.forEach(testParams);
