// Learn this before React.

// In this file we will explore top fundamental javascript concepts necessary to know in order to have an effective first learning cycle of React.js/React Navtive.

// Table of contents

// map() & filter
// slice() & splice()
// concat()
// find() & findIndex()
// destructuring
// rest & spread operator
// promises


// 1. map & filter

// Both are array methods and both return a new array when applying. filter additionally eliminates items that don't match.

const Data = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
]

const upperData = Data.map(ele=>ele.title.toUpperCase());
// console.table(upperData);

const moduloData = Data.filter(ele=>ele.id % 2 == 0);
// console.table(moduloData);

// console.table(Data);

// =============================================== //

// 2. slice & splice

// method returns a new array with selected elements, while splice method changes the contents of an existing array.

const charactersArr = [
    'Witcher',
    'Harry Potter',
    'Luke Skywalker',
    'Tony Stark'
]

const copyArr = [...charactersArr];

copyArr.splice(0, 1);
// console.log(copyArr);

// ['Harry Potter', 'Luke Skywalker', 'Tony Stark']

copyArr.splice(copyArr.length, 1, 'Wonder Woman')
// console.log(copyArr);

// ['Harry Potter', 'Luke Skywalker', 'Tony Stark', 'Wonder Woman']

const selected = charactersArr.slice(0, 2);
// console.log(selected);

// ['Witcher','Harry Potter']

// =============================================== //

// 3. concat 

// This method returns a new array of merging two or more arrays.

const arr1 = [1,2,3,4];
const arr2 = [10,20,30,40];
const arr3 = [100,200,300,400];

const mergeArr = arr1.concat(arr2, arr3);
// console.log(mergeArr);

// [1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 300, 400]

// =============================================== //

// 4. find & findIndex

// The find method returns the first element that satisfies the condition, while findIndex returns the index of that element.

const newData = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
]

const itemIdx = newData.findIndex(ele=>ele.id === 2);
// console.log(itemIdx); // 1

const item = newData.find(ele=>ele.id === 2);
// console.log(item); // {id: 2, title: 'second'}

// =============================================== //

// 5. destructuring

// The destructuring assignment is a special syntax which enables unpacking(assigning) values from arrays or object properties directly into variables.

const name = ["Mohit", "Vaswani"];

const [firstName, lastName] = name;

// console.log(firstName, lastName); // Mohit Vaswani

const mohit = {
    id: 1,
    fullName: "Mohit Vaswani",
    love: true,
    species: "Human"
}

const {fullName, species, ...rest} = mohit

// console.log(fullName); // Mohit Vaswani
// console.group(species); // Human

// console.log(rest); // {id: 1, love: true}

// =============================================== //

// 6. rest & spread operator

// Rest parameter enables us to pass unspecified number of parameters to a function which will be placed into array, while the spread operator enables us to spread the content of a iterable(i.e. array) into individual elements.

// Spread

const introduction = ['my', 'name', 'is', 'Mohit', 'Vaswani'];
const copyIntro = [...introduction];
// console.log(copyIntro); // ['my', 'name', 'is', 'Mohit', 'Vaswani']
// console.log(...copyIntro); // my name is Mohit Vaswani


// Rest

const getSize = (...args) => {
    return args.length;
}

// console.log(getSize(1,5,10)); // 3
// console.log(getSize(10, 20, 40, 50, 60)) // 5

// =========================================== //

// 7. promises

// In simple terms promises are used to handle asynchronous operations. Each promise can end as a success or failure having 3 possible status: pending, fulfilled or rejected. In the example below we handle promises with the async await syntax while fetching from API.

const fetchData = async() => {
    try{
        const response = await fetch("https://swapi.dev/api/people/");

        if(!response.ok) throw new Error(response.status);

        const result = await response.json();
        return result;
    }
    catch (e) {
        console.log(e);
    }
}