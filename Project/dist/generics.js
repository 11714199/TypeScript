"use strict";
/****************************************** Generics ***********************************/
// Resuable components
function add(arg1, arg2) {
    return arg1;
}
add(1, 2);
function getUser(arg1) {
    return arg1;
}
getUser({ name: 'Madhu', email: 'm@m.com' });
/******************************** Generics in array and arrow functions ***********************/
function getArrayData(arr) {
    return arr[2];
}
console.log(getArrayData([1, 2, 3, 4]));
// Using arrow fun
const getArr = (arr) => {
    return arr[3];
};
