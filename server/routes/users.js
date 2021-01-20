const express = require('express');
const router = express.Router();
const userService = require('../services/users');

// /users
router.get('/', (req, res) => {
  const users = userService.getUsers();
  res.status(200).send(users);
});

// /users/id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = userService.getUser(id);

  if (!user) return res.status(404).send({ message: 'User not found' });

  res.status(200).send(user);
});

// POST /users
router.post('/', (req, res) => {
  console.log(req.body);

  const newUser = userService.addNewUser(req.body);
  res.status(200).send(newUser);
});

module.exports = router;
