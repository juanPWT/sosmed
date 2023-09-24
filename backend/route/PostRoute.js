import express from "express";
import {
  uploadStatus,
  getStatusByUserId,
  getAllStatus,
} from "../controller/Post.js";
import { verifyLogin } from "../middleware/tokenVerify.js";

const route = express.Router();

route.get("/", verifyLogin, getAllStatus);
route.get("/:userId", getStatusByUserId);
route.post("/:userId", uploadStatus);

export default route;
