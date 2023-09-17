//import space
import express from "express";
import db from "./config/connect.js";
import UserRoute from "./route/UsersRoute.js";
import PostRoute from "./route/PostRoute.js";
// init for app
const app = express();

//validation db
try {
  await db.authenticate();
  console.log("succes connect to db use sequelize!!!");
} catch (error) {
  console.log(error);
}

// response;
app.use(express.json());

//execution

app.use("/users", UserRoute);
app.use("/status", PostRoute);

app.listen(3001, () => {
  console.log("server running!!!!!");
});
