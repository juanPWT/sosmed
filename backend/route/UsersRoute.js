import express from "express";
import { getUsers, register } from "../controller/User.js";
const route = express.Router();

route.get("/", getUsers);
route.post("/", register);

export default route;
