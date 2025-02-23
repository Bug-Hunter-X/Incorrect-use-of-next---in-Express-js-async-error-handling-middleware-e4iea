const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to find the user ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling
  }
  res.send(user); 
});

//Solution: Correct Error Handling - Correct placement of next() in async middleware
app.use(async (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
  // next() removed - Correct behavior
});