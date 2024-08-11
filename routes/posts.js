import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

//Get all posts
router.get("/", getPosts);

//Get single posts
router.get("/:id", getPost);

//Create new post
router.post("/", createPost);

//Update post
router.put("/:id", updatePost);

//Delete post
router.delete("/:id", deletePost);

export default router;
