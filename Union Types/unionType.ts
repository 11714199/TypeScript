let data: number | string | boolean;
data = 1234
data = 'madhavi'
data = true
console.log(data)

type UserDate = {
name: string
age: number
}

type userAddress = {
address: string
pincode: number
}

type userDetails = UserDate | userAddress
let details: userDetails = { name: "Madhavi", age: 24, pincode: 540030 }
console.log(details)


console.log(getId(1))
console.log(getId('Madhavi'))
function getId(id: number | string) {
    if(typeof id == 'string') {
        return id.toLowerCase()
    } else {
        return id
    }
}

/****************************************** in Arrays *****************************/
let numbertArr: number[] = [1,2,3,4];
let stringArr: string[] = ['1', '2', '3', '4']
let both: (string | number)[] = [1, 2, '3', '4']
console.log(numbertArr, stringArr, both)

let Username: 'madhavi' | 'madhu' | 'reddy';
Username = 'madhavi'
//Username = 'madhavi reddy' // it will throw an error

console.log(Username)