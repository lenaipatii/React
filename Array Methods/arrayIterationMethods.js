const fruits = ['apple', 'pear', 'cherry'];

// "For" Method
for ( let i = 0; i < fruits.length; i++ ) {
    console.log( fruits[i] );
}

// "For each" method
fruits.forEach( fruit => {
    console.log( fruit );
} );

// "For each" method more concise
fruits.forEach( fruit => console.log( fruit ) );


// Example:
let capitalizedFruits = [];

fruits.forEach( fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push( capitalizedFruit );
} );

console.log( `capitalizedFruits ${capitalizedFruits}` );
console.log( capitalizedFruits );

// Example: 
// Calculate a total cost by adding this list of prices up and logging the result to the console
const prices = [6.75, 3.10, 4.00, 8.12] //Total: 21.97
let total = 0;

prices.forEach( price => {
    total += price;
} );

console.log( total );

// Example:
// Create a new Array with only the names starting with letter s
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let namesWithS = [];

names.forEach( name => {
    // The charAt() method returns the character at the specified index in a string.
    if ( name.charAt( 0 ) === 'S' ) {
        namesWithS.push( name );
    }
} );

console.log( namesWithS );

// Number all names from array and print them
names.forEach( ( name, index ) => console.log( `${index + 1}) ${name}` ) );


// Using forEach, iterate over the numbers array and multiply each number by 10, storing these new numbers in the times10 array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]

numbers.forEach( number => {
    times10.push( number * 10 );
} );

console.log( times10 );

// Use filter method to display only the names starting with letter s
const names2 = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const namesWithS2 = names2.filter( name => {
    // The charAt() method returns the character at the specified index in a string.
    if ( name.charAt( 0 ) === 'S' ) {
        return true;
    } else {
        return false;
    }
} );

console.log( namesWithS2 );

// more concise
const namesWithS3 = names2.filter( name => name.charAt( 0 ) === 'S' );
console.log( namesWithS3 );

// Display the array without number 3
const numbers2 = [1, 2, 3, 4, 5];
const no3 = numbers2.filter( number => number !== 3 );
const only2 = numbers2.filter( number => number === 2 );

console.log( no3 );
console.log( only2 );

// Return only trhe even numbers
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Result: [2,4,6,8,10]

// const evenNumbers = numbers3.filter(number => !(number % 2));
const evenNumbers = numbers3.filter( number => number % 2 === 0 );
console.log( evenNumbers );

// Using the filter method on the years array, return an array of only the years in the twentieth century (remember: the twentieth century includes the year "2000"). 
// Store the new array in the variable century20.
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter( year => year <= 2000 );

// century20 should be: [1989, 2000, 1999, 1973]
console.log( century20 );


// MAP Method
// Create an array of numbers from these strings using the map method
const strings = ['1', '2', '3', '4', '5'];

// parseInt() - convert a string into an integer
const numbers4 = strings.map( string => parseInt( string, 10 ) );
console.log( numbers4 );

// Transform fruits into capitalize letters
const fruitsWithMap = ['apple', 'pear', 'cherry'];

const capitalizedFruitsWithMap = fruits.map( fruit => fruit.toUpperCase() );
console.log( capitalizedFruitsWithMap );

//Example: Use map to turn this list of numbers into price strings with 2 digits and a dollar sign at the begging
const prices2 = [5, 4.23, 6.4, 8.09, 3.20];

// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
const priceToDollars = price2 => `$${price2.toFixed( 2 )}`;
const displayPrices = prices2.map( priceToDollars );

console.log( displayPrices );

// Example:
// Use the map method on the daysOfWeek array, creating a new array of abbreviated week days. 
//Each abbreviated string should be the first three letters of the long version in daysOfWeek. 
// Store the new array in the variable abbreviatedDays.

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
abbreviatedDays = daysOfWeek.map( dayOfWeek => dayOfWeek.substring( 0, 3 ) );
console.log( abbreviatedDays );


// REDUCE Method

// Sum all the values of an array
const sum = [0, 1, 2, 3].reduce( function ( accumulator, currentValue ) {
    return accumulator + currentValue;
}, 0 );
console.log( sum );
// sum is 6

