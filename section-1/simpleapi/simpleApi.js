const http = require("http");
const userData = [
  {
    id: "1",
    name: "neha",
    email: "ny663922@gmail.com",
  },
  {
    id: "2",
    name: "varsha",
    email: "xyz@gmail.com",
  },
  {
    id: "3",
    name: "sam",
    email: "abc@gmail.com",
  },
  {
    id: "4",
    name: "peter",
    email: "mnc@gmail.com",
  },
];
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", `application/json`);
  res.write(JSON.stringify(userData));
  res.end();
});
server.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
