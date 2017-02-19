var originalArray = [2, 7, 3, 5, 6];

function addTen(array) {
  var newArray = [];
  for (var i = 0; i < originalArray.length; i++) {
    newArray[i] = originalArray[i] + 10;
  }
  return newArray;
}

document.getElementById("original").innerHTML = originalArray;
document.getElementById("new").innerHTML = addTen(originalArray);
