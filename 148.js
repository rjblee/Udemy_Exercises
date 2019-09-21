// T/F if a number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false
};

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


// Factorial calculator

function factorial(x) {
  var result = 1;
  if (x !== 0) {
    for (var i = x; i >= 1; i--) {
      result = result * (i);
    }
    return result;
  } else {
    return 1
  }
}

console.log(factorial(3));


// Turns a kebab string to a snake string

function kebabToSnake(word){

  var newWord = word.replace(/-/g, "_")
  return newWord;
};

console.log(kebabToSnake("h-e-l-l-o"))