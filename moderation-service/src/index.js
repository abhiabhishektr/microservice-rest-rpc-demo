const express = require('express');
const config = require('./config');
const ModerationController = require('./controllers/moderation.controller');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.post('/api/moderate', ModerationController.moderateContent);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Moderation service running on port ${config.PORT}`);
});
