const { Router } = require("express");
const { addTestScore, getScoresForStudent, updateTestScore, deleteTestScore } = require("../controller/testController");

const router = Router();

router.post('/create', addTestScore);
router.get('/get', getScoresForStudent);
router.put('/update', updateTestScore);
router.delete('/delete', deleteTestScore);

module.exports.testApi = router;