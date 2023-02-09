"use strict";
let customFunction;
customFunction = (val) => {
    if (val) {
        console.log("Custom function" + val);
    }
    else {
        console.log("Custom - no value");
    }
};
class Student2 {
    constructor(n) {
        this.age = 26;
        this.name = n;
    }
    greet(value) {
        if (this.name) {
            console.log(this.name + value);
        }
        else {
            console.log(value + " There is no name");
        }
    }
}
const student2 = new Student2("");
student2.greet(" is Human");
customFunction("X*s");
//# sourceMappingURL=interfaces.js.map