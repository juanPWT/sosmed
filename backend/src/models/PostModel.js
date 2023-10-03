import { Sequelize } from "sequelize";
import db from "../config/connect.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Post = db.define(
  "post_status",
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
    },
    status_picture: {
      type: DataTypes.STRING,
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

Post.hasOne(Users);
Post.belongsTo(Users);

export default Post;
