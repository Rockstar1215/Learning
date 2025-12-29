// Destrcuturing 
// 1. object Destructuring
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};

 const { name : userName, age, address: { city, country, street }} = person;
 console.log(userName);
 console.log(age);
 console.log(city)
 console.log(country);
 console.log(street);

 console.log(" ")
 console.log(" ")


// 2. array Destructuring
const numbers = ["one", "two", "three", "fours"];
const [first, second, four, three] = numbers;
console.log(first)
console.log(second)
console.log(three)
console.log(four)

console.log(" ")
console.log(" ")


// 3. skipping values in array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [primary, , , secondary] = colors;
console.log(primary);
console.log(secondary);

console.log(" ")
console.log(" ")

// 4. using rest operator in destructuring
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const [firstFruit, secondFruit, ...otherFruits] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);

console.log(" ")
console.log(" ")

// 5. default values in destructuring
const settings = {
    theme: 'dark',
    fontSize: 14
};

const { theme, fontSize, language = 'en' } = settings;
console.log(theme);
console.log(fontSize);
console.log(language);

console.log(" ")
console.log(" ")

// 6. skipping values in object destructuring
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};

const { make, model } = car;
console.log(make);
console.log(model);

console.log(" ")
console.log(" ")

// 7. nested array destructuring
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = matrix;
console.log(a1, a2, a3);
console.log(b1, b2, b3);
console.log(c1, c2, c3);

console.log(" ")
console.log(" ")    

// 8. function parameter destructuring

function displayUser({ name, age, email }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}

const user = { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' };      
displayUser(user);

console.log(" ")
console.log(" ")

// 9. destructuring in function parameter lists

function calculateArea({ width, height }) {
    return width * height;
}

const rectangle = { width: 10, height: 5 };
const area = calculateArea(rectangle);
console.log(`Area: ${area}`);

console.log(" ")
console.log(" ")


// spread Operator
const hobbies = ['reading', 'traveling', 'swimming'];
const newHobbies = ["coding"];

const mergedHobbies = [...newHobbies, ...hobbies];
console.log(mergedHobbies);

console.log(" ")
console.log(" ")

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };


const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

console.log(" ")
console.log(" ")

const mergedObj1 = { ...obj1, ...obj3 };
console.log(mergedObj1);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

console.log(" ")
console.log(" ")

const str = "Hello";
const charArray = [...str];
console.log(charArray);

console.log(" ")
console.log(" ")    

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);

console.log(" ")
console.log(" ")


const str1 = "World";
const chararray1 = [str1];
console.log(chararray1);

console.log(" ")
console.log(" ")


// conditional flow
// const password = prompt("Enter your password:");
const password = "Hello";   
console.log("Password: " + password)
if(password === "Hello"){
    console.log("Access Granted")
} else if(password === "hello"){
    console.log("Access Granted")
} else {
    console.log("Access Denied")
}
console.log(" ")
console.log(" ")

// For loop
const fruits1 = ["apple", "banana", "cherry", "date"];

for (const fruit of fruits1) {
    console.log(fruit);
}

console.log(" ")
console.log(" ")

for (let i =0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}
console.log(" ")
console.log(" ")


// using function as values
function greet(name){
    return `Hello, ${name}!`;
}
const message = greet("Alice");
console.log(message);

console.log(" ")
console.log(" ")

// Arrow function
const add = (a, b) => a + b;
const sum = add(5, 3);
console.log(`Sum: ${sum}`);

console.log(" ")
console.log(" ")

const square = x => x * x;
const result = square(4);
console.log(`Square: ${result}`);

console.log(" ")
console.log(" ")

const sayHello = () => console.log("Hello, World!");
sayHello();

console.log(" ")
console.log(" ")

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(n => n * 2);
console.log(doubled);

console.log(" ")
console.log(" ")

const isEven = n => n % 2 === 0;
const evenNumbers = numbers1.filter(isEven);
console.log(evenNumbers);

console.log(" ")
console.log(" ")

const factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
const factResult = factorial(5);
console.log(`Factorial: ${factResult}`);

console.log(" ")
console.log(" ")

// definning functions inside functions
function init() {
    function greetUser(){
        console.log("Hi")
    }
    greetUser();
}

init();

console.log(" ")
console.log(" ")


// Reference vs Primitive Values
// Primitive Values
let num1 = 10;
let num2 = num1; // num2 gets a copy of num1
num2 = 20;

console.log(`num1: ${num1}`); // 10
console.log(`num2: ${num2}`); // 20

console.log(" ")
console.log(" ")

// Reference Values
let objA = { value: 10 };
let objB = objA; // objB references the same object as objA
objB.value = 20;

console.log(`objA.value: ${objA.value}`); // 20
console.log(`objB.value: ${objB.value}`); // 20

console.log(" ")
console.log(" ")

// To create a copy of an object
let original = { name: 'Alice', age: 25 };
let copy = { ...original };
copy.age = 30;

console.log(`original.age: ${original.age}`); // 25
console.log(`copy.age: ${copy.age}`); // 30

console.log(" ")
console.log(" ")
// To create a copy of an array
let arrA = [1, 2, 3];
let arrB = [...arrA];
arrB.push(4);

console.log(`arrA: ${arrA}`); // [1, 2, 3]
console.log(`arrB: ${arrB}`); // [1, 2, 3, 4]

console.log(" ")
console.log(" ")

// Modifying nested objects
let nestedObj1 = { details: { score: 50 } };
let nestedObj2 = { ...nestedObj1 };
nestedObj2.details.score = 100;

console.log(`nestedObj1.details.score: ${nestedObj1.details.score}`);   // 100
console.log(`nestedObj2.details.score: ${nestedObj2.details.score}`);   // 100
console.log(" ")
console.log(" ")

// To create a deep copy of a nested object
let deepObj1 = { details: { score: 50 } };
let deepObj2 = {
    details: { ...deepObj1.details }
};
deepObj2.details.score = 100;

console.log(`deepObj1.details.score: ${deepObj1.details.score}`);   // 50
console.log(`deepObj2.details.score: ${deepObj2.details.score}`);   // 100

console.log(" ")
console.log(" ")
// To create a deep copy of a nested array
let nestedArr1 = [[1, 2], [3, 4]];
let nestedArr2 = nestedArr1.map(innerArr => [...innerArr]);
nestedArr2[0][0] = 10;

console.log(`nestedArr1: ${nestedArr1}`); // [[1, 2], [3, 4]]
console.log(`nestedArr2: ${nestedArr2}`); // [[10, 2], [3, 4]]

console.log(" ")
console.log(" ")        
// end of file  

