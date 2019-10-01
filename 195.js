var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton")
var hardButton = document.querySelector("#hardButton")

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  correct.textContent = "";
  resetButton.textContent = "New Colors";
  

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
})

easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  pickedColor = pickColor();
  colors = generateRandomColors(6);
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor){
      correct.textContent = "Correct";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again";
    } else {
      this.style.backgroundColor = "grey";
      correct.textContent = "Try Again";
    }
  })
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    //Get random color and push into arr
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  //Pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}