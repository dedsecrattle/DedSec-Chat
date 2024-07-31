import expresss from "express";
import { configDotenv } from "dotenv";
import { PrismaClient } from "@prisma/client";

const router = expresss.Router();

const prisma = new PrismaClient();

router.post("/add", async (req, res) => {
  const { sender, receiver, message } = req.body;
  const result = await prisma.message.create({
    data: {
      senderId: sender,
      receiverId: receiver,
      content: message,
    },
  });

  res.json(result);
});

export default router;
