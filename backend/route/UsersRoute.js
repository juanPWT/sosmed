import express from "express";
import { getUsers, register, login, logout } from "../controller/User.js";
import { tokenRefresh } from "../controller/RefreshToken.js";
import { verifyLogin } from "../middleware/tokenVerify.js";

const route = express.Router();

route.get("/", verifyLogin, getUsers);
route.post("/", register);
route.post("/login", login);
route.get("/token", tokenRefresh);
route.delete("/logout", logout);

export default route;
