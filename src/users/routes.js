const {Router} = require('express');
const controller = require("./controller");
const router = Router();

router.post('/',controller.getUserByEmailandId)
router.post('/updateEmail',controller.updateUserEmail)

module.exports = router;