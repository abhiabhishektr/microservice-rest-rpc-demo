const CommentService = require('../services/comment.service');

class CommentController {
  async createComment(req, res, next) {
    try {
      const comment = await CommentService.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async getComments(req, res, next) {
    try {
      const comments = await CommentService.getComments(req.params.postId);
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CommentController();
