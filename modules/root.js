const http = require("http");
const formData = require("./formData");
const formSummit = require("./formSummit");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    formData(req, res);
  } else if (req.url === "/sumit") {
    formSummit(req, res);
  } else {
    res.end("hello neha !!!");
  }
});

server.listen(5400, () => {
  console.log("Server running on port 5400");
});
