const express = require('express');
const cors = require('cors');
const api = require('./api/routes/index.js');
const handlers = require('./utils/handlers.js');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', api);
app.use(handlers.handleError);
app.use(handlers.handleNotFound);

module.exports = app;
