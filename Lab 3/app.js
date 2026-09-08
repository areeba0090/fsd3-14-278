import http from "http";

const server = http.createServer((req,res) => {   // turn on the server and the number of times request comes respond 
    res.end("<h1>SIH Internal</h1>")
});

server.listen(5000, ()=>{
    console.log("SIH Server is Running");
});