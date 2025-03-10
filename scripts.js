var allDice = [
  "./dice1.png",
  "./dice2.png",
  "./dice3.png",
  "./dice4.png",
  "./dice5.png",
  "./dice6.png",
];
var outcome;

function shuffleDice(allDice) {
  outcome = Math.floor(Math.random() * allDice.length);
  return allDice[outcome];
}

shuffleDice;

document.querySelector(".img1").setAttribute("src", outcome);

document.querySelector(".img2").setAttribute("src", outcome);
