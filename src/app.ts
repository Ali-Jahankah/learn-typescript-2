abstract class Student {
  private item: string;

  protected class: string[] = [];
  constructor(public readonly id: number, public name: string) {
    this.item = name;
  }

  abstract describe(this: Student): void;
  // console.log(`Mr/Ms ${this.name}`);
  // this.name = "Reza"; //Read only!!!!!

  static showLog(value: number | string) {
    console.log(value);
  }
  get gettingPrivet() {
    return this.item;
  }
  set settingPrivetItem(value: string) {
    if (value) {
      console.log(`${value} exist`);
      this.item = "Item public";
      console.log(this.item);
    }
    new Error("There is an error");
  }
}

class Person extends Student {
  private static instance: Person;
  private constructor(id: number, public reports: string[]) {
    super(id, "Ali");
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
