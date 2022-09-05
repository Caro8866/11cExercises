"use strict";

const person1 = {
  firstName: "Caroline",
  age: 22,
  student: true,
};
const person2 = person1;
person2.firstName = "other Caroline";
console.log(person1.firstName); // ? Outputs other Caroline

// ----------------------------------------------------------
