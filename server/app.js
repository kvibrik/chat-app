const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 3000;

http.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});
