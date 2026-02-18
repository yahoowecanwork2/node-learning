const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Home page</h1>");
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.write("<h1>about page</h1>");

    res.end("About Page");
  } else {
    res.write("<h1>other page</h1>");

    res.end("Page Not Found");
  }
});

server.listen(5000);
