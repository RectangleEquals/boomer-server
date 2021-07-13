const express = require('express');
const os = require('os');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) =>
{
  var spawn = require('child_process').spawn,
  ls = spawn('ls', ['-lh', __dirname]);
  //ls = spawn('chmod', ['+x', __dirname + '/hello']);

  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });
  
  ls.stderr.on('data', function (data) {
    console.error('stderr: ' + data.toString());
  });
  
  ls.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });

  res.send(`<html><body><pre>check the logs</pre></body></html>`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});