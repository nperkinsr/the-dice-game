var allDice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var outcome1 = allDice[Math.floor(Math.random() * allDice.length)];
var outcome2 = allDice[Math.floor(Math.random() * allDice.length)];

document.querySelector(".img1").setAttribute("src", outcome1);
document.querySelector(".img2").setAttribute("src", outcome2);
