function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
//adds 2 to 2 and displays in corresponding P element
function subtraction_Function() {
    var subtraction = 5 - 3;
    document.getElementById("minus").innerHTML = "5 - 3 = " + subtraction;
}
//subtracts 3 from 5 and displays in corresponding P element
function division_Function() {
    var division = 14 / 3;
    document.getElementById("division").innerHTML = "14 / 3 = " + division;
}
//divides 14 by 3 and displays in corresponding P element
function multiply_Function() {
    var multiply = 5 * 3;
    document.getElementById("multiply").innerHTML = "5 * 3 = " + multiply;
}
//multiples 5 by 3  and displays in corresponding P element
function muchomath_Function() {
    var math = (2 * 3) / (4 + 5) - 10 + 121;
    document.getElementById("muchomath").innerHTML = "2 multiplied by 3, divided by the result of 4 plus 5, subtracted by 10, then 121 added = " + math;
}
//does a bunch of math and displays in corresponding P element
function remainder_Function() {
    var remainder = 22 % 7;
    document.getElementById("remainder").innerHTML = "THE REMAINDER OF 22 / 7 is " + remainder;
}
//tells you remainder of 22 / 7 and displays in corresponding P element
function unary_Function() {
    var X = 22;
    document.getElementById("unary").innerHTML = -X;
}
//inverts the sign of X = 22 and displays in corresponding P element
function decrement_Function() {
    var X = 5;
    X--;
    document.getElementById("decrement").innerHTML = X;
}
//decrements X = 5 by 1 and displays in corresponding P element
function increment_Function() {
    var X = 5;
    X++;
    document.getElementById("increment").innerHTML = X;
}
//increments X = 5 by 1 and displays in corresponding P element

function i_see_pie() {
    document.getElementById("apple").innerHTML = Math.PI;
}
window.alert(Math.random() * (100))
//generates a pop up with a random number from 1 to 100

window.alert(Math.ceil(4.1))
//generates a pop up with 4.1 rounded up to the next highest integer

window.alert(Math.PI)
//generates a pop up with the number pie

window.alert(Math.ceil(4.4))
//generates a pop up with 4.4 rounded up to the next highest integer