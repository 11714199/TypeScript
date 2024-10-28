/******************************* Primitive Types ***************************/
// number
// string
// boolean

/********************************** ******************************************/
// null
// undefined
// void
// object
// array
// tuple
// any
// never
// ect...

//Primitive types
let userId: number = 12345
console.log(userId)
// userId = 'Madhavi' // error

let userName: string = 'Madhavi'
console.log(userName)
//userName = true// error

let isLoggedIn: boolean = false;
isLoggedIn = true;
console.log(isLoggedIn)
//isLoggedIn = ''// error

/************************************ Type Inference ***************************/
// Automatic type detection
let id = 12345
//id = 'Madhavi'

/***************************************** Any *********************************/
// turn of the type checking
let anyValue: any = 1234
anyValue = 'madhavi'
console.log(anyValue)