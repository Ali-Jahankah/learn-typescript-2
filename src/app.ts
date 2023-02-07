class Student {
  constructor(private name: string, private id: number) {}
  private describe(this: Student) {
    console.log(`Mr/Ms ${this.name}`);
    this.name = "Reza";
  }
}
const newStudent = new Student("Ali", 5);

// Student.describe();
// newStudent.describe();
// const secondOne = {name:"Reza"  id: 8, describe: newStudent.describe };
// console.log(newStudent);
// secondOne.describe();
