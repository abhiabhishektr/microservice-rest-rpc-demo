const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  content: { type: String, required: true },
  status: { type: String, default: 'pending' }, // pending, approved, rejected
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
