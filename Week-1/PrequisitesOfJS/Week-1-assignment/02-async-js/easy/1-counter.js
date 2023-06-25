// Create a counter in JavaScript

// Version 1 : Counter without stop
function counterWithoutStop() {
  let count = 0;
  console.log(count);
  setInterval(() => {
    console.clear();
    count++;
    console.log(count);
  }, 1000);
}

// Version 2 : Counter with stop when a key is pressed
function counterWithStop() {
  let count = 0;
  console.log(count);

  const interval = setInterval(updateSrn, 1000);

  function updateSrn() {
    console.clear();
    count++;
    console.log(count);
  }

  document.addEventListener("keydown", function (event) {
    clearInterval(interval);
  });
}

// Counter without setInterval

function counterWithoutSetInterval() {
  let count = 0;

  function updateSrn() {
    console.clear();
    count++;
    console.log(count);
    setTimeout(updateSrn, 1000);
  }

  updateSrn();
}

counterWithoutSetInterval();
