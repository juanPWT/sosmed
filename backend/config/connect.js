import { Sequelize } from "sequelize";

const db = new Sequelize("sosmed", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
