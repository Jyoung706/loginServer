import { body } from "express-validator";
import { validatorErrorChecker } from "../middleware/validatorErrorchecker";

const signupValidator = [
  body("name")
    .notEmpty()
    .withMessage("name cannot be empty")
    .isLength({ min: 2, max: 10 })
    .withMessage("name length is 2~10")
    .isString()
    .withMessage("name must be String"),
  body("account")
    .notEmpty()
    .withMessage("account cannot be empty")
    .matches(/^[a-zA-Z][0-9a-zA-Z]{2,50}$/)
    .withMessage("account length is 2~50"),
  body("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage("Password must be at least 8 characters, one or more characters and one number"),
  body("phoneNumber")
    .notEmpty()
    .withMessage("phone number cannot be empty")
    .isLength({ min: 7, max: 8 })
    .isMobilePhone("any"),
  body("address").notEmpty().withMessage("address cannot be empty"),
  body("birth").isEmpty({ ignore_whitespace: true }),
  validatorErrorChecker,
];

export { signupValidator };
