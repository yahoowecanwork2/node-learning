const http = require("http");
const server = http.createServer((req, res) => {
  const name = "neha";
  const age = 22;

  res.write(`hello, my name is ${name}.and i am ${age} old.`);
  res.end();
});
server.listen(4800, () => {
  console.log("server is running on http://localhost:4800");
});
