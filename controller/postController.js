const Post = require('../models/model')

exports.createPost = (req,res,next)=> {
    console.log('post test')
    console.log(req.body)
    
    
    const p = new Post({
        titre: req.body.titre,
        text: req.body.text,
        author: req.body.author
    })
    p.save()
    .then(()=> res.status(200).json({message: 'ok'}))
    .catch(error => res.status(400).json({error}))
}

exports.deletePost = (req,res,next) => {
    console.log('delete test id')
    Post.deleteOne({_id:req.params.id})
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}));
}

exports.createUpdateId = (req,res,next) => {
    console.log('create put')
    Post.updateOne({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}))
}

exports.getPostId  = (req,res,next) => {
    console.log('get test id');
    Post.findOne({_id:req.params.id})
    .then(post=> res.status(200).json(post))
    .catch(error => res.status(404).json({error}))
}

exports.getAllPost = (req,res,next) => {
    console.log('get all test')
    Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}));
}
