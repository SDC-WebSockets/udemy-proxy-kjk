const axios = require('axios');
const shrinkRay = require('shrink-ray-current');
const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const config = require('./config.js');

dotenv.config();
const mode = process.env.NODE_ENV;
const { sidebar } = config[mode];

const app = express();
app.use(shrinkRay());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.use('/course', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.all('/sidebar/all', async (req, res) => {
  console.log(`proxy hit with ${req.method} request at ${req.url} and ${req.body ? 'data' : 'no body'}`);
  await axios({
    method: req.method,
    url: sidebar + req.originalUrl,
    data: req.body,
    headers: req.headers,
  })
    .then((results) => {
      res.status(results.status).send(results.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(`${err.response.statusText}: ${err.response.data}`);
    });
});

module.exports = app;
