import { createUserDto } from "../Dto/createUser.Dto";
import userDao from "../models/userDao";

const signupService = (signupData: createUserDto) => {
  userDao.createUser(signupData);
};

export default { signupService };
