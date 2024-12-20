# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  When an asynchronous operation within a route throws an error, it's crucial to handle that error correctly to prevent the application from silently failing and to provide appropriate error responses to clients.

The `bug.js` file shows an example of this issue. The `someAsyncOperation` function simulates an asynchronous operation that might throw an error.  The error handling, however, only logs the error to the console and doesn't send an error response to the client. 

The `bugSolution.js` file demonstrates the corrected implementation, showcasing proper error handling and sending informative error responses using the `next` function to invoke the error handling middleware.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install express` to install dependencies
4. Run `node bug.js` and observe that any error during the asynchronous operation is not communicated to the client or properly handled.
5. Run `node bugSolution.js` and observe how the error is now handled and an error response is sent to the client.
