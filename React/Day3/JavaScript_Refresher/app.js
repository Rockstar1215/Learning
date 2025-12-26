// Arrays
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]); // access value by index
console.log(hobbies) // access entire array

// Utility Array Methods
hobbies.push("Coding");
console.log(hobbies)

const index = hobbies.findIndex(hobby => hobby === "Reading");
console.log(index)

const index1 = hobbies.findIndex(item => {
    return item === "Coding";
});
console.log(index1)


// Map Method to transform everyt item in an array to another array item note it wont change existing array instead it will return a new array
const editedhobbies = hobbies.map(item => {
    return item + "!";
})

console.log(editedhobbies)

const editedhobbies1 = hobbies.map(item => ({ text: item}));
console.log(editedhobbies1)
console.log(" ")
console.log(" ")

// Chatgpt Example Practice Exercises
// Array
const userNames = ["Alex", "Bob", "Charlie"];
console.log(userNames); // ["Alex", "Bob", "Charlie"]
console.log(userNames[0]); // Alex
console.log(userNames[1]); // Bob
console.log(userNames[2]); // Charlie
console.log(userNames[3]); // undefined
console.log(userNames.length) // length of array is 3

// Mutation V/S Non-Mutation
// Mutation  -  Changes the original array
//Example of Mutation

const Names = ["Alice", 'Bob']
//Current Length of array is 2 and it will print names: Alice,Bob
console.log(Names) // ["Alice", "Bob"]

// Using push to add a new name
Names.push("Charlie")

//After using push method the original array is changed and it will print names: Alice,Bob,Charlie
console.log(Names) // ["Alice", "Bob", "Charlie"]

// Same Memory -> Changed data 

// Non-Mutation - Does not change the original array
// It return new array
const originalArray = [ 1, 2, 3];
// Current Length of array is 3 and it will print originalArray: 1,2,3
console.log(originalArray); // [1, 2, 3]

// Using map to create a new array with each element + "!"
const newArray = originalArray.map(num => num + "!");

// After using map method the original array remains unchanged
console.log("Unchanged Original Array: "+ originalArray); // [1, 2, 3]
console.log("New Array: "+ newArray); // [ '1!', '2!', '3!' ]

// Different Memory -> Unchanged data
console.log(" ")
console.log(" ")

// Array Methods
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array. (Mutates the original array)
// Example:
const fruits = ["Orange", "Grapes"];

console.log("Original Array: "+ fruits) // ["Orange", "Grapes"]
console.log("Length of Original Array: "+ fruits.length) // 2

// Using push to add a new fruit
fruits.push("Apple");
fruits.push("Orange");

console.log("Updated Array: "+ fruits) // ["Orange", "Grapes", "Apple"]
console.log("Updated Length of Array: "+ fruits.length); // 3
console.log(" ")
console.log(" ")


// 2. pop() - Removes the Last element from an array and returns that element. (Mutates the original array)
// Example:
const vegetables = ["Carrot", "Broccoli", "Spinach"];

console.log("Before removing last element in the Vegetables Array: "+ vegetables); // ["Carrot", "Broccoli", "Spinach"]
console.log("Length of Original Array: "+ vegetables.length); // 3

// Using pop to remove the last vegetable
vegetables.pop();


console.log("After removing last element: "+ vegetables)
console.log("Length of updated Array: "+vegetables.length)


// 3. Shift() - Removes the first element from an array and returns that removed element. (Mutates the original array)
// Example:
const colors = ["Red", "Green", "Blue"];

console.log("Before removing first element in the Colors Array: "+ colors); // ["Red", "Green", "Blue"]
console.log("Length of Original Array: "+ colors.length); // 3

// Using shift to remove the first color element 
colors.shift();

console.log("After removing the first color element from the array: "+ colors); // ["Green", "Blue"]
console.log("Length of updated Array: "+ colors.length); // 2
console.log(" ")
console.log(" ")

// 4. Unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array. (Mutates the original array)
// Example
const animals = ["Dog", "Cat"];

console.log("Before adding new element to the beginning of Animals Array: "+ animals); // ["Dog", "Cat"]
console.log("Length of Array: "+ animals.length)

animals.unshift("Elephant");
animals.unshift("Lion");

console.log("After using unshift updated array is: "+ animals); // ["Elephant", "Lion", "Dog", "Cat"]
console.log("Length of updated Array: "+ animals.length); // 4


// 5. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function. (Does not mutate the original array)
// Example:
const numbers = [10, 20, 30, 40, 50];

console.log("Original Array: "+ numbers); // [10, 20, 30, 40, 50]
console.log("Length of Array: "+ numbers.length); // 5

// Using findIndex to find the index of the first number greater than 25
 const foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex) 
// 2 as 30 is the first value greater than 25 at index 2

