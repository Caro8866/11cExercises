"use strict";
// ? Set the background color to a random color

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return { r, g, b };
}

function rgbToCSS(rgb) {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function randomBackground() {
  // Create a variable that contains the return value from the random color function
  let randomColorValue = randomColor();

  // create a variable that contains the reutrn value from rgbToCSS
  let colorToCSS = rgbToCSS(randomColorValue);

  // use rgbToCSS return value as a valye for background color
  document.querySelector("body").style.backgroundColor = colorToCSS;
}

randomBackground();
