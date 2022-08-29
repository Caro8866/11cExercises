"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";

const total = name.length;

/* 
// Total number of characters, including spaces:
console.log(`The total number of characters is ${total}.`);

// 2nd character
const secondCharacter = name[2];
console.log(`The second character is ${secondCharacter}.`);

// 6th character
const sixthCharacter = name[6];
console.log(`The sixth character is ${sixthCharacter}.`);

// last d in Dumbledore - CHECK
const lastDCharacter = name[38];
console.log(`The last e in Dumbledore is ${lastDCharacter}.`);

// last e in Dumbledore - CHECK
const lastECharacter = name[38];
console.log(`The last e in Dumbledore is ${lastECharacter}.`);
*/

// First Name
const firstName = name.substring(0, 5);
console.log(`First name is: "${firstName}"`);

// Last Name
const lastName = name.substring(29);
console.log(`Last name is: "${lastName}"`);

// Second Middle Name
const secondMiddle = name.substring(15, 22);
console.log(`Second middle name is: "${secondMiddle}"`);

// Second Middle Name with a space
const secondMiddleSpace = name.substring(14, 22);
console.log(`Second middle name with a space is: "${secondMiddleSpace}"`);

// Ending of brian
const ian = name.substring(25, 28);
console.log(`Ending of brian is: "${ian}"`);

// Ending of Albus
const bus = name.substring(2, 5);
console.log(`Ending of Albus is: "${bus}"`);
/*


// Trims spaces before and after first and last characters
const str1 = "         There is           space here \n         ";
const str2 = str1.trim();

console.log(str2);


const fullName = "Caroline Albinus Bjarnø Thostrup ";
const firstName = fullName.substring(0, 8);
const lastName = fullName.substring(24);

console.log(`First name is: _${firstName}_`);
console.log(`Last name is: _${lastName}_`);

*/
