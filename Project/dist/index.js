"use strict";
/************************************************** Classes ***************************************/
class User {
    constructor(email, name) {
        this.city = 'Kadiri'; // not accessable outside the class, but we can accessable in class which inherit
        this.name = name;
        this.email = email;
    }
    get getUserName() {
        return this.name;
    }
    get getUserCity() {
        return this.city;
    }
    set editEmail(email) {
        this.email = email;
    }
    getUserId() {
        console.log('Get user id');
    }
}
class SubClass extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCity() {
        this.city = 'Bangalore';
    }
}
const user = new User('m@m.com', 'Madhavi');
console.log(user.getUserName);
//user.city = 'Bangalore'
//user.getUserId // not directly accesable outside the class
