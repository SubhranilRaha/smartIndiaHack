const { Router } = require("express");
const { createClassroom } = require("../controller/schoolController");

const router = Router();

router.post('/createClassroom', createClassroom);
// In case of fail there will be 401 status code with a string response 'Unauthorised'

module.exports.schoolApi = router;