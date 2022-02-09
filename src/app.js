import "bootstrap";
import "./style.css";

window.onload = function() {
  const RandomCard = () => {
    let number = Math.floor(Math.random() * 12) + 1;
    let suit = Math.floor(Math.random() * 4) + 1;
    let casesuit = "";
    let numero = document.getElementsByClassName("number")[0];

    switch (suit) {
      case 1:
        casesuit = "♥";
        break;
      case 2:
        casesuit = "♠";
        break;
      case 3:
        casesuit = "♦";
        break;
      case 4:
        casesuit = "♣";
        break;
    }
    switch (numero) {
      case 1:
        numero = "A";
        break;
      case 10:
        numero = "J";
        break;
      case 11:
        numero = "Q";
        break;
      case 12:
        numero = "K";
        break;
    }
    numero.innerHTML = number;

    let card = document.getElementsByClassName("card")[0];

    card.classList = `card ${casesuit}`;
  };
  RandomCard();
};
