var arr1 = ['apple', 'mango', 'strawberry'];
console.log(arr1);
console.log(arr1 [0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1.push('banana');
console.log(arr1);

arr1.unshift('orange');
console.log(arr1);

arr1.splice(2, 1, 'plum');
console.log(arr1);

arr1.splice(1,1);
console.log(arr1);

var arr2 = arr1.slice();
console.log(arr2);