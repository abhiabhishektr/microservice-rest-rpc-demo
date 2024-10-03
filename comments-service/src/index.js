const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const commentRoutes = require('./routes/comment.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/comments', commentRoutes);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Comments service running on port ${config.PORT}`);
});
