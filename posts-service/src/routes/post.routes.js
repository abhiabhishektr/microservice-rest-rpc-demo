const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.post('/', PostController.createPost);
router.get('/', PostController.getPosts);

module.exports = router;
