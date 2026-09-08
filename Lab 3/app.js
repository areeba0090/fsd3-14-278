import http from "http";
// import  * as teams from "teams.js";
import { getAllTeams,newTeam } from "./teams.js";
import { parse as parseURL } from "url";
const PORT = 5000;

const sendJSON = (res, statusCode,data) => {
    res.writeHead(statusCode,{"content-type":"application/json"});
    res.end(data === "undefined" ? "" : JSON.stringify(data));
};

const parseJSONBody = (req) => {
    new Promise((reqsolve,reject) => {
        let body ="";
        req.on("data",(chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                reqsolve(body ? JSON.parse(body) : {});
            }
            catch (error) {
                reject(error);
            }
        });
    });
};

const server = http.createServer(async (req,res) => {
    const { pathname, query } = parseURL(req.url, true);
    console.log("Pathname:",pathname);
    console.log("Query:",query);;
    console.log("Method:",method);

    if(pathname === "/api/v1/teams" && method === "GET") {
        let teams = getAllTeams();
        return sendJSON(res, 200, teams);
    }
    else if (pathname === "/api/v1/teams" && method === "POST") {
         const {tname,tl,members} = await parseJSONBody(req);
         if(!tname || !tl || !members)
            return sendJSON(400, )
         addTeam(newTeam);
         return sendJSON(res, 201, team);
    }
    else {
        res.statusCode = 404;
    }
});
// const server = http.createServer((req,res) => {   // turn on the server and the number of times request comes respond 
    
//     if(req.url === "/" && req.method == "GET"){
//         const teams = getAllTeams();
//         console.log("Teams: ", teams)
//         res.write(JSON.stringify(teams));
//     }
//     else {
//         res.statusCode = 404;
//     }
//     res.end();
// });

server.listen(PORT, ()=>{
    console.log("SIH Server is Running at", PORT);
});