import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";
import response from "../utils/response.js";

export const tokenRefresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
      return response(401, "unauthorize", "user not allow (unauthorize)", res);

    const users = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!users[0]) {
      return response(403, "forbiden", "refersh tokken not match", res);
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err) {
          return response(403, "forbiden", "token not metch", res);
        }

        const userId = users[0].id;
        const username = users[0].username;
        const email = users[0].email;

        const accessTokken = jwt.sign(
          { userId, username, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        response(200, { accessTokken }, "success GET refresh tokken", res);
      }
    );
  } catch (error) {
    console.log(error);
    return response(500, "Internal Server Error", "An error occurred", res);
  }
};
