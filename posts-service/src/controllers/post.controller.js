const Post = require('../models/post.model');

exports.createPost = async (req, res, next) => {
  try {
    const post = new Post({ title: req.body.title });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('comments');
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
