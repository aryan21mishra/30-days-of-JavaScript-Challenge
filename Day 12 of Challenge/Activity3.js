// Activity 3 => Custom Error Object

//Task 4

class Custom_Error4 extends Error {
   constructor(message) {
      super(message)
      this.name = 'Divide By Zero'
   }
}

function divides(a, b) {
   if (b === 0) {
      throw new Custom_Error4("Can not divide by zero")
   }
   return a / b
}

try {
   console.log(divides(1, 0));
} catch (error) {
   console.log(error.name, ':', error.message);
}



//Task 5
class Custom_Error5 extends Error {
   constructor(message) {
      super(message)
      this.name = 'String Validation'
   }
}

function string_valid(name) {
   if (typeof name != 'string') {
      throw new Custom_Error5("Not a String")
   }
   return `${name} is a String`


}
try {
   console.log(string_valid(1));
} catch (error) {
   console.log(error.name, ':', error.message);
}

