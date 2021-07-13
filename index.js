const express = require('express');
const os = require('os');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`<html><body><pre>${os.platform()}</pre></body></html>`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});