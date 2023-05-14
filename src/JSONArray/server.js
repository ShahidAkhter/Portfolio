const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000; // Replace with your desired port

app.get('/api/myProjects', async (req, res) => {
  try {
    const googleAppsScriptURL = 'GoogleDriveLink';
    const response = await axios.get(googleAppsScriptURL);
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
