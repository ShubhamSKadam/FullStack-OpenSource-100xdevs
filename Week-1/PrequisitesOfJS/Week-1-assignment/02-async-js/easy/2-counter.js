var counter = 0;

for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    console.log(counter);
    counter++;
  }, 5000);
}
