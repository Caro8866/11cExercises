// *Adding a property

const person1 = {
  firstName: "Caroline",
  age: 22,
  student: true,
};

// console.log(person1); // ? Shows the same as after adding lastName as the latest version of object is always fetched

// console.log(person1.lastName); // ? Outputs: undefined, in terminal as the lastname is not defined

person1.lastName = "Thostrup";

// console.log(person1);

// console.log(person1.lastName); // ? Outputs: Thostrup. as it has been set

// * Removing a property
// 1st method // ! bad practice
person1.lastName = undefined;

// console.log(person1.lastName); // ? Outputs undefined
// console.log(person1.middleName); // ? Outputs undefined

// 2nd Method // ! Rarely done.
delete person1.lastName;
// console.log(person1.lastName); // ? Outputs undefined
// console.log(person1); // ? Outputs object without the lastname property

// * Let vs const
let person2 = {
  firstName: "Bella",
  age: 8,
  student: false,
};

person2.age++; // ? adds one year to age property

// console.log(person2);

// Const objects can still be changed and edited

person1 = person2; // ? Cannot change objects but can change properties within objects
