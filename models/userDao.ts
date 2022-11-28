import { createUserDto } from "../Dto/createUser.Dto";
import { myDataSource } from "../typeORM";

const createUser = (signupData: createUserDto) => {
  myDataSource.createQueryBuilder().insert().into("users").values([signupData]);
};

export default { createUser };