// Using findIndex to find the index of the first number greater than 50

const foundIndex1 = numbers.findIndex(idx => idx > 50);
console.log(foundIndex1) // -1 as no value is greater than 50

console.log("Length of Array remains unchanged: "+ numbers.length); // 5
console.log(" ")
console.log(" ")

// 6. find() - Returns the value of the first element in the array that satisfies the provided testing function. (Does not mutate the original array)
// Example:
const scores = [85, 92, 78, 90, 88];
console.log("Original Array: "+ scores); // [85, 92, 78, 90, 88]
console.log("Length of Array: "+ scores.length); // 5

// Using find to get the first score greater than 89
const foundScore = scores.find(score => score > 89);
console.log(foundScore)

// 7. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate. (Does not mutate the original array)
// Example:
const pets = ["Dog", "Cat", "Rabbit"];
console.log("Original Array: "+ pets); // ["Dog", "Cat", "Rabbit"]
console.log("Length of Array: "+ pets.length); // 3

// Using includes to check if "Cat" is in the array
const hasDog = pets.includes('Dog');
console.log(hasDog)
const hasCat = pets.includes('Cat');
console.log(hasCat)
const hasFish = pets.includes('Fish');
console.log(hasFish)
console.log(" ")
console.log(" ")

// 8. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array. (Does not mutate the original array)
// Example:
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("Length of Array: "+ arr.length); // 5
 console.log(" ")

// Using map to create a new array with each element multiplied by 2
const mappedArray  = arr.map(num => num *2);
console.log(mappedArray)

const arrobj = arr.map(item => ({ number: item}));
console.log(arrobj)
console.log(" ")
console.log(" ")

// 9. filter() - Creates a new array with all elements that pass the test implemented by the provided function. (Does not mutate the original array)
// Example:

const mixedNumbers = [ 10, 15, 20, 25, 30];
console.log(mixedNumbers); // [10, 15, 20, 25, 30]

const filteredNumbers = mixedNumbers.filter(num => num > 18);
console.log(filteredNumbers); // [20, 25, 30]
console.log(" ")
console.log(" ")

// 10. forEach() - Executes a provided function once for each array element. (Does not mutate the original array)
// Example:
const Letters = ['A', 'B', 'C'];
console.log(Letters)
Letters.forEach(Letter => { console.log(Letter) });
console.log(" ")
console.log(" ")

// 11. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). (Does not mutate the original array)
// Example"
const digits = [0, 1, 2, 3, 4, 5];
console.log(digits)

const sliceDigits = digits.slice(2,5);
console.log(sliceDigits); // [2, 3, 4]

const copyDigits = digits.slice();
console.log(copyDigits)

console.log(" ")
console.log(" ")

// 12. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. (Mutates the original array)
// Example:
const letters = ['A', 'B', 'C', 'D', 'E'];
console.log("Original Array: "+ letters); // ['A', 'B', 'C', 'D', 'E']

// Using splice to remove 2 elements starting from index 1 and add 'X' and 'Y'
letters.splice(1,2, 'X', 'Y');
console.log("Updated Array after splice: "+ letters); // ['A', 'X', 'Y', 'D', 'E']

letters.splice(2,1);
console.log("Updated Array after second splice: "+ letters); // ['A', 'X', 'D', 'E']

letters.splice(2,0,'M','N');
console.log("Updated Array after third splice: "+ letters); // ['A', 'X', 'M', 'N', 'D', 'E']

letters.splice(0, letters.length);
console.log("Updated Array after removing all elements using splice: "+ letters); // [] 

letters.push('P','Q','R');
console.log("Array after adding new elements using push: "+ letters); // ['P', 'Q', 'R']

// 13. CONCAT() - Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. (Does not mutate the original array)
// Example:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]

const newarr= array1.concat(["A"])
console.log(newarr)

// 14. sort() - Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings. (Mutates the original array)
// Example:
const unSortedArray = [3, 1, 4, 2, 5];
console.log(unSortedArray) // [3, 1, 4, 2, 5]
unSortedArray.sort();
console.log(unSortedArray) // [1, 2, 3, 4, 5]

// For numerical sort, a compare function is needed
const numArray = [10, 5, 20, 15];
console.log(numArray) // [10, 5, 20, 15]
numArray.sort();
console.log(numArray) // [10, 15, 20, 5] - Incorrect numerical order
numArray.sort((a, b) => a - b);
console.log(numArray) // [5, 10, 15, 20]
console.log(" ")
console.log(" ")

// 15. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. (Does not mutate the original array)
// Example:
const values = [1,2,3,4,5];
console.log(values); // [1, 2, 3, 4, 5]
console.log(" ")

const sum = values.reduce((accumalator, currentValue) => {
    return accumalator + currentValue;
}, 0);

console.log(sum); // 15