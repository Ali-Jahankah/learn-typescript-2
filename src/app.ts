class Student {
  private item: string;

  protected class: string[] = [];
  constructor(private readonly id: number, public name: string) {
    this.item = name;
  }
  describe(this: Student) {
    console.log(`Mr/Ms ${this.name}`);
    // this.name = "Reza"; //Read only!!!!!
  }
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
  constructor(id: number, public reports: string[]) {
    super(id, "Ali");
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
