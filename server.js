var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 3000;
var address = '0.0.0.0';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, address, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + address + ':' + port);
});
