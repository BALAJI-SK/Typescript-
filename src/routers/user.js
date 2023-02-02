//import express
import express from ('express');
//import userController
const userController = require('../controllers/user');

const router = express.Router();
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);
module.exports = router;
