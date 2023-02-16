"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Decorators & Factory decorators =>function | Capital letter | Using @ before name | Written On the top of Classes
const Logger = (constructor) => {
    console.log("This is a Looger function");
    console.log(constructor);
};
const SecondLogger = (constructor) => {
    console.log("This is the second Decorator function");
};
const DecFactory = (st, id) => {
    console.log("Outside deco fact");
    return (orgConstructor) => {
        return class extends orgConstructor {
            constructor(..._) {
                super();
                if (st && id) {
                    const h1Tag = document.getElementById(id);
                    h1Tag.innerHTML = this.name;
                }
                // console.log(constructor);
                console.log("inside Deco factory" + st);
            }
        };
    };
};
//Property Decorator | Accessor decorators | Method decorators | Parameter decorators
let Student = class Student {
    constructor() {
        this.name = "Ali";
        console.log("Creating student...");
    }
};
Student = __decorate([
    DecFactory("<span>Ali</span>", "test"),
    SecondLogger,
    Logger
], Student);
const newStudent = new Student();
console.log(newStudent);
const Log1 = (target, name) => {
    console.log("Property decorator...");
    console.log(target);
    console.log(name);
};
const Log2 = (target, name, decorator) => {
    console.log("accessor decorator");
    console.log(target);
    console.log(name);
    console.log(decorator);
};
const Log3 = (target, name, decorator) => {
    console.log("Method decorator.-.-.-.-.-.-.-");
    console.log(target);
    console.log(name);
    console.log(decorator);
};
const Log4 = (target, name, position) => {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
    set price(val) {
        if (val > 0 && val) {
            this._price = val;
        }
        else {
            throw new Error("Insert a posetive value!");
        }
    }
    createTax(tax) {
        return this._price + tax;
    }
}
__decorate([
    Log1
], Product.prototype, "name", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "createTax", null);
const AutoBinder = (_, _2, descriptor) => {
    const method = descriptor.value;
    const newDescriptor = {
        get() {
            const boundFn = method.bind(this);
            return boundFn;
        },
    };
    return newDescriptor;
};
class Printer {
    constructor() {
        this.message = "It works";
    }
    showPrint() {
        console.log(this.message);
    }
}
__decorate([
    AutoBinder
], Printer.prototype, "showPrint", null);
const newPrint = new Printer();
const btn = document.querySelector("button");
btn.addEventListener("click", newPrint.showPrint.bind(newPrint));
//# sourceMappingURL=app.js.map