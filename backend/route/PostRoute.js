import express from "express";
import {
  uploadStatus,
  getStatusByUserId,
  getAllStatus,
} from "../controller/Post.js";

const route = express.Router();

route.get("/", getAllStatus);
route.get("/:userId", getStatusByUserId);
route.post("/:userId", uploadStatus);

export default route;
