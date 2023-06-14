function printSingleFullRow(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    str = str + "*";
  }
  console.log(str);
}

let n = 5;
for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {
    printSingleFullRow(n);
  } else {
    var newStr = "";
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n) {
        newStr += "*";
      } else {
        newStr += " ";
      }
    }
    console.log(newStr);
  }
}
