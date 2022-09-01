"use strict";
// model
const model = ["Peter", "Paul", "Mary"];

// controller
addNameToModel("Caroline");
console.log(model);
function addNameToModel(name) {
  model.push(name);
}
