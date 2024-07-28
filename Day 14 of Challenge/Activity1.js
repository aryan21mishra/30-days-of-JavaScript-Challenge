// Activity 1 => Class Definition


class Person {
   name = 'Aryan'
   age = 19
   getmessage() {
      console.log('Hey Developers!');
   }
   update(age) {
      this.age = age
   }
   updatedvalues() {
      console.log(this.name);
      console.log(this.age);
   }
}
// Task 1
const obj = new Person()
obj.getmessage(20)
obj.updatedvalues()

// Task 2

obj.update()