import Users from "../models/UserModel.js";
import response from "../utils/response.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//import middleware
import uploadProfil from "../middleware/imgUploadProfil.js";

//redy
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
    const profil_picture = users[0].profil_picture;
    const urlImg = `http://localhost:3001/ImgProfil/${profil_picture}`;
    const accessToken = jwt.sign(
      { userId, username, email, urlImg },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, username, email, urlImg },
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

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.findByPk(userId, {
      attributes: ["username", "email", "profil_picture"],
    });
    if (user === null) return response(404, null, "user id ny found", res);
    let user2 = user.profil_picture;
    if (user2) {
      user2 = `http://localhost:3001/ImgProfil/${user2}`;
    }
    response(
      200,
      { data: user, urlImg: user2 },
      "success gets user by id",
      res
    );
  } catch (error) {
    response(500, null, "server failed !!! get user by id", res);
  }
};

export const update = async (req, res) => {
  const { userId } = req.params;
  const validate = await Users.findByPk(userId);
  if (validate === null) return response(404, null, "user id bot found!!", res);

  const { username, email } = req.body;
  if (!username && !email)
    return response(406, null, "no accepted for update data", res);

  try {
    if (username && email === "") {
      const user = await Users.update(
        { username: username },
        {
          where: {
            id: userId,
          },
        }
      );
      const res2 = {
        statusQuery: user,
      };

      response(200, res2, "success update username", res);
    } else if (email && username === "") {
      const user = await Users.update(
        { email: email },
        {
          where: {
            id: userId,
          },
        }
      );
      const res2 = {
        statusQuery: user,
      };

      response(200, res2, "success update email", res);
    } else {
      const user = await Users.update(
        {
          email: email,
          username: username,
        },
        {
          where: {
            id: userId,
          },
        }
      );
      const res2 = {
        statusQuery: user,
      };

      response(200, res2, "success update email and username", res);
    }
  } catch (error) {
    response(500, null, "server failed !! cant update user", res);
  }
};

//development
export const updateImageProfil = async (req, res) => {
  uploadProfil(req, res, async (err) => {
    if (err)
      return response(
        500,
        null,
        "server failed cant update profil image ",
        res
      );

    const { userId } = req.params;
    const validate = await Users.findByPk(userId);
    if (validate === null)
      return response(404, null, "user id bot found!!", res);

    const profil_picture = req.file ? req.file.filename : "defaultProfil.jpg";
    try {
      const user = await Users.update(
        { profil_picture: profil_picture },
        {
          where: {
            id: userId,
          },
        }
      );

      response(200, user, "success change profil image", res);
    } catch (error) {
      response(404, null, "file must be enter", res);
    }
  });
};
