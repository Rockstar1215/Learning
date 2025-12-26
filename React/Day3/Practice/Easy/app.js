// Easy 5 Practice Questions
// (Goal: confidence with basics & output prediction)

// E1. Access & length
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits[1]); //Banana
console.log(fruits[3]); // undefined
console.log(fruits.length); // 3
console.log(" ")
console.log(" ")

// E2. push() mutation
const numbers = [1, 2];
numbers.push(3); // it will add 3 at the end of the array
console.log(numbers); // [1, 2, 3]
// Yes push mutates the original array
console.log(" ")
console.log(" ")

// E3. includes()
const pets = ['Dog', 'Cat', 'Bird'];
console.log(pets.includes("Cat")); // true
console.log(pets.includes("Fish")); // false
console.log(pets.includes("dog")); // false (case-sensitive)
console.log(" ")
console.log(" ")


// E4. map() basic
const nums = [1, 2, 3];
const doubled = nums.map(n => n *2); // [2, 4, 6]
console.log(doubled); // [2, 4, 6]
console.log(nums); // [1, 2, 3] (original array unchanged)
// doubled array changed, original nums array unchanged
console.log(" ")
console.log(" ")

// E5. findIndex()
const scores = [10, 20, 30];
const scoreIndex = scores.findIndex(score => score === 20); // 1
console.log(scoreIndex); // 1

const notFoundIndex = scores.findIndex(score => score === 40); // -1
console.log(notFoundIndex); // -1
console.log(" ")
console.log(" ")    
