import * as yup from "yup";

import {
  msgEmailInvalid,
  msgEmailRequired,
  msgMinCharacter,
  msgPassword,
  msgPasswordRequired,
} from "@/app/utils/Auth/Auth.Message";
import { validatePassword } from "@/app/utils/Regex";

export const signInSchema = yup.object().shape({
  email: yup.string().required(msgEmailRequired).email(msgEmailInvalid),
  password: yup
    .string()
    .required(msgPasswordRequired)
    .min(6, msgMinCharacter(6))
    .matches(validatePassword, msgPassword),
});
