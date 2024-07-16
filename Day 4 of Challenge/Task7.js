// Task 7=> print the * patern using nested loop

for (let i = 1; i <= 5; i++) {
   let patern = ''
   for (let j = 1; j <= i; j++) {
      patern += '*'
   }
   console.log(patern);
}