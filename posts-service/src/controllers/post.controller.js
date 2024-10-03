const PostService = require('../services/post.service');

class PostController {
  async createPost(req, res, next) {
    try {
      const post = await PostService.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  async getPosts(req, res, next) {
    try {
      const posts = await PostService.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostController();
