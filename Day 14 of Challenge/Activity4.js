// Activity 4 => Gatter and Setter

// Task 7

class Person {
   firstName = 'Aryan'
   lastName = 'Sharma'
   getFullName() {
      console.log("Full Name:", this.firstName, this.lastName);
   }
   setFullName(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
   }
}
const obj = new Person()
obj.getFullName()

// Task 2
obj.setFullName('Suraj', 'Mahar')
obj.getFullName()