import express, { Router } from "express";
import jwt from "jsonwebtoken";
import { roomMiddleware } from "../middleware/roomMiddleware.js";
import { JWT_SECRET } from "@repo/backend-common/config";
import {
  CreateRoomSchema,
  CreateUserSchema,
  SigninSchema,
} from "@repo/common/types";

const userRouter: Router = express.Router();

userRouter.post("/signup", async (req, res) => {
  //db call
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      msg: "incorrect inputs",
    });
    return; 
  }

  res.json({
    userId: "123",
  });
});

userRouter.post("/signin", async (req, res) => {
  const data = SigninSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      msg: "incorrect inputs",
    });
    return; 
  }

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

  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      msg: "incorrect inputs",
    });
    return;
  }

  res.json({
    roodId: 123,
  });
});

export default userRouter;
