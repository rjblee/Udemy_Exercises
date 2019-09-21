var todos = ["udemy", "clean room"];




while (input !== "quit") {
  var input = prompt ("What would you like to do?");

  if (input === "list") {
    console.log(todos);
  }

  if (input === "new") {
    todos.push(prompt ("Add a thing to do"));
  }

}