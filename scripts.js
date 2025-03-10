function randomise() {
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

  document.querySelector(".wins").classList.add("hidden");
  document.querySelector(".tie").classList.add("hidden");

  if (outcome1 > outcome2) {
    document.querySelector(".wins").classList.remove("hidden");
    document.querySelector(".wins").innerHTML = "PLAYER 1 WINS!";
  } else if (outcome1 < outcome2) {
    document.querySelector(".wins").classList.remove("hidden");
    document.querySelector(".wins").innerHTML = "PLAYER 2 WINS!";
  } else {
    document.querySelector(".tie").classList.remove("hidden");
  }

  document.querySelector(".img1").setAttribute("src", outcome1);
  document.querySelector(".img2").setAttribute("src", outcome2);

  // TIMEOUT
  setTimeout(function () {
    document.querySelector(".wins").classList.add("hidden");
    document.querySelector(".tie").classList.add("hidden");
  }, 1000);
}
