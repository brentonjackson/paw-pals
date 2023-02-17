import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

import matchRoutes from "./routes/matchRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const httpServer = createServer(app);
const PORT = 4000;

// middleware
app.use(cors());

// socket stuff
const socketIO = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} just connected!`);

  //Listens and logs the message to the console
  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
    console.log(data);
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  //Listens when a new user joins the server
  socket.on("newUser", (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit("newUserResponse", users);
    socket.disconnect();
  });
});

// routes
app.use("/matches", matchRoutes);
app.use("/profiles", profileRoutes);
app.use("/chat", chatRoutes);

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
