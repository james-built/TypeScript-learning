let a = 5
let b = 5
let c = a + b

console.log(c)

// Data types

// any type
// assigning a variable an 'any' type is equivalent to opting out of type checking
let variable: any = 'string variable'

// Built-in types
  // includes: number, string, boolean, void, null & undefined
  let num: number = 1
  let firstName: string = 'James'
  let truth: boolean = true

// User-defined types
  // includes: enum, class, interface, array & tuple

  // Arrays
  /* In TS are defined as a vector, an array containing only elements of a specified type, e.g. an array of strings:*/
  let names : string[] = ['goku', 'vegeta', 'gohan']

  // enum, a way to store built in variables
  enum Bikes {Honda, KTM, Yamaha, Triumph}

  let daytona : Bikes = Bikes.Triumph

  // void, equal to no type, normally used for a function

// Functions
  // can define the return type of a function

  function add() : number{
    return 1 + 5
  }

// Interfaces
  // can define an interface for the type of object you expect to see, allows for errors with inconsistent objects to be found at compile time

  interface Colourful {
    colour: string
    night?: boolean // this defines night as an optional parameter
  }

  function printColour(sky : Colourful) {
    console.log(sky.colour)
  }

  printColour({colour: "blue"})
  printColour({colour: "black", night: true}) // uses the optional property from the interface
