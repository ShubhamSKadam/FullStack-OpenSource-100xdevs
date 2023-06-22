var counter = 1;

function printCounter() {
  console.clear();
  counter += 1;
  console.log(counter);
}

setInterval(printCounter, 1000);
