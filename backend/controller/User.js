import Users from "../models/UserModel.js";
import response from "../utils/response.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "username", "email"],
    });
    response(200, users, "success GET data", res);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return response(
      400,
      "bad request",
      "confirm password not match password",
      res
    );
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

export const login = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, users[0].password);
    if (!match) {
      return response(400, "bad request", "wrong password!!!", res);
    }
    const userId = users[0].id;
    const username = users[0].username;
    const email = users[0].email;
    const accessToken = jwt.sign(
      { userId, username, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, username, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    response(200, { accessToken }, "success GET Token jwt", res);
  } catch (error) {
    response(400, "bad request", "email account not register yet!!!", res);
  }
};

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return response(204, "no content", "content(refresh token): null", res);

  const users = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!users[0]) {
    return response(204, "no content", "content(reresh token) not found", res);
  }
  const userId = users[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return response(200, "success", "success logout!", res);
};
