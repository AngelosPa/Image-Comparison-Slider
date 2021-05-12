const slider = document.querySelector(".slider input");
const img = document.querySelector(".image-2");
console.log(img);

slider.oninput = () => {
  let slidervali = slider.value;

  img.style.opacity = slidervali + "%";
};
// use a promise in order to give 3 seconds to load the picture (or?..)
const checkPromise = new Promise((resolve, reject) => {
  let x = true;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry, it's not cool");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })

  .catch((err) => {
    console.log(`I am catch and ${err}`);
  });
console.log("Hi, I am Hadi");
// Promisify setTimeout

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let firstpic = document.querySelector(".image-1");
let secpic = document.querySelector(".image-2");
console.log(firstpic);
let ms = 3000;
function doSomething() {
  let text = document.querySelector("h3");
  text.innerHTML = ``;
  let wheel = document.querySelector("#tria");
  let inputball = document.querySelector(".input");
  inputball.classList.remove("input");

  wheel.remove("wheel");
  firstpic.classList.remove("ena");
  secpic.classList.remove("dyo");
}

delay(ms).then(doSomething);
