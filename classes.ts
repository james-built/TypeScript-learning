class Bike {
  name: string
  model: string
  wheels: number
  ride: boolean
  static fun: boolean = true

  constructor() {
    this.wheels = 2 // could also assign this default property by putting an = after the class property declaration above e.g. wheels: number = 2
    this.ride = Bike.fun
  }

  mileage(distance: number){
    console.log(distance + "km")
  }
}

let yamaha = new Bike()
yamaha.model = 'MT09'
console.log(Bike.fun)
yamaha.mileage(11000)