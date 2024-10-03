const Comment = require('../models/comment.model');

class CommentService {
  async createComment(data) {
    const comment = new Comment(data);
    return await comment.save();
  }

  async getComments(postId) {
    return await Comment.find({ postId });
  }
}

module.exports = new CommentService();
