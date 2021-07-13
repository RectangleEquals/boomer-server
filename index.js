const express = require('express');
const os = require('os');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) =>
{
  const spawn = require('child_process').spawn;
  const chmod = spawn('chmod', ['+x', __dirname + '/hello']);
  const ls = spawn('ls', ['-lh', __dirname]);

  chmod.stdout.on('data', function (data) {
    console.log('[chmod]: ' + data.toString());
  });
  
  chmod.stderr.on('data', function (data) {
    console.error('[chmod] err: ' + data.toString());
  });
  
  chmod.on('exit', function (code) {
    console.log('[chmod] exited with code ' + code.toString());
  });

  ls.stdout.on('data', function (data) {
    console.log('[ls]: ' + data.toString());
  });
  
  ls.stderr.on('data', function (data) {
    console.error('[ls] err: ' + data.toString());
  });
  
  ls.on('exit', function (code) {
    console.log('[ls] exited with code ' + code.toString());
  });

  res.send(`<html><body><pre>check the logs</pre></body></html>`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});