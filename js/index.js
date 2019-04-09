// Your code goes here
/***********************  BUS IMAGE **************************************** */
const busPic = document.querySelector("header img");
busPic.addEventListener("click", event => {
  event.target.classList.toggle("bigSmallBus");
});

/***********************  MAP IMAGE **************************************** */
const inverseContent = document.querySelector("#inverse-content");
inverseContent.addEventListener("dblclick", event => {
  event.currentTarget.classList.toggle("inverse-content");
  console.log(event.target);
});