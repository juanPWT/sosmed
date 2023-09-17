import Users from "../models/UserModel.js";
import response from "../utils/response.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    response(200, users, "success GET data", res);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return response(400, "failed", "confirm password not match password", res);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const users = await Users.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    response(200, "success", "success resgister", res);
  } catch (error) {
    console.log(error);
  }
};
