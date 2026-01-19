const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/getUser', userController.getUsers);
router.get('/getUserById', userController.getUserById);

module.exports = router;