import {WebSocketServer} from 'ws';
const wss = new WebSocketServer({port:8080});

wss.on("connection",function(socket){
    console.log("your persitent connection established!");
    
    socket.on("message" ,(e) => {
        if(e.toString() === "ping"){
            socket.send("pong");
        }
        if(e.toString() === "pong"){
            socket.send("ping");
        }
    })
})