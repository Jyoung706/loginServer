import express from "express";
import userController from "../controllers/userController";
import { asyncWrap } from "../middleware/asyncwrap";
import { body } from "express-validator";
import { validatorErrorChecker } from "../middleware/validatorErrorchecker";
import { signupValidator } from "../validateData/userValidate";

const route = express.Router();

route.post("", signupValidator, asyncWrap(userController.signupController));

export default route;
