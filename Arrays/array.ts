const arr: string[] = []
arr.push('Madhavi')
arr.push('Asam');
console.log(arr)

type UserDetails = {
    name: string,
    age: number
}
const user: UserDetails[] = []
user.push({ name: 'Madhavi', age: 24 })
console.log(user)

const twoArray: number[][] = [
    [1,2,3],
    [4,5,6]
]
console.log(twoArray)