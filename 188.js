var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");


p1Button.addEventListener("click", function() {
  p1Score++;
  p1Display.textContent = p1Score;
})

p2Button.addEventListener("click", function() {
  p2Score++;
  p2Display.textContent = p2Score;
})

resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
})