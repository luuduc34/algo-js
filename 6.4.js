class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // getter
    get Name() {
        return this.firstname + ' ' + this.lastname;
    }
}
let user = new Person ('Mark', 'Wal');
console.log(user.Name);