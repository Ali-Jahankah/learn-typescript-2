var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Length, validate, Min, Max } from "class-validator";
class Course {
    constructor(title, task) {
        this.title = title;
        this.task = task;
    }
}
__decorate([
    Length(1, 10)
], Course.prototype, "title", void 0);
__decorate([
    Min(2),
    Max(8)
], Course.prototype, "task", void 0);
const form = document.getElementById("form");
const title = document.getElementById("title");
const task = document.getElementById("task");
const validation = (course) => {
    validate(course).then((err) => {
        if (err.length > 0) {
            console.log("Validation error", err);
        }
        else {
            console.log("Course created");
        }
    });
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newCourse = new Course(title.value, +task.value);
    validation(newCourse);
});
const x = new Course("TS", 2);
console.log(x);
//# sourceMappingURL=app.js.map