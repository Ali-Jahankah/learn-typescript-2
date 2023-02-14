"use strict";
const names = ["Ali", "Reza"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("This is done!"));
    }, 3000);
});
const merge = (a, b) => Object.assign(a, b);
const mergeMe = merge({ name: "Ali" }, { age: 26, country: "UK" });
console.log(mergeMe);
//# sourceMappingURL=app.js.map