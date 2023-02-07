class Student {
  protected class: string[] = [];
  constructor(private readonly id: number, public name: string) {}
  describe(this: Student) {
    console.log(`Mr/Ms ${this.name}`);
    // this.name = "Reza"; //Read only!!!!!
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
