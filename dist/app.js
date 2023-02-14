"use strict";
// const names: Array<string> = ["Ali", "Reza"];
// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log("This is done!"));
//   }, 3000);
// });
// const merge = <T extends object, U extends object>(a: T, b: U) =>
//   Object.assign(a, b);
// const mergeMe = merge({ name: "Ali" }, { age: 26, country: "UK" });
// console.log(mergeMe);
class Student {
    constructor() {
        this.data = [];
    }
    addData(d) {
        this.data.push(d);
    }
    removeData(d) {
        if (this.data.indexOf(d) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(d), 1);
    }
    showData() {
        console.log([...this.data]);
    }
}
const newStudent = new Student();
newStudent.addData("Ali");
newStudent.addData("reza");
newStudent.removeData("Ali");
newStudent.showData();
// =====================Array<string>===string[]=====================
// interface Lengthy {
//   length: number;
// }
// const countAndPrint = <T extends Lengthy>(d: T): Array<any> => {
//   let text = "Got no length";
//   if (d.length > 0) {
//     text = `Length is:${d.length}`;
//     return [d, text];
//   }
//   return [d, text];
// };
// console.log(countAndPrint("Ali"));
// console.log(countAndPrint([]));
// console.log(countAndPrint(countAndPrint("ali")));
const findKey = (o, s) => {
    return o[s];
};
console.log(findKey({ name: "Ali" }, "name"));
const createObj = (name, age, arr) => {
    let myObj = {};
    myObj.name = name;
    myObj.age = age;
    myObj.skills = arr;
    return myObj;
};
console.log(createObj("Gholi", 666, ["X", "XX", "XXX"]));
const names = ["reza", "hasan"];
// names.push("xxxxxx")
//# sourceMappingURL=app.js.map