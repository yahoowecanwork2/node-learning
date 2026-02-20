const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile("file.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.write("internal server error");
      res.end();
      return;
    }
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(data);
    res.end();
  });
});
server.listen(5100);
