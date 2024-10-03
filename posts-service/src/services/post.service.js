const Post = require('../models/post.model');

class PostService {
  async createPost(data) {
    const post = new Post(data);
    return await post.save();
  }

  async getPosts() {
    return await Post.find({});
  }
}

module.exports = new PostService();
