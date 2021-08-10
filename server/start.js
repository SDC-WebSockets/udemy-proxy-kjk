require('newrelic');
const dotenv = require('dotenv');
const app = require('./server.js');

dotenv.config();
const port = process.env.PORT || 6012;
const host = process.env.PUBLIC_HOST || 'localhost';

const serverInstance = app.listen(port, host, () => {
  console.log(`Listening at ${host}:${port}`);
});

const closeServer = () => {
  serverInstance.close();
};

exports.closeServer = closeServer;
