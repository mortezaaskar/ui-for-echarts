require('babel-register')

const config = require('../config')
const debug = require('debug')('app:bin:server')

const port = config.server_port
const host = config.server_host

const path = require('path');
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.compiler_public_path
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  debug(`Server is now running at ${host}:${port}.`)
});
