var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log(this.name + ' says hello');
    };
    return Person;
}());
var jake = new Person('Jake');
jake.greet();
var AngryPerson = /** @class */ (function (_super) {
    __extends(AngryPerson, _super);
    function AngryPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AngryPerson.prototype.greet = function () {
        _super.prototype.greet.call(this); // call methods from the superclass
        console.log(this.name + ' appears to be angry');
    };
    return AngryPerson;
}(Person));
var john = new AngryPerson('John');
john.greet();
