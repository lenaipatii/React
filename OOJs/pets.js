const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function() {
        console.log('Woof');
    }
}
// Display using dot notation
console.log(ernie.age);
console.log(ernie.breed);
ernie.bark();

// Display using bracket notation
console.log(ernie['age']);
console.log(ernie['breed']);
ernie['bark']();

// Add properties to object literals 
ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';
console.log(ernie);

// Classes
const ernie1 = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

const vera = {
    animal: 'dog',
    age: 8,
    breed: 'Border Collie',
    bark: function(){
        console.log('Woof!');
    }
}

const scofield = {
    animal: 'dog',
    age: 6,
    breed: 'Doberman',
    bark: function(){
        console.log('Woof!');
    }

  }

const edel = {
    animal: 'dog',
    age: 7,
    breed: 'German Shorthairder Pointer',
    bark: function(){
        console.log('Woof!');
    }
}

