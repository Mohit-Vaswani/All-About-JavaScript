// Array Methods in Javascript.

// 1. concat()

// Creates a new array with the combination 2 or more arrays.

// Syntax

// array.concat(value1, value2, ...value-n)

// Example

const char = ["A", "B", "C"];

const num = [10, 20, 30];

const add2array = char.concat(num);

console.log(add2array);

// Output: A, B, C, 10, 20, 30

// 2. every()

// Check whether given elements are true or false in an array as provided in the condition.

// Return true / false

// Syntax

// Array.every(callback, thisArg) 

// callback -> condition to test the function.
// thisArg -> optional parameter

// Example 

const values = [150, 200, 250, 300, 350, 400];

function CheckValue(values){
    return values > 100;
}

console.log(values.every(CheckValue));

// Output: true

// 3. fill()

// fills the specified statcic value by modifieng the original values.

// Syntax

// array.fill(value);

// Example

const myCity = ["Delhi", "Mumbai", "Banglore"];

const myCity_result = myCity.fill("Chennai");

console.log(myCity);

// Output: ["Chennai", "Chennai", "Chennai"]

// 4. filter()

// The filter() method filters the array of elements on a    given condition.

// Syntax

// array.filter(callback, thisArg);

// Example

const new_Values = [150, 200, 250, 400, 450, 500];

function checkNewValue(valueNew){
    return valueNew > 300;
}

console.log(new_Values.filter(checkNewValue));

// Output: 400, 450, 500

// 5. toString()

// Returns an array as a comma separated string.

// Example

const fruits = ["banana", "apple", "mango"];

console.log(fruits.toString())

// Output: banana, apple, mango

// 6. join()

// join() methods joins array elements into a string.

// Example

const fruits_2 = ["Kiwi", "Pinapple", "Berry"];

console.log(fruits_2.join(" | "));

// Output: Kiwi | Pinapple | Berry

// 7. pop()

// Removes the last element from an array.
// Returns : the value that was popped out.

const toys = ["car", "helicopter", "teddy"];

console.log(toys.pop());

// Output: teddy

// 8. push()

// adds new element to an array. (at the end)

const biscuits = ["parle-g", "cookies", "tiger crunch"];

console.log(biscuits.push("20-20"));

console.log(biscuits); //  ['parle-g', 'cookies', 'tiger crunch', '20-20']

// Returns -> push() returns the new array length

// Output: 4 -> New Array Length


// ======== Shifting Elements =========

// 9. shift()

// Removes the first element of array & "shift" all other elements to a lower index.

// Example

const choclates = ["kit-kat", "5-star", "dairy-milk"];

console.log(choclates.shift());

// Output: kit-kat

// Returns: the shift() method returns the value that was shifted out.

// 10. unshift()

// add new elements to an array (in the beginning) & "unshift" older elements.

// Example

const elements = ["item-1", "item-2", "item-3"];

console.log(elements.unshift("item-new")); // 4

console.log(elements[0]); // item-new

// ========= Basic Array Question ============ //

// 1. Write a function that takes an array (a) as argument. Extract the first 3 elements of 'a' & Return the resulting array.

// 2. Write a function that takes an array of string as argument. Sort the array.

// 3. Write a function that takes array (a) and a value (n) as argument. Return the nth element of 'a'.

// 4. Write a function that should return sum of numbers.

// 5. Write a function that return only negative value.

// 6. sort an array of numbers in descending order.

// 7. Return the average of the numbers.