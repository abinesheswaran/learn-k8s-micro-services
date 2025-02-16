const express = require('express');
const app = express();
const PORT = 3001;

app.get('/hello', (req, res) => {
  console.log('server A got a hit');
  res.send('Hello from Service A!');
});

app.listen(PORT, () => {
  console.log(`Service A running on port ${PORT}`);
});
