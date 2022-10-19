// Array Introduction

// 1. Arrays are a type of object that are ordered by the index of each item it contains. 

// 2. The index starts at zero and extends to however many items have been added, which is a property of the array known as the "length" of the array

// 3. Similar to objects, an array can be created with the array constructor or the shorthand syntax known as array literal.



// ===== Creating Arrays... ======



// (i) Array Constructor

var arr1 = new Array;

// (ii) Array Literal

var arr2 = [];


// ====== Using Arrays ======


// Insertion into arrays can be via:

// (i) [] notation (like java)

// (ii) Using 'push' which appends to the end of the array.

var array = [];

array.push("a"); // adds new element to an array.
array.push("b");

console.log( array[0] ); // => a
console.log( array[1] ); // => b

console.log(array.length); // => 2

array.pop(); // Removes the last element from an array.

console.log( array[0] ) // => a
console.log( array[1] ) // => undefined

console.log(array.length); // => 1



// ===== More about Array ======



// (i) Arrays are zero-indexed, ordered lists of values.

// They are a handy way to store a set of related items of the same type (such as strings), though in reality, an array can include multiple types of items, including other arrays.

// (ii) To create an array, either use the object constructor or the literal declaration, by assigning the variable a list of values after the declaration.

// (iii) The literal declaration is generally preferred.

// A simple array with constructor
var myArray1 = new Array("hello", "world");

// literal declaration, the preferred way
var myArray2 = ["hello", "world"];


// ====== Missing Indices ======


// (i) Missing indices will be filled with 'undefined'.

// Leaving indices

var myArray_ = [];

myArray_[ 0 ] = "hello";
myArray_[ 1 ] = "world";
myArray_[ 3 ] = "!";

console.log( myArray_ );
// [ "hello", "world", undefined, "!"];


// Accessing array

// (i) If the size of the array is unknown, 'push' is far more safe. 

// (ii) You can both access and assign values to array items with the index.

// Accessing array items by index

var _myArray_ = [ "hello", "world", "!" ];

console.log( _myArray_[2] ); // "!"


// ===== length property ======


// (i) The .length property is used to determine the amount of items in an array.

// Length of an array
var my_Array = ["hello", "world", "!"];

console.log(my_Array.length);


// (ii) You will need the .length property for looping through an array:

// For loops and arrays - a classic

var newArray = ["hello", "world", "!"];

for(var i = 0; i < newArray.length; i = i + 1){
    console.log( newArray[1] );
}


// (iii) Except when using for/in loops:

// For loops and arrays - alternate method

var new_Array = ["hello", "world", "!"];

for(var i in new_Array){
    console.log( new_Array[i] );
}


// ====== forEach Method =======


// In modern browsers it is possible to traverse through arrays with a .forEach method, where you pass a function that is called for each element in the array.

// The function takes up to three arguments:
// 1 Element - The element itself.
// 2 Index - The index of this element in the array.
// 3 Array - The array itself

// All of these are optional, but you will need at least the 'element' parameter in most cases.

// native forEach 

function printElement(elem){
    console.log(elem);
}

var newArray_ = [1,2,3,4,5];

// prints all elements to the console 

newArray_.forEach(printElement);

// Element & index 

function printElementAndIndex(elem, index){
    console.log("Index ", index + ":" + elem);
}

// prints "Index 0: 1" "Index 1: 2" "Index 2: 3" .....

newArray_.forEach(printElementAndIndex);




// I already make a file for Array methods by the name Array_methods.js, you'll find the file in this repositery.