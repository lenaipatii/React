class Pet {
    // The constructor method is a special method for creating and initializing an object created with a class. 
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    // Getter method - A getter is a method that gets the value of a specific property. 
    get activity() {
        // get the hour of the day
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner() {
        return this._owner;
    }

    // Setter method - A setter is a method that sets the value of a specific property. 
    set owner(owner) {
        this._owner = owner;
        console.log(`setter caled: ${owner}`);
    }

    // Adding Methods To Our Class
    speak() {
        console.log(this.sound);
    }
}

// Instantiating a Pet Object
const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');


console.log(ernie);

ernie.speak();
vera.speak();

// Display getter method
console.log(ernie.activity);

// Display setter method
ernie.owner = 'Lena';
console.log(ernie.owner);

class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }

    get phone() {
        return this._phone;
    }
}

ernie.owner = new Owner('Lena', '123 main Street');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);