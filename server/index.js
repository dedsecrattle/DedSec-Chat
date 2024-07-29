import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

configDotenv();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(
    "A new Client Connected! with username",
    socket.handshake.query.username
  );
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["content-type"],
    methods: "*",
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is Running on Port - ${PORT}`);
});
