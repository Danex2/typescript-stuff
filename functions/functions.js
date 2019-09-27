"use strict";
var someFunc = function (x, y, o) {
    console.log(x + " number, " + y + " number, " + o + " any");
};
someFunc(40, 200, 'hello');
var calculateArea = function (measurements) {
    return measurements.height * measurements.width;
};
console.log(calculateArea({ height: 80, width: 20 }));
var myAdd = function (x, y) {
    return x + y;
};
// optional params
var opParams = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(opParams('Billy'));
