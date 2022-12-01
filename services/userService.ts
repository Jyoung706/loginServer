import { createUserDto } from "../Dto/createUser.Dto";
import userDao from "../models/userDao";

const signupService = (signupData: createUserDto) => {
  console.log(signupData);

  userDao.createUser(signupData);
};

export default { signupService };
