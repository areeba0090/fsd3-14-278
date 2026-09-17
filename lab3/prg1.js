import http from 'http';

const server = http.createServer((req, res) => {
    console.log("<h2>Welcome to NODE JS</h2>");
    console.log(req.url);

    console.log("Request Method: ");
    console.log(req.method);

    console.log("Request Header: ");
    console.log(req.header);

    // console.log("Socket info: ");
    // console.log(req.socket);

    console.log("header's host: ");
    console.log(req.headers.host);

    res.end("Hello") ;
});

const port = 4444 ;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});