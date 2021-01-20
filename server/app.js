const express = require('express');
const users = require('./routes/users');

const app = express();
const PORT = 3000;
const ROUTES = {
  users: '/users',
};

app.use(express.json());
// Routes
app.use(ROUTES.users, users);

app.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});
