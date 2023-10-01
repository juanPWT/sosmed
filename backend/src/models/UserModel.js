import { Sequelize } from "sequelize";
import db from "../config/connect.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
    profil_picture: {
      type: DataTypes.STRING,
      defaultValue: "defaultProfil.jpg",
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
