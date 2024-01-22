const pagelogic = require('pagelogic');
const path = require('path');

new pagelogic.Server({
  port: 3000,
  rootPath: path.join(__dirname, 'www'),
  ssr: true,
}).start();
