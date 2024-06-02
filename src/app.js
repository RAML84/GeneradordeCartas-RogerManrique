import "bootstrap";
import "./style.css";

window.onload = () => {
  generateCard();
  document
    .querySelector("#generate-button")
    .addEventListener("click", generateCard);
};

function generateCard() {
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const topSymbolElement = document.getElementById("top-symbol");
  const numberElement = document.getElementById("number");
  const bottomSymbolElement = document.getElementById("bottom-symbol");

  topSymbolElement.textContent = randomSymbol;
  numberElement.textContent = randomNumber;
  bottomSymbolElement.textContent = randomSymbol;

  if (randomSymbol === "♦" || randomSymbol === "♥") {
    topSymbolElement.style.color = "red";
    numberElement.style.color = "red";
    bottomSymbolElement.style.color = "red";
  } else {
    topSymbolElement.style.color = "black";
    numberElement.style.color = "black";
    bottomSymbolElement.style.color = "black";
  }
}
