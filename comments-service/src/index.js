const express = require('express');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/comment.routes');
const errorMiddleware = require('./middlewares/error.middleware');
const { MONGO_URI, PORT } = require('./config');

const app = express();

app.use(express.json());
app.use('/posts/:postId/comments', commentRoutes);
app.use(errorMiddleware);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Comments service running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
