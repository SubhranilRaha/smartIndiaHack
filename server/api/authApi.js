const { Router } = require("express");
const passport = require('passport');
const { signupController, loginController } = require("../controller/authController");

const router = Router();

router.post('/register', signupController)
router.post('/login', passport.authenticate('local'), loginController); 
// In case of fail there will be 401 status code with a string response 'Unauthorised'

module.exports.authApi = router;