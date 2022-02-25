
const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const postController = require('../controller/postController')

console.log("text route")
router.post('/', postController.createPost)
router.get('/:id', postController.getPostId)
router.get('/', postController.getAllPost)
router.put('/:id', postController.createUpdateId)
router.delete('/delete/:id', postController.deletePost)



const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
// router.get("/me", userController.getUserDetails);
router.get("/me", auth,userController.getUserDetails);
module.exports = router;