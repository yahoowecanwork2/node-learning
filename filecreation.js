const { error, log } = require("console");
const fs = require("fs");
// fs.writeFileSync("test.txt", "heyyy!!!");
// readfile
// const fs = require("fs");

// fs.writeFileSync("test.txt", "heyyy!!!");

// readFile
fs.readFile("hello.txt", "utf8", (error, data) => {
  if (error) {
    console.log("❌ ERROR FOUND:");
    console.log(error.message);
  } else {
    console.log("File Data:", data);
  }
});
