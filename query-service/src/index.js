const express = require('express');
const config = require('./config');
const QueryController = require('./controllers/query.controller');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());

app.get('/api/aggregate', QueryController.aggregateData);
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Query service running on port ${config.PORT}`);
});
