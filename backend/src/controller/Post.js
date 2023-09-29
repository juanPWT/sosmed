import Post from "../models/PostModel.js";
import Users from "../models/UserModel.js";
import response from "../utils/response.js";

export const uploadStatus = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.body;

  const idclient = await Users.findByPk(userId);
  if (idclient === null)
    return response(400, "failed", "user id not found", res);

  if (!status)
    return response(400, "failed", "status must be filled in !!!", res);

  try {
    const post = await Post.create({
      userId: userId,
      status: status,
    });
    response(200, "success", "success upload status", res);
  } catch (err) {
    console.log(err);
  }
};

export const getStatusByUserId = async (req, res) => {
  const { userId } = req.params;
  if (!userId)
    return response(
      400,
      "failed GET",
      "failed get data status by user id because user id not found",
      res
    );
  try {
    const post = await Post.findAll({
      where: {
        userId: userId,
      },
      include: Users,
      order: [["createdAt", "DESC"]],
    });
    response(200, post, "success GET data by user id ", res);
  } catch (error) {
    console.log(error);
  }
};

export const getAllStatus = async (req, res) => {
  try {
    const post = await Post.findAll({
      include: Users,
      order: [["createdAt", "DESC"]],
    });
    response(200, post, "suscces get all data status!!!", res);
  } catch (err) {
    console.log(err);
  }
};
