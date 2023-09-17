import express from "express";
import { uploadStatus, getStatusByUserId } from "../controller/Post.js";

const route = express.Router();

route.get("/:userId", getStatusByUserId);
route.post("/:userId", uploadStatus);

export default route;
