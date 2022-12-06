import { createUserDto } from "../Dto/createUser.Dto";
import { myDataSource } from "../typeORM";

const createUser = (signupData: createUserDto) => {
  // myDataSource
  //   .createQueryBuilder()
  //   .insert()
  //   .into("users", ["account", "password", "phone_number", "address", "birth"])
  //   .values([
  //     signupData.account,
  //     signupData.password,
  //     signupData.phoneNumber,
  //     signupData.address,
  //     signupData.birth,
  //   ])
  //   .execute();

  myDataSource.query(
    `INSERT INTO
      users (name, account, password, phone_number, address, birth)
      VALUES (?,?,?,?,?,?);
    `,
    [
      signupData.name,
      signupData.account,
      signupData.password,
      signupData.phoneNumber,
      signupData.address,
      signupData.birth,
    ]
  );
};

export default { createUser };
