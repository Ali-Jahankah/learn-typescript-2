"use strict";
class Student2 {
    constructor(n) {
        this.age = 26;
        this.name = n;
    }
    greet(value) {
        console.log(this.name + value);
    }
}
const student2 = new Student2("Ali");
student2.greet(" is Human");
//# sourceMappingURL=interfaces.js.map