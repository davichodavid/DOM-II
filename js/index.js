// Your code goes here
const busPic = document.querySelector("header img");
busPic.addEventListener("click", event => {
  event.target.classList.toggle("bigSmallBus");
});

const inverseContent = document.querySelector("#inverse-content");
inverseContent.addEventListener("dblclick", event => {
  event.currentTarget.classList.toggle("inverse-content");
});

const flipMap = document.querySelectorAll(".img-content")[0];

const keyIn = document.addEventListener("keypress", event => {
  flipMap.style.transform = "rotateY(180deg)";
  flipMap.style.transformStyle = "preserve-3d";
  flipMap.style.transition = "all 1.0s linear";
});


const headerH2 = document.querySelector("header h2");

headerH2.addEventListener("mouseover", event => {
  event.target.textContent = "Welcome To The Jungle";
});

const flipItAgain = document.querySelector("#secondImg");

const keyOut = document.addEventListener("scroll", event => {
  flipItAgain.style.transform = "rotateX(-360deg)";
  flipItAgain.style.transformStyle = "preserve-3d";
  flipItAgain.style.transition = "all 2.0s linear";
});

const reverseContent = document.querySelector("#inverse-content h2");

reverseContent.addEventListener("copy", event => {
  event.target.textContent = "Hey, are you taking something from my page?";
});

const contentDestination = document.querySelector(".content-destination");

contentDestination.addEventListener("paste", event => {
  event.target.textContent = "Hey, are you trying to paste something?";
});

const funInTheSun = document.querySelector(".destination h4");

funInTheSun.addEventListener("drag", event => {
  event.target.textContent = "Hey, are you trying to drag something?";
});

const funInTheSunButt = document.querySelector(".destination .btn");

funInTheSunButt.addEventListener("click", event => {
  event.target.style.color = "pink";
});

const logo = document.querySelector(".logo-heading");

logo.addEventListener("click", event => {
  event.currentTarget.style.fontSize = "400px";
});