import express, { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import { roomMiddleware } from "../middleware/roomMiddleware.js";

const userRouter: Router = express.Router();

userRouter.post("/signup", async (req, res) => {
  //db call 
  res.json({
    userId:"123"
  })
});

userRouter.post("/signin", async (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

userRouter.post("/room", roomMiddleware, async (req, res) => {
  //db call 
  res.json({
    roodId:123
  })
});

export default userRouter;
