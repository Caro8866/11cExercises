"use strict";
window.addEventListener("DOMContentLoaded", start); // calls start after everything is loaded

// *Variables*
const art1 = document.querySelector("#artwork1");
const art2 = document.querySelector("#artwork2");
const art3 = document.querySelector("#artwork3");
const art4 = document.querySelector("#artwork4");
const art5 = document.querySelector("#artwork5");
const art6 = document.querySelector("#artwork6");
const art7 = document.querySelector("#artwork7");
const art8 = document.querySelector("#artwork8");
const art9 = document.querySelector("#artwork9");

// *Start generating function*
function start() {
  // *Variables*s
  let i;

  // *Artwork 1*
  for (i = 100; i <= 300; i += 20) {
    // console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("box");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    art1.appendChild(copy);
  }

  // *Artwork 2*
  for (i = 0; i <= 90; i += 10) {
    // console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("box");
    copy.style.transform = `rotate(${i}deg)`;
    art2.appendChild(copy);
  }

  // *Artwork 3*
  for (i = 0; i <= 200; i += 10) {
    // console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("circle");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    art3.appendChild(copy);
  }

  // *Artwork 4*
  for (i = -90; i <= 90; i += 20) {
    // console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("box");
    copy.style.transform = `translate(${i}px, ${i}px)`;

    art4.appendChild(copy);
  }

  // *Artwork 5*
  for (i = 1; i <= 512; i *= 2) {
    // console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("circle");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    art5.appendChild(copy);
  }

  // *Artwork 6*
  for (i = -20; i <= 45; i += 5) {
    console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("circle");
    copy.style.transform = `translateX(${i - 50}px)`;
    copy.style.transform = `rotate(${i * 4}deg)`;
    art6.appendChild(copy);
  }

  // *Artwork 7*
  for (i = 0; i <= 200; i += 10) {
    console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("circle");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    copy.style.transform = `translateX(${i}px)`;
    copy.style.transform = `translateY(${-i / 2}px)`;
    art7.appendChild(copy);
  }

  // *Artwork 8*
  for (i = 50; i <= 200; i += 10) {
    console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("box");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    copy.style.transform = `translateX(${i / 2}px)`;
    copy.style.transform = `rotate(${i}deg)`;
    art8.appendChild(copy);
  }

  // *Artwork 9*
  for (i = 50; i <= 200; i += 30) {
    console.log(i);
    let copy;
    copy = document.createElement("div");
    copy.classList.add("circle");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    art9.appendChild(copy);
    copy = document.createElement("div");
    copy.classList.add("box");
    copy.style.width = i + "px";
    copy.style.height = i + "px";
    art9.appendChild(copy);
  }
}
