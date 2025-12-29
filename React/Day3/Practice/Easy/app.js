// Easy 5 Practice Questions
// E1
const fruits = ["apple", "banana", "mango"]
fruits.push("orange")
fruits.shift()
console.log(fruits) // Output: [ 'banana', 'mango', 'orange' ]
    
console.log(" ")
console.log(" ")    

// E2
const nums = [1, 2, 3, 4];
const doubleNums = nums.map(num => num *2);
console.log(doubleNums); // Output: [2, 4, 6, 8]

console.log(" ")
console.log(" ")

// E3
const ages = [12, 18, 21, 16, 30];
const filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges); // Output: [18, 21, 30]

console.log(" ")
console.log(" ")

// E4
const names = ["Ram", "Shyam", "Amit"];
const indexName = names.indexOf("Amit");
console.log(indexName); // Output: 2

console.log(" ")
console.log(" ")

// E5
const user = {
    name: "Ravi",
    age: 25,
    city: "Mumbai"
};

const { name, city } = user;
console.log(name); // Output: Ravi
console.log(city); // Output: Mumbai

console.log(" ")
console.log(" ")    

// E6
const product = {
    id: 101,
    price: 500,
    category: "Books"
};

const {price, category} = product;
console.log(price); // Output: 500
console.log(category); // Output: Books

console.log(" ")
console.log(" ")    

// E7
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergeArray = [...arr1, ...arr2];
console.log(mergeArray); // Output: [1, 2, 3, 4]

console.log(" ")
console.log(" ")

// E8
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Alice")); // Output: Hello Alice

console.log(" ")
console.log(" ")

// E9
function square(n) {
    return n * n;
}
const arrowSquare = n => n * n;
console.log(square(4)); // Output: 16
console.log(arrowSquare(5)); // Output: 25

console.log(" ")
console.log(" ")

// E10
let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10
console.log(b); // Output: 20

console.log(" ")
console.log(" ")

let obj1 = { x:10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x); // Output: 20
console.log(obj2.x); // Output: 20

console.log(" ")
console.log(" ")


// End of Easy Practice Questions