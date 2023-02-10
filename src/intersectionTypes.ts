type named = {
  name: string;
  date: Date;
};
type details = {
  name: string;
  age: number;
};
class Car {
  drive() {
    console.log("Drive car...");
  }
}
class Truck {
  drive() {
    console.log("Drive Truck...");
  }
  carLoad(n: number) {
    console.log("Carload " + n);
  }
}
type Vehicle = Truck | Car;
const driving = (v: Vehicle) => {
  v.drive();
  if (v instanceof Truck) {
    v.carLoad(666);
  }
};
const v1 = new Car();
const v2 = new Truck();
driving(v2);
type emp = named | details;
let person: named;
let ali: emp;

person = {
  name: "ali",
  date: new Date(),
};
const getDetails = (val: emp) => {
  if ("age" in val) {
    console.log("Age: " + val.age);
  } else {
    console.log("Date: " + val.date);
  }
};
getDetails({ name: "Ali", date: new Date() });
getDetails({ name: "Reza", age: 5 });
console.log(person);

type Combinable = number | string;
function add(v: number, z: number): number;
function add(v: string, z: string): string;
function add(v: Combinable, z: Combinable) {
  if (typeof v === "number" && typeof z === "number") {
    return v + z;
  }
  return String(v) + String(z);
}
add("5", "5");
interface ErrorContainer {
  [prop: string]: string;
}
let test: ErrorContainer;
test = {
  email: "Email is not corrected",
  password: "Password is not correct",
};
interface Horse {
  type: "horse";
  speed: number;
}
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
type Animal = Horse | Bird;
const showSpeed = (anim: Animal) => {
  switch (anim.type) {
    case "bird":
      console.log(anim.flyingSpeed);
      break;
    case "horse":
      console.log(anim.speed);
      break;
    default:
      return;
  }
};
showSpeed({ type: "horse", speed: 666 });
