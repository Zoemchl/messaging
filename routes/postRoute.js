
const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const postController = require('../controller/postController')

console.log("text route")
router.post('/', postController.createPost)
router.get('/:id', postController.getPostId)
router.get('/', postController.getAllPost)
router.put('/:id', postController.createUpdateId)

router.deletePost('/delete/:id', postController.delete)


module.exports = router