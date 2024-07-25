// Activity 2 => Finally Block

// Task 3


function divides(a, b) {
   if (b === 0) {
      throw new Error("Can not divide by zero")
   }
   return a / b
}

try {
   console.log(divides(1, 1));
} catch (error) {
   console.log("Error:", error.message);
} finally {
   console.log('Please do not apply denominator zero');
}