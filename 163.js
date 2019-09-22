function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i])
  }
};

printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);


console.log("----------------")


function isUniform(array) {
  for (var i = 1; i < array.length; i++) {

    if (array[i] !== array[0]) {
      return false;
    } 
  }
  return true;
}

isUniform([1, 1, 1, 1]);


console.log("----------------")


function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  };

  console.log(sum);
}


// function sumArray(array) {
//   var sum = 0;
//   array.forEach(function(item) {
//     sum += item;
//   });

//   console.log(sum);
// }
sumArray([1, 2, 3, 5]);


console.log("----------------")


function max(array) {
  var maximum = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  console.log(maximum);
}

max([1,2,4,3,5]);