import { Post } from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || age === undefined || age === null) {
      return res.status(400).json({ message: "All fields (name, description, age) are required" });
    }

    const post = await Post.create({
      name,
      description,
      age,
    });

    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating post", error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body cannot be empty" });
    }

    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating post", error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post deleted successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting post", error: error.message });
  }
};
