// truthy and falsy values in JavaScript

// Boolean data types are either "true" or "false"
// But in JS in addition to this, everything else has inherent boolean values. They are "falsy" or "truthy"

// Following values are always falsy:

// falsy values

false
0 (/* Zero */)
"" (/* empty string */)
null
undefined
NaN (/* a special Number value meaning Not-a-Number */)


// All other values are truthy

// truthy values

"0" // zero in quotes
"false" // false in quotes
function X() {} // empty functions
[] // empty arrays
{} //empty objects


// This concept is important because the inherent values can then be used in conditional logic.

// You don't have to do if(x == false) - you can just do if(!x).


if (x) {
    // x is truthy
   }
   else {
    // x is falsy
    // it
   }