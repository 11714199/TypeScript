
/********************************************* Type Aliases ***************************************/
// A name for any type
type User = {
    name: string,
    age: number,
    isActive: boolean
}

function getsUser(user: User): User {
    return user
}
console.log(getsUser({ name: 'Madhavi', age: 24, isActive: true }))

/********************************************* readonly, ? ********************************/
type UserData = {
    readonly name: string,
    age: number,
    email: string,
    creditCardNumber?: number // this property is optional
}
let userData: UserData = {
    name: "Madhavi",
    age: 24,
    email: 'm@m.com',
    //creditCardNumber: 12345678
}
userData.email = 'm@gmai.com'
//userData.name = 'Madhu' // we cannot re-assign, once we assign the value

/********************************************* combine type *************************/
type allUser = UserData & User & {
    mobile: number
}