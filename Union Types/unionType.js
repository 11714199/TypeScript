var data;
data = 1234;
data = 'madhavi';
data = true;
console.log(data);
var details = { name: "Madhavi", age: 24, pincode: 540030 };
console.log(details);
console.log(getId(1));
console.log(getId('Madhavi'));
function getId(id) {
    if (typeof id == 'string') {
        return id.toLowerCase();
    }
    else {
        return id;
    }
}
/****************************************** in Arrays *****************************/
var numbertArr = [1, 2, 3, 4];
var stringArr = ['1', '2', '3', '4'];
var both = [1, 2, '3', '4'];
console.log(numbertArr, stringArr, both);
var Username;
Username = 'madhavi';
Username = 'madhavi reddy';
console.log(Username);
