"use strict";
class Car {
    drive() {
        console.log("Drive car...");
    }
}
class Truck {
    drive() {
        console.log("Drive Truck...");
    }
    carLoad(n) {
        console.log("Carload " + n);
    }
}
const driving = (v) => {
    v.drive();
    if (v instanceof Truck) {
        v.carLoad(666);
    }
};
const v1 = new Car();
const v2 = new Truck();
driving(v2);
let person;
let ali;
person = {
    name: "ali",
    date: new Date(),
};
const getDetails = (val) => {
    if ("age" in val) {
        console.log("Age: " + val.age);
    }
    else {
        console.log("Date: " + val.date);
    }
};
getDetails({ name: "Ali", date: new Date() });
getDetails({ name: "Reza", age: 5 });
console.log(person);
//# sourceMappingURL=intersectionTypes.js.map