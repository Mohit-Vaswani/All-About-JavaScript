// how to clone array 

// === 1 === //

// let array1 = ["item1", "item2", "item3"];
// let array2 = array1; // There is a problem with this, if we change something in array1, then it will also change in array2.
// console.log(array1===array2)

// === 2 === //

// Don't use this below method to clone array becoz if you have 100's or 1000's of items then it become so hacktik. 

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1); // item1, item2, item3
// console.log(array2); // item1, item2

// === 3 === //

// Good Way

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// array1.push("item");
// console.log("array1 is -> " + array1);
// console.log("array2 is -> " + array2);
// console.log(array1===array2); // They both are separate array.

// === 4 === //

// Good Way

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array1.push("item1");
// console.log(array1===array2);
// console.log("array1 is -> " + array1);
// console.log("array2 is -> " + array2);
 
// === 5 === //

// New Way -> spread operator

// let array1 = ["item1", "item2"];
// let array2 = [...array1]; // This 3 dot will spread the elements of array 1 into array 2.
// array1.push("item1");
// console.log(array1===array2);
// console.log("array1 is -> " + array1);
// console.log("array2 is -> " + array2);

// Important -> If we talk about which is fasted method to clone the array then the winner is slice method but most people use spread operator method becoz it's more readable & also use in react.


// Task - Add all the elements of Array1 in Array2 and also add some extra elements as well.

// 1st way 

// let array1 = ["item1", "item2"];
// let newArray = ["newItem1", "newItem2"];
// let array2 = [...array1, ...newArray];
// or
// let array2 = [...array1, "newItem1", "newItem2"];
// console.log("array2 contains -> " + array2);

// 2nd Way 

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["newItem1", "newItem2"]);
// console.log("array2 contains -> " + array2);

// 3rd Way 

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1, ["newItem1", "newItem2"]);
// console.log("array2 contains -> " + array2);
 