class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  greet() {
    console.log(this.name + ' says hello')
  }
}

let jake = new Person('Jake')
jake.greet()

class AngryPerson extends Person {
  greet() { //subclass method applies over the superclass method of the same name
    super.greet() // call methods from the superclass
    console.log(this.name + ' appears to be angry')
  }
}

var john = new AngryPerson('John')
john.greet()