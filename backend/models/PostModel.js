import { Sequelize } from "sequelize";
import db from "../config/connect.js";

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
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Post;
