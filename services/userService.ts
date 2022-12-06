import bcrypt from "bcrypt";
import { createUserDto } from "../Dto/createUser.Dto";
import userDao from "../models/userDao";

const signupService = (signupData: createUserDto) => {
  const saltRound = 10;
  const salt = bcrypt.genSaltSync(saltRound);

  signupData.password = bcrypt.hashSync(signupData.password, salt);

  userDao.createUser(signupData);
};

export default { signupService };
