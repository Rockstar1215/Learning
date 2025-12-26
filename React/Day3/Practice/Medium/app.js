// Medium 5 Practice Questions
// (Goal: mutation vs non-mutation + method choice)

// M1. Predict output

const arr = ["A", "B", "C"];
arr.pop();
// it will remove the last element "C" from the array
console.log(arr); // ["A", "B"]
console.log(" ")

arr.unshift("Z");
// it will add "Z" at the start of the array
console.log(arr); // ["Z", "A", "B"]
console.log(" ")
console.log(" ")

// M2. map() → objects
const Languages = ["React", "Javascript"];
console.log(Languages); // ["React", "Javascript"]
console.log(" ")
const langObjects =Languages.map(lang => ({ name: lang}));
// it will create an array of objects with name property
console.log(langObjects); // [ { name: "React"}, { name: "Javascript"} ]
console.log(" ")

// M3. filter()

const numbers = [5, 10, 15, 20, 25];
const result = numbers.filter(num => num >= 15);
// it will create array with numbers greate and equal to 15 and store in result
console.log(result); // [15, 20, 25]
// original array unchanged and new array is created
console.log(numbers); // [5, 10, 15, 20, 25]
console.log(" ")

// M4. slice() vs splice()
const letters = ["A", "B", "C", "D"];
const sliced = letters.slice(1,3);
// it will create a new array with name of sliced and it will have ealements from index 1 to 2;
console.log(sliced); // ["B", "C"]
// slice does not mutate the original array and a new array is created 
console.log(letters); // ["A", "B", "C", "D"]
console.log(" ")
console.log(" ")

// now splice
const spliced = letters.splice(1,2);
// it will remove 2 elements from index 1 and store it in spiced array
console.log(spliced);// ["B", "C"]
// splice mutates the original array
console.log(letters); // ["A", "D"]
console.log(" ")
console.log(" ")


// M5. sort() trap
const nums = [100, 5, 20];
nums.sort();
// it will sort the array in place but as strings so the output will be different if we dont give compare function currently it is string so js checks first character of each number
console.log(nums); // [100, 20, 5] (sorted as strings, not numbers)
// sort mutates the original array
console.log(" ")
console.log(" ")

// which is wrong way to sort numbers? Without compare function
const fixedSort = nums.sort((a,b) => a - b);
console.log(fixedSort); // [5, 20, 100] (sorted as numbers)
console.log(" ")
console.log(" ")