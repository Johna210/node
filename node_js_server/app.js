const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            '<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        // read a buffer of data chunk by chunk and
        // push it to the body array
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // Buffer the chunks in order to interact with them
        req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Node</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);
