// const n1 = 1;
// const n2 = 2;

// const s1 = "1";
// const s2 = "2";

// n1 + n2;
// s1 + s2;

// n1 + s2;
// s1 + n2;

// console.log("n1 + n2", n1 + n2); // addition - numbers
// console.log("s1 + s2", s1 + s2); // concatenation - strings

// console.log("n1 + s2", n1 + s2); // concatenation - strings (converting num to str)
// console.log("s1 + n2", s1 + n2); // concatenation - strings (converting num to str)

// **Automatic Type Conversion (2.7)**
// console.log("ex1", "" + 1 + 0); // 10 -str
// console.log("ex2", "" - 1 + 0); // -1
// console.log("ex3", true + false); // true
// console.log("ex4", 6 / "3"); // 2
// console.log("ex5", "2" * "3"); // 6
// console.log("ex6", 4 + 5 + "px"); // 9px -str
// console.log("ex7", "$" + 4 + 5); // $45 - str
// console.log("ex8", "4" - 2); // 2
// console.log("ex9", "4px" - 2); // NaN
// console.log("ex10", 7 / 0); // Infinity
// console.log("ex11", " -9 " - 5); // -14
// console.log("ex12", null + 1); // 1
// console.log("ex13", undefined + 1); // NaN

// Test falsy and truthy

// const value = true;
// const value = false;
// const value = undefined;
// const value = 0;
// const value = "0";
// const value = "";
// const value = "true";
// const value = "false";
// const value = 2;
// const value = 2;
// const value = { };
// const value = [ ];
// const value = NaN;
// const value = Infinity;
// const value = 3.14;
// const value = " ";
const value = -0;

if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}
