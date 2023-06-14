// The idea of breaking down the functinality into fewer parts
function printAllStars(n) {
  var str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  console.log(str);
}

function printInBetween(n) {
  var str = "*";
  for (let i = 0; i < n - 2; i++) {
    str += " ";
  }
  str += "*";
  console.log(str);
}

function printAll(n) {
  printAllStars(n);
  for (let i = 0; i < n - 2; i++) {
    printInBetween(n);
  }
  printAllStars(n);
}

printAll(5);
