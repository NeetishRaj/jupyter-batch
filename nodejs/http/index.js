// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

const http = require("http");
const url = require("url");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  //   console.log(Object.keys(req));
  console.log(`Just got a request with HTTP method ${req.method}`);
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);
