const http = require("http");

function rqListener(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Node</h1></body>");
    res.write("</html>");
    res.end();
}

// http.createServer((req, res) => {});
// http.createServer(function (req, res) {});

const server = http.createServer(rqListener);

server.listen(3000);
