let sectionElement = document.getElementById("counter");

sectionElement.style.display = "flex";

let paragraphElement = document.body.firstElementChild;
let secondParagraphElement = document.getElementById("inputCounter");

secondParagraphElement.style.margin = "0";
secondParagraphElement.style.marginLeft = "10px";

function changeText() {
  paragraphElement.textContent = "Hello World!";
}

// let clickedParagraphElement = paragraphElement.addEventListener(
//   "click",
//   changeText
// );

let inputElement = document.querySelector("input");
let counter = 60;

// secondParagraphElement.textContent = `${charactersEntered}/${counter} characters entered.`;

function checkUserInput() {
  let enteredText = inputElement.value;
  let counter = 60;

  let charactersEntered = counter - enteredText.length;

  if (enteredText == "") {
    charactersEntered = 60;
  }
  secondParagraphElement.textContent = `${charactersEntered}/${counter}`;
}

inputElement.addEventListener("input", checkUserInput);
