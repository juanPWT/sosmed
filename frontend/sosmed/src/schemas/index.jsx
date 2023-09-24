import * as yup from "yup";

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const basicSchemaSignUp = yup.object().shape({
  username: yup
    .string()
    .min(5, "minimal 5 character")
    .max(30, "maximal 30 character")
    .required(),
  email: yup.string().email("please insert valid email").required(),
  password: yup
    .string()
    .min(8)
    .matches(regex, { message: "password at least one letter and one number:" })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "confirm password not match")
    .required(),
});

export const basicSchemaSignIn = yup.object().shape({
  email: yup.string().email("please insert valid email").required(),
  password: yup
    .string()
    .min(8, "password it should  min 8 character")
    .required(),
});
