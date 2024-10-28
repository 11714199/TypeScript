function getUsertDetails({name: string, age: nunmber}): {} {
    return { name: "Madhavi", age: 24 }
}


//getUsertDetails({ name: "Madhavi", age: 24, email: 'm@m.com' }) // it will throw an error, but

let users = {
    name: "Madhavi",
    age: 24,
    email: 'm@m.com'
}
getUsertDetails(users) // it wont throw an error, this is weired behaviour of ts
