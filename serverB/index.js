const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.get('/fetch-a', async (req, res) => {
  console.log('service B got a hit');
  try {
    //const response = await axios.get('http://host.docker.internal:3001/hello');
    //const response = await axios.get('http://server_a:3001/hello');
    const response = await axios.get('http://server-a-service:3001/hello');
    res.send(`Service B received:-------> ${response.data}`);
  } catch (error) {
    res.status(500).send('Error connecting to Service A');
  }
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});
