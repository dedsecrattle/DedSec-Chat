import express from "express";
import { configDotenv } from "dotenv";
import authRouter from "./routes/auth.js";
import { cors } from "cors";

configDotenv();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT:`, PORT);
});
