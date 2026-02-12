const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello, this is me neha!!!!!");
  res.end();
});
server.listen(4800, () => {
  console.log("server is running on http://localhost:4800");
});
