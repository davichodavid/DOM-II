// Your code goes here
/***********************  BUS IMAGE **************************************** */
const busPic = document.querySelector("header img");
busPic.addEventListener("click", event => {
  event.target.classList.toggle("bigSmallBus");
});

/***********************  INVERSE CONTENT **************************************** */
const inverseContent = document.querySelector("#inverse-content");
inverseContent.addEventListener("dblclick", event => {
  event.currentTarget.classList.toggle("inverse-content");
});

/***********************  FLIP CONTENT **************************************** */
const flipMap = document.querySelectorAll(".img-content")[0];

const keyIn = document.addEventListener("keypress", event => {
  flipMap.style.transform = "rotateY(180deg)";
  flipMap.style.transformStyle = "preserve-3d";
  flipMap.style.transition = "all 1.0s linear";
});

/***********************  H2 TEXT CONTENT **************************************** */

const headerH2 = document.querySelector("header h2");

headerH2.addEventListener("mouseover", event => {
  event.target.textContent = "Welcome To The Jungle";
});

/***********************  FlIPPED AGAIN TEXT CONTENT **************************************** */
const flipItAgain = document.querySelector("#secondImg");

const keyOut = document.addEventListener("scroll", event => {
  flipItAgain.style.transform = "rotateX(-360deg)";
  flipItAgain.style.transformStyle = "preserve-3d";
  flipItAgain.style.transition = "all 2.0s linear";
});

/*********************** CUT H2  **************************************** */
const reverseContent = document.querySelector("#inverse-content h2");

reverseContent.addEventListener("copy", event => {
  event.target.textContent = "Hey, are you taking something from my page?";
});