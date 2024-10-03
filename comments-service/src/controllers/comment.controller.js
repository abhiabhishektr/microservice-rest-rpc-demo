const Comment = require('../models/comment.model');

exports.createComment = async (req, res, next) => {
  try {
    const comment = new Comment({ postId: req.params.postId, content: req.body.content });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
