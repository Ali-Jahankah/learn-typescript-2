const names: Array<string> = ["Ali", "Reza"];
const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("This is done!"));
  }, 3000);
});

const merge = <T extends object, U extends object>(a: T, b: U) =>
  Object.assign(a, b);
const mergeMe = merge({ name: "Ali" }, { age: 26, country: "UK" });
console.log(mergeMe);
