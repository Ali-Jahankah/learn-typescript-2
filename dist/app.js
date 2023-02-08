"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.class = [];
        this.item = name;
    }
    // console.log(`Mr/Ms ${this.name}`);
    // this.name = "Reza"; //Read only!!!!!
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
    static getInstance() {
        if (Person.instance) {
            return this.instance;
        }
        this.instance = new Person(666, ["Gholi"]);
        return this.instance;
    }
    showReports() {
        console.log(`Report:${this.reports[0]}`);
        this.class.push(this.reports[0]);
        console.log(this.class);
    }
    describe() {
        console.log("This is Person with ID: " + this.id);
    }
}
const newStudent = Person.getInstance();
newStudent.settingPrivetItem = "NewStter";
const newPerson = Person.getInstance();
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