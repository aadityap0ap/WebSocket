import {WebSocketServer} from 'ws';
const wss = new WebSocketServer({port:8080});

wss.on("connection",function(socket){
    console.log("your persitent connection established!");
    socket.send("hello");
})