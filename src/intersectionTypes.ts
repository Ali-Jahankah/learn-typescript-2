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
