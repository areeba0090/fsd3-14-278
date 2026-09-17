import http from "http";
const server = http.createServer((req, res) => {
    res.writeHead(404, {
        "content-type": "text/plain",
    });
    res.end("Wecome to Server");
});

server.listen(4444, () => console.log("Server is running"));