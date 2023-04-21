var diceNumber1 = Math.random() * 6;
diceNumber1 = Math.floor(diceNumber1) + 1;

var randomImg1 = "images/dice" + diceNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

var diceNumber2 = Math.random() * 6;
diceNumber2 = Math.floor(diceNumber2) + 1;

var randomImg2 = "images/dice" + diceNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

if (diceNumber1 > diceNumber2) {
  document.querySelector("h1").innerText = "Player 1 win";
} else if (diceNumber1 < diceNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win";
} else if (diceNumber1 === diceNumber2) {
  document.querySelector("h1").innerText = "Draw";
}
