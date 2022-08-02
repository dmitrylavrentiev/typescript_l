
//any
let a: any = 4_123_234 // same 4123234
a = 'qwe'

let b; // :any

//array
let numbers = [1, 2, 3] // :number[]
let numbers1: number[] = [1, 2, 3]

let arr = [] // :any[]


//tuples
let user: [number, string] = [1, 'Bob']
//user = [1, 'Rich', true] - error


//enums
const enum Type { Hurd, Medium, Soft} // by def Hord === 0, Medium === 1, Soft === 2
const enum Type1 { Hurd = 1, Medium, Soft} // Medium === 2, Soft === 3
const enum Type2 { Hurd = 'h', Medium = 'm', Soft = 's'}

let myType: Type2 = Type2.Medium // myType === 'm'

//functions
const enum Calc { Plus = '+', Minus = '-'}
function calculator(a: number, b: number, c = Calc.Plus): number { // a: number - parameter type, : number - return type
    if(c === Calc.Plus)
        return a + b
    if(c === Calc.Minus)
        return a - b

    return a
}

calculator(2, 3, Calc.Plus)
calculator(2, 3) // same calculator(2, 3, Calc.Plus)
calculator(2, 3,Calc.Minus)


//objects
const user1: {
    readonly id: number,
    name: string,
    isOnline?: boolean, // optional parameter
    getDate: (date: Date) => void
} = { id: 0,
     name: 'Bob',
     getDate: (date: Date) => {
       console.log(date);
     },
    } 
user1.name = 'Pop'
//user1.id = 4 - error (read only)



//Alias (refactor //object example)
type User1 = {
    readonly id: number,
    name: string,
    isOnline?: boolean, // optional parameter
    getDate: (date: Date) => void
}
const user2: User1 = {
    id: 1,
    name: 'Qwerty',
    getDate: (date: Date) => {
        console.log(date);
      }
}



//Union types
function courseConverter(value: number | string, course: number): number {
    if(typeof value === 'number')
        return value * course
    if(typeof value === 'string')
        return parseInt(value) * course
        
    return 0
}

courseConverter(100, 1.4)
courseConverter('100USD', 1.4)


//Intersection types
type IntersectionUser = User1
type Admin = {
    isAdmin: boolean,
    createUser: () => number
}

const admin: IntersectionUser & Admin = { // admin have propertys from IntersectionUser and Admin
    id: 1,
    name: 'Qwerty',
    getDate: (date: Date) => {
        console.log(date);
      },
    isAdmin: true,
    createUser() {
        return 123
    }, 
}


// Literal Types
type Side = 'Left' | 'Right'
const side: Side = 'Right' // side can be only 'Left' or 'Right'



// Nullable Types
function hello(name: string | null | undefined) : string {
    if(name)
        console.log(`Hello ${name}`);
        return `Hello ${name}`

    if(name === null)
        console.log(`Hello User`);
        return `Hello User`
    
    console.log(`Hello Any Users`);
    return `Hello Any Users`

}


