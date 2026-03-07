const fs = require("fs");
// fs.writeFileSync("./text/apple.js", "this is a fruit");
// fs.writeFileSync("./text/banana.js", "this is a fruit");
// fs.unlinkSync("./text/banana.js");
// const data = fs.readFileSync("./text/apple.js", "utf-8");
// console.log(data);
// fs.appendFileSync("./text/apple.js", "and this is good for health");
// console.log(process.argv[1]);
const operation = process.argv[2];
if (operation === "write") {
  const name = process.argv[3];
  const contant = process.argv[4];
  const fullName = "text/" + name + ".txt";
  console.log(fullName, contant);
  fs.writeFileSync(fullName, contant);
} else if (operation === "read") {
  const name = process.argv[3];
  //   const contant = process.argv[4];
  const fullName = "text/" + name + ".txt";
  //   console.log(fullName, contant);
  const data = fs.readFileSync(fullName, "utf-8");
  console.log(data);
} else if (operation === "update") {
  const name = process.argv[3];
  const contant = process.argv[4];
  const fullName = "text/" + name + ".txt";
  console.log(fullName, contant);
  fs.appendFileSync(fullName, contant);
  //   console.log(data);
} else if (operation === "delete") {
  const name = process.argv[3];
  //   const contant = process.argv[4];
  const fullName = "text/" + name + ".js";
  console.log(fullName);
  fs.unlinkSync(fullName);
  //   console.log(data);
} else {
}
