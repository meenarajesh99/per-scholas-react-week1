/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
const PI :number = 3.14159; 
let area: number;
let radius:number;
let diameter: number;
let circumference: number;
 ​
function getArea(radius){
     area = PI * radius * radius;
​       return `Area is ${area}`;
}
​
function getDiameter(radius) {
​   diameter = radius * 2;
    return `Diameter is ${diameter}`;
}
​
function getCircumference(radius) {
​   circumference = PI * radius * 2;
    return `Circumference is ${circumference}`;
​
}

console.log(getArea(14));
console.log(getDiameter(14));
console.log(getCircumference(14));
