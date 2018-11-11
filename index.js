require('@babel/register');

const express = require('express');
const render = require('./render').default;
const app = express();

app.get('/', (req, res) => {
  const response = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Thinknetica React Basic Server</title>
      </head>
      <body>
          <div id="app">${render()}</div>
      </body>
      </html>
  `;

  res.send(response);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
