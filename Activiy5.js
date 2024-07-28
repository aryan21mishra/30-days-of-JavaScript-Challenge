// Activity 5 => Private fields

// Task 9

class Account {
   #balance = 9990
   deposit(balance) {
      this.#balance += balance
   }
   withdraw(balance) {
      this.#balance -= balance
   }
   checkBalance() {
      console.log(this.#balance);
   }
}

// Task 10

const obj = new Account()
obj.deposit(50000)
obj.checkBalance()

obj.withdraw(20000)
obj.checkBalance()