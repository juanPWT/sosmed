import express from "express";
import {
  uploadStatus,
  getStatusByUserId,
  getAllStatus,
  likePost,
} from "../controller/Post.js";
import { verifyLogin } from "../middleware/tokenVerify.js";

const route = express.Router();

route.get("/", verifyLogin, getAllStatus);
route.get("/:userId", verifyLogin, getStatusByUserId);
route.post("/:userId", verifyLogin, uploadStatus);
route.post("/like/:userId", likePost);

export default route;
