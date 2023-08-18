let sectionElement = document.getElementById("counter");

let remainingCharElement = document.getElementById("remaining-chars");

let inputElement = document.querySelector("input");
let maxAllowedChars = inputElement.maxLength;

function checkUserInput() {
  let enteredText = inputElement.value;

  let charactersEntered = maxAllowedChars - enteredText.length;
  remainingCharElement.textContent = `${charactersEntered}/${maxAllowedChars}`;
}

inputElement.addEventListener("input", checkUserInput);
