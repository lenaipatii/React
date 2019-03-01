const fruits = ['apple', 'pear', 'cherry'];

// "For" Method
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// "For each" method
fruits.forEach(fruit => {
    console.log(fruit);
});

// "For each" method more concise
fruits.forEach(fruit => console.log(fruit));


// Example:
let capitalizedFruits = [];

fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});

console.log(`capitalizedFruits ${capitalizedFruits}`);
console.log(capitalizedFruits);

// Example: 
// Calculate a total cost by adding this list of prices up and logging the result to the console
const prices = [6.75, 3.10, 4.00, 8.12] //Total: 21.97
let total = 0;

prices.forEach(price => {
    total += price;
});

console.log(total);

// Example:
// Create a new Array with only the names starting with letter s
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let namesWithS = [];

names.forEach(name => {
    // The charAt() method returns the character at the specified index in a string.
    if (name.charAt(0) === 'S') {
        namesWithS.push(name);
    }
});

console.log(namesWithS);

// Number all names from array and print them
names.forEach((name, index) => console.log(`${index + 1}) ${name}`));


// Using forEach, iterate over the numbers array and multiply each number by 10, storing these new numbers in the times10 array.
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]

numbers.forEach(number => {
    times10.push(number * 10);
});

console.log(times10);