let sectionElement = document.getElementById("counter");

let remainingCharElement = document.getElementById("remaining-chars");

let inputElement = document.querySelector("input");
let counter = 60;

function checkUserInput() {
  let enteredText = inputElement.value;

  let charactersEntered = counter - enteredText.length;
  remainingCharElement.textContent = `${charactersEntered}/${counter}`;
}

inputElement.addEventListener("input", checkUserInput);
