"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.class = [];
    }
    describe() {
        console.log(`Mr/Ms ${this.name}`);
        // this.name = "Reza"; //Read only!!!!!
    }
}
class Person extends Student {
    constructor(id, reports) {
        super(id, "Ali");
        this.reports = reports;
    }
    showReports() {
        console.log(`Report:${this.reports[0]}`);
        this.class.push(this.reports[0]);
        console.log(this.class);
    }
}
const newStudent = new Student(5, "Hasan");
const newPerson = new Person(666, ["First report..."]);
newPerson.describe();
newPerson.showReports();
console.log(newStudent);
console.log(newPerson);
// Student.describe();
// newStudent.describe();
// const secondOne = {name:"Reza"  id: 8, describe: newStudent.describe };
// console.log(newStudent);
// secondOne.describe();
//# sourceMappingURL=app.js.map