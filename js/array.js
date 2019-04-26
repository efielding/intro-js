// array data type collwction of mult parameters in one var
var arr1 = []; // empty array
var arr2 = [1, 2]; // 2 parameters within
console.log(arr2);
console.log(arr2[1]);

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3.length);
console.log(arr3[arr3.length - 1]);

//  add another value to the end of array 3
arr3.push('wlecome');
console.log(arr3);
console.log(arr3[arr3.length - 1]);

//  add to begining of array
arr3 .unshift ('greeting');
console.log(arr3);

//  replace value in array
arr3.splice(2, 1, 'Emily'); // removes one item at index 2 and add in that spot
console.log(arr3);
//  removes 2 items  starting at index 2  arr3.splice(2, 2,);

// to add item in middle
arr3.splice(2, 0, 'hola');
console.log(arr3);

var arr4 =[10, 40, 'abc', 'xyz', true]; // not recomended to do this
console.log(arr4);

// remove last item of array
arr4.pop(); 
console.log(arr4);

// removes first item of arry 4
arr4.shift();
console.log(arr4);

var arr5 = arr4.slice(); // makes a copy of array
console.log(arr5);

var arr6= arr4; // this is not a copy it is an exact value

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); // starts at index 1 and captures everything before index 3
console.log(arr7);
