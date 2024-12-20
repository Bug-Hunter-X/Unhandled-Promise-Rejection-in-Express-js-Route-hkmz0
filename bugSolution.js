const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(next);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Simulate an async operation that may throw an error
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that may result in an error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong in the async operation.'));
    } else {
      resolve();
    }
  });
} 