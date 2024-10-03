const express = require('express');
const { createPost, getPosts } = require('../controllers/post.controller');

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);

module.exports = router;
