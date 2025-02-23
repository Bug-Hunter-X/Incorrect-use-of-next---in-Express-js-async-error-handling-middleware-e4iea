# Incorrect use of next() in Express.js Async Error Handling Middleware

This repository demonstrates a common error in Express.js applications: the incorrect use of the `next()` function within asynchronous error-handling middleware.

## The Problem

The provided `bug.js` file contains an Express.js application with an asynchronous error-handling middleware function.  The error handling middleware is not properly implemented. Calling `next()` after sending a response with `res.status(500).send()` is incorrect.  This could lead to unexpected behavior or crashes depending on the Express.js version and middleware chain.