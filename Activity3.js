// Activity 3 => Static Method and Porperties

// Task 5
class Person {
   static getmessage() {
      return 'Hey Developers!';
   }
}

console.log(Person.getmessage());


// Task 6

class Student {
   static number = 0
   constructor() {
      Student.number++
   }
}

const student1 = new Student()
const student2 = new Student()
const student3 = new Student()
const student4 = new Student()
const student5 = new Student()
const student6 = new Student()
const student7 = new Student()

console.log('Total Numvber of student:', Student.number);