var button = document.querySelector("button")
var isWhite = false

button.addEventListener("click", function(){
  
  // for(document.body.style.background === "white" || document.body.style.background === "pink"){
    if (isWhite) {
      document.body.style.background = "white";
    } else {
      document.body.style.background = "pink";
    }
    isWhite = !isWhite;
  // }

})