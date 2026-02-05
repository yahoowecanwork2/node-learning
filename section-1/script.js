const fs = require("fs");

const text = fs.readFileSync("./hello.txt");
console.log(text.toString());
console.log("Run & Debug test working");
