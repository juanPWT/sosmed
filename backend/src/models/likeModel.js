import { Sequelize } from "sequelize";
import db from "../config/connect.js";

//model
import Users from "./UserModel.js";
import Post from "./PostModel.js";

const { DataTypes } = Sequelize;

const Like = db.define("like", {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//join
Like.hasOne(Users);
Like.hasOne(Post);
Like.belongsTo(Users);
Like.belongsTo(Post);

export default Like;
