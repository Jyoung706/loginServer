import express from "express";
import userRouter from "./userRouter";

const route = express.Router();

route.use("/user", userRouter);

export default route;
