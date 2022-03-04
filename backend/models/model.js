const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    titre: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    urlImageUrl: { type: String, required: false },
})

module.exports = mongoose.model('Post', postSchema);