//import space
import express from "express";
import db from "./src/config/connect.js";
import UserRoute from "./src/route/UsersRoute.js";
import PostRoute from "./src/route/PostRoute.js";
import dotEnv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// init for app
const app = express();
dotEnv.config();
const server = http.createServer(app);

//validation db
try {
  await db.authenticate();
  console.log("succes connect to db use sequelize!!!");
} catch (error) {
  console.log(error);
}

// response;
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//io init
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_messege", (data) => {
    if (data && data.msg) {
      socket.to(data.idRoom).emit("recive_messege", data.msg);
    }
  });
});

//execution

app.use("/users", UserRoute);
app.use("/status", PostRoute);

server.listen(3001, () => {
  console.log("server running!!!!!");
});
