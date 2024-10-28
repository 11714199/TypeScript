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
var userId = 12345;
console.log(userId);
// userId = 'Madhavi' // error
var userName = 'Madhavi';
console.log(userName);
//userName = true// error
var isLoggedIn = false;
isLoggedIn = true;
console.log(isLoggedIn);
//isLoggedIn = ''// error
/************************************ Type Inference ***************************/
// Automatic type detection
var id = 12345;
//id = 'Madhavi'
/***************************************** Any *********************************/
// turn of the type checking
var anyValue = 1234;
anyValue = 'madhavi';
console.log(anyValue);
