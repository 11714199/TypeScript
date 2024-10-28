/******************************************** Function Declaration in type script ********************************/
/* function functionName(arg: type): returnType {
    return value;
}*/
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2));
//console.log(addTwo("Madhavi"))// error
/********************************** for Arrow funtions *****************************/
/**
 * const functionName = (arg.: type): returnType => {
 *          return value
 * }
 */
var getName = function (name) {
    return name;
};
console.log(getName('Madhavi'));
