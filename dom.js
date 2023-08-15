let paragraphElement = document.body.firstElementChild;

function changeText() {
  paragraphElement.textContent = "Hello World!";
}

let clickedParagraphElement = paragraphElement.addEventListener(
  "click",
  changeText
);
