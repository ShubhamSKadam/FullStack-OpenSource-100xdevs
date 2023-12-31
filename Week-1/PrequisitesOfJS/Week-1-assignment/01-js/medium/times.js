/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

// performance.now() is used to get the current time in miliseconds
function calculateTime(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
const startTime = performance.now();

calculateTime(10000000000);
const endTime = performance.now();

const duration = endTime - startTime;

console.log(duration / 1000);
