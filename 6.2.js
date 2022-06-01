class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        return 'Hello, ' + this.firstname + ' ' + this.lastname;
    }
}
let user = new Person ('Duc', 'Luu');
console.log(user.sayHello());