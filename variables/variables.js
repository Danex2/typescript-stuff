var isDone = false;
var myString = "Hi this is my string";
var myNumber = 73;
var myArray = [1, 2, 3];
var myArray2 = [4, 5, 6];
var myTuple;
myTuple = [43, "yo"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(colorName);