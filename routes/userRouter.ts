import express from "express";
import userController from "../controllers/userController";

const route = express.Router();

route.post("", userController.signupController);

export default route;
