const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that doesn't send an error response
    console.error(err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});