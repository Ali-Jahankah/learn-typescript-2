interface Person1 {
  readonly name: string;
  age: number;
}
interface Greeting extends Person1 {
  greet(value: string): void;
}

class Student2 implements Greeting {
  age = 26;
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(value: string): void {
    console.log(this.name + value);
  }
}
const student2 = new Student2("Ali");

student2.greet(" is Human");
