import express from "express";
import userRouter from "./routes/user.router";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
//   path:""
});

const app = express();

app.use('/api/user',userRouter)


app.listen(3001)