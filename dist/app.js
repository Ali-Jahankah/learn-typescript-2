"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.class = [];
        this.item = name;
    }
    describe() {
        console.log(`Mr/Ms ${this.name}`);
        // this.name = "Reza"; //Read only!!!!!
    }
    static showLog(value) {
        console.log(value);
    }
    get gettingPrivet() {
        return this.item;
    }
    set settingPrivetItem(value) {
        if (value) {
            console.log(`${value} exist`);
            this.item = "Item public";
            console.log(this.item);
        }
        new Error("There is an error");
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
newStudent.settingPrivetItem = "NewStter";
const newPerson = new Person(666, ["First report..."]);
newPerson.describe();
newPerson.showReports();
console.log(newStudent);
console.log(newPerson);
Student.showLog("Hi");
// Student.describe();
// newStudent.describe();
// const secondOne = {name:"Reza"  id: 8, describe: newStudent.describe };
// console.log(newStudent);
// secondOne.describe();
//# sourceMappingURL=app.js.map