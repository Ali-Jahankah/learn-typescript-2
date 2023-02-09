interface custumFn {
  (val?: string): void;
}
let customFunction: custumFn;
customFunction = (val?: string) => {
  if (val) {
    console.log("Custom function" + val);
  } else {
    console.log("Custom - no value");
  }
};
interface Person1 {
  readonly name?: string;
  age: number;
}
interface Greeting extends Person1 {
  greet(value: string): void;
}

class Student2 implements Greeting {
  age = 26;
  name?: string;
  constructor(n?: string) {
    this.name = n;
  }
  greet(value: string): void {
    if (this.name) {
      console.log(this.name + value);
    } else {
      console.log(value + " There is no name");
    }
  }
}
const student2 = new Student2("");

student2.greet(" is Human");
customFunction("X*s");
