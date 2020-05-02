require('dotenv').config();
const express = require('express');
const agradon = require('agradon');
const authPlugin = require('agradon/auth');
const log = require('agradon/log')({ file: __filename });

const app = express();

app.use(require('cors')());

agradon.init({
  app,
  rootPath: '/api',
  plugins: [
    authPlugin({
      strategies: require('./strategies')
    })
  ]
});

app.use('**', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(process.env.PORT, () =>
  log.info(`Server is listening on port ${process.env.PORT}`, {
    port: Number(process.env.PORT),
    pid: process.pid,
    node_version: process.version
  })
);

module.exports = app;
