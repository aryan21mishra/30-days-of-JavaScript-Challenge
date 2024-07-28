// Activity 2 => Class Inheritance


class Person {
   name = 'Aryan'
   age = 19
   studentID = 123
   getmessage() {
      console.log('Hey Developers!');
   }
   getStudentID() {
      return this.studentID
   }
}

class Student extends Person {
   getmessage() {
      console.log('Your Student Id:', this.studentID);
   }
}

const obj = new Student()
// Task 3
let student_ID = obj.getStudentID()
console.log(student_ID);

// Task 4
obj.getmessage()
