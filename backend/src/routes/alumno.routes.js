const { Router } = require('express');

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require('../controllers/alumno.controller');

const router = Router();

router.get('/:id', readUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;