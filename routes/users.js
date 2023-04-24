const express = require('express');
const { getUsers, addUser, delUser, updUser } = require('../controllers/users.controller');
const { measurePerformance } = require('../middleware/perfMeasure');



const router = express.Router();

/* GET users listing. */
router.get('/', measurePerformance, getUsers);
router.get('/:userID', measurePerformance, getUsers);



router.delete('/:userID', measurePerformance, delUser);
router.put('/:userID', measurePerformance, updUser);
router.post('/', measurePerformance, addUser);

module.exports = router;
