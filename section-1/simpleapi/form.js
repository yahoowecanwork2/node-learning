const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  if (req.url === "/") {
    res.write(`
      <form action="/sumit" method="POST">
        <input type="text" placeholder="name" name="name"></input>
        <input type="email" placeholder="email" name="email"></input>
        <button>summited</button>
      </form>`);
    res.end();
  } else if (req.url === "/sumit") {
    res.write(`<h1>html summit</h1>`);
  }
});
server.listen(5100);
