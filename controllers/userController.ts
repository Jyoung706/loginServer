import { Request, Response } from "express";
import { createUserDto } from "../Dto/createUser.Dto";
import signupService from "../services/userService";

const signupController = (req: Request, res: Response) => {
  const signupData: createUserDto = req.body;

  signupService.signupService(signupData);

  res.status(201).json({ message: "User Created" });
};

export default { signupController };
