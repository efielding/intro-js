// number data type
var a = 10;
console.log(a);
var b = 100;
console.log(b);
var a =20;
console.log(a);
var c = 0x1E; //hex value of 30
console.log(c);
var d = 0.5;
console.log(d);

var sum =a+b;
console.log(sum);

// subtraction
var diff = d-c;
console.log(diff);

// multiplication
var mult = a*d;
console.log(mult);

// division
var div = a/d;
console.log(div);
var div = b/a;
console.log(div);

// modulus
var mod = b%a;
console.log(mod);

var mod = b%c;
console.log(mod);

var e='20';
console.log(typeof e); //not at # but is a string returns type of variable
var e='5';
console.log(e);

console.log(a === e); // strict equality will not do type conversion
console.log(a == e); // loose comparison will do type conversion