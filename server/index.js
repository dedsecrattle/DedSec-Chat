import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

configDotenv();
const app = express();

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

app.listen(PORT, () => {
  console.log(`Server is Running on PORT:`, PORT);
});
