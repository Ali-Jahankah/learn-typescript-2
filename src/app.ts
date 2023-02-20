//Decorators & Factory decorators =>function | Capital letter | Using @ before name | Written On the top of Classes
import { Validate, validateOrReject, IsInt, Length } from "class-validator";
const Logger = (constructor: Function) => {
  console.log("This is a Looger function");
  console.log(constructor);
};
const SecondLogger = (constructor: Function) => {
  console.log("This is the second Decorator function");
};

const DecFactory = (st: string, id: string) => {
  console.log("Outside deco fact");
  return <T extends { new (...args: any[]): { name: string } }>(
    orgConstructor: T
  ) => {
    return class extends orgConstructor {
      constructor(..._: any[]) {
        super();
        if (st && id) {
          const h1Tag = document.getElementById(id)!;
          h1Tag.innerHTML = this.name;
        }
        // console.log(constructor);
        console.log("inside Deco factory" + st);
      }
    };
  };
};
//Property Decorator | Accessor decorators | Method decorators | Parameter decorators
@DecFactory("<span>Ali</span>", "test")
@SecondLogger
@Logger
class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("Creating student...");
  }
}
const newStudent = new Student("Hasan");
console.log(newStudent);

const Log1 = (target: any, name: string | Symbol) => {
  console.log("Property decorator...");
  console.log(target);
  console.log(name);
};
const Log2 = (target: any, name: string, decorator: PropertyDescriptor) => {
  console.log("accessor decorator");
  console.log(target);
  console.log(name);
  console.log(decorator);
};
const Log3 = (
  target: any,
  name: string | Symbol,
  decorator: PropertyDescriptor
) => {
  console.log("Method decorator.-.-.-.-.-.-.-");
  console.log(target);
  console.log(name);
  console.log(decorator);
};
const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Log1
  name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }
  @Log2
  set price(val: number) {
    if (val > 0 && val) {
      this._price = val;
    } else {
      throw new Error("Insert a posetive value!");
    }
  }
  @Log3
  createTax(@Log4 tax: number): number {
    return this._price + tax;
  }
}
const AutoBinder = (_: any, _2: string, descriptor: PropertyDescriptor) => {
  const method = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    get() {
      const boundFn = method.bind(this);
      return boundFn;
    },
  };
  return newDescriptor;
};

class Printer {
  message = "It works";
  @AutoBinder
  showPrint() {
    console.log(this.message);
  }
}
const newPrint = new Printer();
const btn = document.querySelector("button")! as HTMLButtonElement;
btn.addEventListener("click", newPrint.showPrint.bind(newPrint));
