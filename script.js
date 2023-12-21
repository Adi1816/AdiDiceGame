var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector("#p1 img");
var img2 = document.querySelector("#p2 img");
var winner = document.querySelector("#win");
var area = document.querySelector(".circle");

if (number1 === 1) {
  img1.src = "dice1.png";
} else if (number1 === 2) {
  img1.src = "dice2.png";
} else if (number1 === 3) {
  img1.src = "dice3.png";
} else if (number1 === 4) {
  img1.src = "dice4.png";
} else if (number1 === 5) {
  img1.src = "dice5.png";
} else if (number1 === 6) {
  img1.src = "dice6.png";
}

if (number2 === 1) {
  img2.src = "dice1.png";
} else if (number2 === 2) {
  img2.src = "dice2.png";
} else if (number2 === 3) {
  img2.src = "dice3.png";
} else if (number2 === 4) {
  img2.src = "dice4.png";
} else if (number2 === 5) {
  img2.src = "dice5.png";
} else if (number2 === 6) {
  img2.src = "dice6.png";
}

if (number1 > number2) {
  winner.textContent = "PLAYER 1 WINS";
} else if (number1 < number2) {
  winner.textContent = "PLAYER 2 WINS";
} else {
  winner.textContent = "IT'S A TIE";
}

area.addEventListener("click", function() {
    // Reload the page
    location.reload();
});

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


