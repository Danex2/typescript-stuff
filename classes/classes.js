var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function (distance) {
        console.log("Car drove " + distance + " miles");
    };
    return Car;
}());
var Nissan = /** @class */ (function (_super) {
    __extends(Nissan, _super);
    function Nissan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nissan.prototype.boost = function () {
        console.log("Your car just boosted");
    };
    return Nissan;
}(Car));
var r34 = new Nissan();
r34.drive(40);
r34.boost();
