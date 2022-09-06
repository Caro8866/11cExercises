"use strict";
/* 
const fullName = "Caroline ALbinusBjarnø Thostrup";

// First name
let firstName = fullName.substring(0, 8);
console.log(`My first name is ${firstName}`);

// Middle name
let middleName = fullName.substring(9, 22);
console.log(`My middle name is ${middleName}`);

// Last name
let lastName = fullName.substring(18, 22);
console.log(`My last name is ${lastName}`);

 */

// ! fullName( lastName, firstName [, middleName] )

function showFullName(lastName, firstName, middleName) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}
console.log(showFullName("Thostrup", "Caroline", "Albinus-Bjarnø"));
console.log(showFullName("Lind", "Peter"));
