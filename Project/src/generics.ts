/****************************************** Generics ***********************************/
// Resuable components

function add<T>(arg1: T, arg2: T): T {
    return arg1
}

add<number>(1,2)

interface UserData {
    name: string;
    email: string;
}

function getUser<T>(arg1: T): T {
    return arg1
}

getUser<UserData>({ name: 'Madhu', email: 'm@m.com' })

/******************************** Generics in array and arrow functions ***********************/
function getArrayData<T>(arr: T[]): T {
    return arr[2];
}
console.log(getArrayData([1,2,3,4]))

// Using arrow fun
const getArr = <T>(arr: T[]): T =>{
    return arr[3];
}