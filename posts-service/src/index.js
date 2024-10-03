const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const postRoutes = require('./routes/post.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/posts', postRoutes);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Posts service running on port ${config.PORT}`);
});
