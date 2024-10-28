let tupleSrr: [string, number] = ['madhu', 1]
tupleSrr.push(123)
tupleSrr.unshift(234)
//tupleSrr[0] = 123 // error
console.log(tupleSrr)

// Using type
type UserTuple = [string, number]
let tupleArr: UserTuple = ['Madhavi', 123]
tupleArr.pop()
console.log(tupleArr)