/************************************************** Classes ***************************************/

class User {
    public email: string; // no need to mark specically public, by default its public
    private name: string; // not accessable outside the class, we can access using getter method
    protected city: string = 'Kadiri'; // not accessable outside the class, but we can accessable in class which inherit
    constructor(email: string, name: string) {
        this.name = name;
        this.email = email;
    }

    get getUserName(): string {
        return this.name
    }

    get getUserCity(): string {
        return this.city
    }

    set editEmail(email: string) {
        this.email = email;
    }

    private getUserId() {
        console.log('Get user id')
    }
}

class SubClass extends User {
    isFamily: boolean = true;
    changeCity() {
        this.city = 'Bangalore'
    }
}

const user = new User('m@m.com', 'Madhavi')
console.log(user.getUserName)
//user.city = 'Bangalore'
//user.getUserId // not directly accesable outside the class