//   Alternatively, written with an arrow function:
const totalNumbers = [0, 1, 2, 3].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0 );
console.log( totalNumbers );

// Use reduce to add prices together and log the reult
const pricesWithReduce = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const totalWithReduce = pricesWithReduce.reduce( ( acc, cur ) => acc + cur,
    0 );

const totalWithReduce2 = pricesWithReduce.reduce( ( sum, price ) => sum + price,
    0 );
console.log( totalWithReduce );
console.log( totalWithReduce2 );

// Return account of the names that begin with the letter G using reduce
// Result: 4
const namesWithReduce = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const namesWithGCount = namesWithReduce.reduce( ( count, name ) => {
    if ( name.charAt( 0 ) === 'G' ) {
        return count + 1;
    }
    return count;
},
    0 );
console.log( namesWithGCount );

// Example:
// PhoneNumbers is array of 10 digit phone numbers, where the first three digits, in parentheses, are area codes. 
//Using reduce, return the total phone numbers with a 503 area code. Store the total in the variable numberOf503.
// numberOf503 should be: 3
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

numberOf503 = phoneNumbers.reduce( ( acc, cur ) => {
    if ( cur.substring( 1, 4 ) === "503" ) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0 );

console.log( 'Count of number with 503 area code: ', numberOf503 );


// Example
// Because the map method returns an array, you can call another array method directly after it. 
// The same is true for the filter method. 
// This is commonly called chaining methods, because each call is like a link in a chain.
const arr = [1, 2, 3];

const smallerArr = arr
    .filter( number => number !== 2 )
    .map( number => number + 1 );

console.log( smallerArr ); // => [2,4]


// Removing Duplicates from an Array
const duplicateNumbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

// compare the index of the current element to the index of the current element in the array that filter() was called upon to determine if we've already encountered that element value.
// This works because the indexOf method will return the index of the first occurrence that is found in the array. 
// So, indexes of duplicate elements will not equal the index of the first occurrence of their values. 
const unique = duplicateNumbers.filter( function ( number, index, array ) {
    return index === array.indexOf( number );
} );

console.log( unique ); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using the filter and map methods on the years array, create an array of display strings for each year in the 21st century (remember: the 21st century starts with the year "2001").
// Each display string should be the year followed by "A.D." See the comments below to see the correct result. 
// Store the new array in the variable displayYears.

const yearsExample = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]

displayYears = yearsExample
    .filter( year => year >= 2001 )
    .map( year => `${year} A.D.` );

console.log( displayYears );

// Working with Objects in Arrays and Combining filter() and map()
// Example:

const users = [
    {
        name: 'Samir',
        age: 27
    },
    {
        name: 'Angela',
        age: 65
    },
    {
        name: 'Beatrice',
        age: 23
    }
];

const newUserArray = users.filter( user => user.name !== "Samir" );
// Display the age for each user
const userAge = users.map( user => `${user.name} is ${user.age} years old.` );

console.log( newUserArray );
console.log( userAge );

// Using reduce, create a new object where the user names becomes properties whose values are their ages
// Result:
/*
{
    Samir: 27,
    Angela, 33,
    Beatrice: 42
}
*/
const usersObject = users.reduce( ( usersObject, user ) => {
    usersObject[user.name] = user.age;
    return usersObject;
}, {} );
console.log( usersObject );

// Example: 
// Using the map method on the authors array, create an array of full name strings, comprising the first name, then a space, then the last name. See the comments below for reference. 
// Store the new array in the fullAuthorNames variable.
// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

fullAuthorNames = authors.map( author => `${author.firstName} ${author.lastName}` );

console.log( fullAuthorNames );

// Create a new array of objects containing names with the letter S, each object should have one property name, which points to the string value of the username's array
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const usersObjectWithS = userNames
    .filter( name => name.charAt( 0 ) === 'S' )
    .map( name => ( { name: name } ) )

console.log( usersObjectWithS );

// Example:
// Filter and map to create an array of name strings, the names should be the users 30 years and over
const usersOver30Example = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 },
    { name: 'Shaniqua', age: 30 },
    { name: 'Marvin', age: 23 },
    { name: 'Sean', age: 47 }
];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

