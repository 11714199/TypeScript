/******************************************** Function Declaration in type script ********************************/
/* function functionName(arg: type): returnType {
    return value;
}*/
function addTwo(num: number): number {
    return num+2;
}
console.log(addTwo(2))
//console.log(addTwo("Madhavi"))// error


/********************************** for Arrow funtions *****************************/
/**
 * const functionName = (arg.: type): returnType => {
 *          return value
 * }
 */
const getName = (name: string): string => {
    return name;
}
console.log(getName('Madhavi'))


/************************************************ void ********************************/
// nothing it will return
function returnNothing(err: string): void {
    console.log(err)
}
/********************************************** never ******************************/
// throw the error or stop the execution of the program
function handleError(err: string): never {
    throw new Error(err)
}