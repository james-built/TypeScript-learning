var Bike = /** @class */ (function () {
    function Bike() {
        this.wheels = 2; // could also assign this default property by putting an = after the class property declaration above e.g. wheels: number = 2
        this.ride = Bike.fun;
    }
    Bike.prototype.mileage = function (distance) {
        console.log(distance + "km");
    };
    Bike.fun = true;
    return Bike;
}());
var yamaha = new Bike();
yamaha.model = 'MT09';
console.log(Bike.fun);
yamaha.mileage(11000);
