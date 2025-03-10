window.onload = function () {
  var allDice = [
    "./dice1.png",
    "./dice2.png",
    "./dice3.png",
    "./dice4.png",
    "./dice5.png",
    "./dice6.png",
  ];

  var outcome1 = allDice[Math.floor(Math.random() * allDice.length)];
  var outcome2 = allDice[Math.floor(Math.random() * allDice.length)];

  document.querySelector(".img1").setAttribute("src", outcome1);
  document.querySelector(".img2").setAttribute("src", outcome2);
};
