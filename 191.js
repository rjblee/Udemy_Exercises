var lists = document.querySelectorAll("li");

for (var i = 0; i < lists.length; i++){
  lists[i].addEventListener("mouseover", function(){
    this.style.color = "blue";
  });

  lists[i].addEventListener("click", function(){
    this.classList.toggle("checkOnOff");
  })

  lists[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
};