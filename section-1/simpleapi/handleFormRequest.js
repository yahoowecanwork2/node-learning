const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    // store buffer chunks
    let body = [];
    // collect data in chunks buffer
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    // when data complete
    req.on("end", () => {
      // combine all buffers
      const fullBody = Buffer.concat(body);
      //   conver buffer to string
      const readableData = fullBody.toString();
      console.log("raw data", readableData);
      //   convert to object form data
      const parsedData = queryString.parse(readableData);
      console.log("parsed data:", parsedData);
      let dataString =
        "My name is " +
        parsedData.name +
        " and my gmail is " +
        parsedData.email;
      console.log(dataString);
      fs.writeFileSync(parsedData.name + ".text", dataString);
      console.log("file created");

      res.writeHead(200, { "content-type": "application.JSON" });
      res.end(JSON.stringify(parsedData));
    });
  } else if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<form  action="/submit" method="POST">
        <input  type="text" name="name" placeholder="Enter your name"/>
        <input  type="email" name="email" placeholder="Enter your email"/>
        <input  type="text" name="password" placeholder="Enter your password"/>
        <button type="submit">Submit</button>
        </form>`);
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});
server.listen(5100);
