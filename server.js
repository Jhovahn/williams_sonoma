const express = require('express');
const path = require('path');
const PORT = process.env.port || 5000;

express()
  .use(express.static(__dirname))
  .get('/', (req, res) => res.render(index))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
