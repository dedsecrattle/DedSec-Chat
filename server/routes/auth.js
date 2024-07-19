import express from "express";
import { PrismaClient } from "@prisma/client";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
configDotenv();

const bcryptSalt = bcrypt.genSaltSync(10);

const prisma = new PrismaClient();

router.get("/init", (req, res) => {
  const token = req.cookies.token;
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const result = prisma.user.findUnique({
      where: {
        username: decode.username,
      },
    });

    if (result) {
      res.json({ login: true, data: decode });
    } else {
      res.json({ login: false, data: {} });
    }
  } else {
    res.json({
      login: false,
      data: {},
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out Successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (result) {
    const isPasswordSame = bcrypt.compareSync(password, result.password);

    if (isPasswordSame) {
      res
        .status(200)
        .cookie(
          "token",
          jwt.sign(
            { username: result?.username, id: result?.id },
            process.env.JWT_SECRET
          )
        )
        .json({ message: "Login Successful" });
    } else {
      res.status(401).json({ message: "Incorrect Password" });
    }
  } else {
    res.status(401).json({ message: "username or password is incorrect!" });
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
  const result = await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
    },
  });
  res
    .status(201)
    .cookie(
      "token",
      jwt.sign(
        { username: result?.username, id: result?.id },
        process.env.JWT_SECRET
      )
    )
    .json(result);
});

router.get("/getUsers", async (req, res) => {
  const result = await prisma.user.findMany();
  const users = [];

  for (let i = 0; i < result.length; i++) {
    users.push({
      id: result[i].id,
      username: result[i].username,
      password: result[i].password,
    });
  }
  res.status(200).send(users);
});

export default router;
