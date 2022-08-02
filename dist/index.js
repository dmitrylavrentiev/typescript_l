"use strict";
let a = 4123234;
a = 'qwe';
let b;
let numbers = [1, 2, 3];
let numbers1 = [1, 2, 3];
let arr = [];
let user = [1, 'Bob'];
let myType = "m";
function calculator(a, b, c = "+") {
    if (c === "+")
        return a + b;
    if (c === "-")
        return a - b;
    return a;
}
calculator(2, 3, "+");
calculator(2, 3);
calculator(2, 3, "-");
const user1 = { id: 0,
    name: 'Bob',
    getDate: (date) => {
        console.log(date);
    },
};
user1.name = 'Pop';
const user2 = {
    id: 1,
    name: 'Qwerty',
    getDate: (date) => {
        console.log(date);
    }
};
function courseConverter(value, course) {
    if (typeof value === 'number')
        return value * course;
    if (typeof value === 'string')
        return parseInt(value) * course;
    return 0;
}
courseConverter(100, 1.4);
courseConverter('100USD', 1.4);
const admin = {
    id: 1,
    name: 'Qwerty',
    getDate: (date) => {
        console.log(date);
    },
    isAdmin: true,
    createUser() {
        return 123;
    },
};
const side = 'Right';
//# sourceMappingURL=index.js.map