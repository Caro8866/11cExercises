"use strict";
// model
const model = ["Peter", "Paul", "Mary"];
const h2Name = document.querySelector(".names");
const inputName = document.querySelector("#name");
// controller
addNameToModel("Caroline");
console.log(model);
function addNameToModel(name) {
  model.push(name);
}
