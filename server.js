const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./api/api')

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(errorhandler());
app.use(morgan('dev'));
app.use('/api', apiRouter);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});


module.exports = app;