const userNamesOver30 = usersOver30Example
    .filter( user => user.age >= 30 )
    .map( user => user.name )

console.log( userNamesOver30 );

// Using the filter and map methods on the todos array, create an array of unfinished task strings. See the comments below to see the correct result.
// Store the new array in the variable unfinishedTasks.
// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
const unfinishedTasks = todos
    .filter( todo => todo.done == false )
    .map( todo => todo.todo );

console.log( unfinishedTasks );

// Combining filter() and reduce()
// Combining filter() with reduce(), you can remove values from an array, using the results to compute some value.

// Practise 1
// Find the highest price of all products under $10
const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];

// Result: { name: 'paper towels', price: 6.99 }

const highestPriceUnder10Dollars = products
    .filter( product => product.price < 10 )
    .reduce( ( highest, product ) => {
        if ( highest.price > product.price ) {
            return highest;
        }
        return product;
    } );

console.log( highestPriceUnder10Dollars );

// Practise 2
// Return total of all products over $10 using filter and reduce
// Result: 239.97

const highestPriceOver10Dollars = products
    .filter( product => product.price > 10 )
    .reduce( ( sum, product ) => sum + product.price, 0 )
    .toFixed( 2 );

console.log( highestPriceOver10Dollars );

// Using the filter and reduce methods on the purchaseItems array, add the total price of all the groceries (items with a dept. of groceries).
// Store the total price in the groceryTotal variable. 
// The correct amount can be seen in the comments below.
// groceryTotal should be: 9.47

const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
const groceryTotal = purchaseItems
    .filter( purchaseItem => purchaseItem.dept === 'groceries' )
    .reduce( ( total, item ) => total + item.price, 0 );

console.log( groceryTotal );

// Nested Data and Additional Exploration
// Practice 1
// Display all movie titles into one array - this is called flattening becouse you're putting the internal elements all on one level 
// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']
const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
]

const flatMovies = movies
    .reduce( ( arr, innerMovies ) => [...arr, ...innerMovies], [] )

console.log( flatMovies );

// Practice 2
// Create an array of all the favorite titles from every user
const usersWithFavoriteBooks = [
    {
        name: 'Samir',
        age: 27,
        favoriteBooks: [
            { title: 'The Iliad' },
            { title: 'The Brothers Karamazov' }
        ]
    },
    {
        name: 'Angela',
        age: 33,
        favoriteBooks: [
            { title: 'Tenth of December' },
            { title: 'Cloud Atlas' },
            { title: 'One Hundred Years of Solitude' }
        ]
    },
    {
        name: 'Beatrice',
        age: 42,
        favoriteBooks: [
            { title: 'Candide' }
        ]
    }
];
// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

const usersFavoriteBooksList = usersWithFavoriteBooks
    .map( user => user.favoriteBooks
        .map( book => book.title ) )
    .reduce( ( arr, titles ) => [...arr, ...titles], [] )

console.log( usersFavoriteBooksList );

// Practice 3
// Using reduce method, flatten the customerNames array of arrays. In other words, take all the names from each array inside customerNames and place them in one big array. 
// Store the flattened array in the flattenedCustomerNames variable. You can use the array in the comments below for reference.

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]

const customerNames = [
    ["John", "Sandy", "Tyrone", "Elizabeth", "Penny"],
    ["Barry", "Wanda", "Jamal", "Hayden"],
    ["Portia", "Pam", "Philip"]
];
const flattenedCustomerNames = customerNames
    .reduce( ( arr, innerCustomerNames ) => [...arr, ...innerCustomerNames], [] );

console.log( flattenedCustomerNames );


// Practice 4
// Using the reduce method, extract all the customer hobbies into their own array. Store the hobbies in the hobbies array. You can use the comments below for reference.

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
const customers = [
    {
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];
const hobbies = customers
    .map(customer => customer.personal)
        .map(customerHobbie => customerHobbie.hobbies)
    .reduce((arr, hobbieNames) => [...arr, ...hobbieNames]);

console.log(hobbies);
