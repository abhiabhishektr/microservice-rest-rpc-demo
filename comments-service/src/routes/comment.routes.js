const express = require('express');
const CommentController = require('../controllers/comment.controller');

const router = express.Router();

router.post('/', CommentController.createComment);
router.get('/:postId', CommentController.getComments);

module.exports = router;
