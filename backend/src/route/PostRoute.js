import express from "express";
import {
  uploadStatus,
  getStatusByUserId,
  getAllStatus,
} from "../controller/Post.js";
import { verifyLogin } from "../middleware/tokenVerify.js";

const route = express.Router();

route.get("/", verifyLogin, getAllStatus);
route.get("/:userId", verifyLogin, getStatusByUserId);
route.post("/:userId", verifyLogin, uploadStatus);

export default route;
