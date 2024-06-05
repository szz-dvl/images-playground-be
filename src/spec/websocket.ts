import { WebSocketServer, WebSocket } from "ws";
import * as http from "http";

const sockets: Array<WebSocket> = [];

export const initWebSockets = (server: http.Server) => {

  const ws = new WebSocketServer(
    { server }
  );
  
  ws.on("error", console.error);
  ws.on("connection", (ws) => {
    sockets.push(ws);
  });

  console.log(`WebSockets Server listening at http://localhost:${process.env.PORT || 3000}`);
};

export const broadcast = (message: Record<string, any>) => {
    sockets.map(socket => {
        socket.send(JSON.stringify(message))
    })
};
