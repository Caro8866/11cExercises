"use strict";
// ! Return Value experiments
// Presentation - JavaScript 9 - functions and return values.pptx

// **? RETURN VALUES EXPERIMENT #1**

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const message = greeting("Caroline");
console.log("message 1: ", message); // outputs: 'message: Hello Caroline'

// **? RETURN VALUES EXPERIMENT #2**

// ? The function is just called: greeting("any name");
console.log("message 2:", greeting("Freddie"));

// ? The function is called in a console.log like so: console.log(greeting("any name")):
console.log("message 3:", greeting("Freddie"));

// ? The function is called without any parameter

// ? The function is called inside a template literal:const txt = `Greeting is ${greeting("a name")}`;

// ? The function is called "manually" from the console (where is the return-value?)
