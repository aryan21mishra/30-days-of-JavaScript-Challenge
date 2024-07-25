// Activity 1=> Basic Error Handling with try-Catch

// Task 1

function handling() {
   throw new Error('The Task 1 throw an error')
}
try {
   handling()
} catch (error) {
   console.log('Error:', error.message);
}

//Task 2

function divides(a, b) {
   if (b === 0) {
      throw new Error("Can not divide by zero")
   }
   return a / b
}

try {
   console.log(divides(1, 0));
} catch (error) {
   console.log("Error:", error.message);
}