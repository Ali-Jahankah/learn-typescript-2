//Decorators & Factory decorators =>function | Capital letter | Using @ before name | Written On the top of Classes
const Logger = (constructor: Function) => {
  console.log("This is a Looger function");
  console.log(constructor);
};
const SecondLogger = (constructor: Function) => {
  console.log("This is the second Decorator function");
};

const DecFactory = (st: string, id: string) => {
  console.log("Outside deco fact");
  return (constructor: any) => {
    const newStudent = new constructor();
    if (st && id) {
      const h1Tag = document.getElementById(id)!;
      h1Tag.innerHTML = newStudent.name;
    }
    // console.log(constructor);
    console.log("inside Deco factory" + st);
  };
};
//Property Decorator | Accessor decorators | Method decorators | Parameter decorators
@DecFactory("<span>Ali</span>", "test")
@SecondLogger
@Logger
class Student {
  name = "Ali";
  constructor() {
    console.log("Creating student...");
  }
}
const newStudent = new Student();
console.log(newStudent);

const Log1 = (target: any, name: string | Symbol) => {};
class Product {
  name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }
  set price(val: number) {
    if (val > 0 && val) {
      this._price = val;
    } else {
      throw new Error("Insert a posetive value!");
    }
  }
  createTax(tax: number): number {
    return this._price + tax;
  }
}
