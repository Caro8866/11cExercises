/*

// Basic Arrays
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let someLetter = letters[4];
let anotherLetter = letters[7];

console.log("Some letter is ", someLetter);
console.log("Another letter is ", anotherLetter); 


// Ex 1
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(letters);
console.log(letters[4]);

let newArray = letters;
newArray[4] = "*";

console.log(letters);
console.log(letters[4]);
 
*Q1 - What is the difference between letters and newarr?*
Letters is the original array i created whereas newArray is the new array.

*Q2 - How does the entire letters array look before and after the change to newArray?*
The letters array contains what i wrote whereas the newArray now has a change at the 5th letter which now contains '*'.

*Q3 - Is it at all possible to change one of the arrays without changing the other?*

// *Array Methods*
const people = ["Harry", "Ron", "Hermione"];
let result;


result = people.push("Draco"); // .push - adds a new element to end of array

console.log(result); // displays amount of items in array
console.log(people); // displays full array + contents

// *Exercises*
result = people.pop(); // .pop removes last element in array
// console.log(result);
// console.log(people);

result = people.push("Neville"); // .push add a element called Neville to the array
// console.log(result);
// console.log(people);

result = people.push("Luna"); // .push add a element called Luna to the array
// console.log(result);
// console.log(people);

result = people.slice(0, 3); // .slice
// console.log(result);
// console.log(people);

people[1] = "Ginny";
// console.log(result);
// console.log(people);

result = people.push("Fred", "George");
result = people.indexOf("Fred");
// console.log(people);
// console.log(result);

result = people.splice(result, 1);
console.log(people);
console.log(result);
*/

const letters = Array.from("abcdefghijklmn");
console.log(letters);
