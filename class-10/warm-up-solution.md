# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

// TODO slash route

app.get('/username', (req, res, next) => {
  try {
  const userInfo = {};

  userInfo.name = req.query.username;
  userInfo.password = req.query.password;

  res.send(userInfo)
  } catch (err) {
    next(err);
  }
});

// TODO star route for 404s

// ERROR catch all
app.use((error, req, res, next) => {
  //handle some errors
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
```
