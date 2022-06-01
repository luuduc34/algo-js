class Animal {
    constructor(name, greeting) {
        this.name = name
        this.greeting = greeting        
    }
    static greet() {
        return this.greeting
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`
    }
}
class Cat extends Animal {
    constructor(name, greeting) {
        super(name, greeting)        
    }
}
class Dog extends Animal {
    constructor(name, greeting) {
        super(name, greeting)
    }
}
let a = new Cat('Garfield ', 'Good morning ');
console.log(a.sayHello())
let b = new Dog('Milou ', 'What\'s up ');
console.log(b.sayHello())