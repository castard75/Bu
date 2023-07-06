const express = require("express");
const router= express.Router();

const customersController = require("../controller/user.controller")


router.post("/createUser",customersController.signup);
router.get('/',customersController.getAllUsers);
router.put('/userUpdate/:id',customersController.updateOneUser)
router.delete('/deleteUser/:id',customersController.deleteUser)



module.exports = router;