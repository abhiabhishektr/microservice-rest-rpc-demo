const express = require('express');
const config = require('./config');
const EventController = require('./controllers/event.controller');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.post('/api/events', EventController.handleEvent);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Event bus service running on port ${config.PORT}`);
});
