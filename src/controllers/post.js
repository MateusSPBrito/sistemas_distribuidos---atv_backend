const Post = require("../models/post")

class PostController {
    async create(req, res) {
        const file = req.file
        console.log(req.body)
        const newPost = await Post.create({
            name: file.filename,
            description: req.body.description
        })

        return res.status(200).json({ message: 'success' })
    }

    async findPosts(req, res) {
        const posts = await Post.findAll()
        return res.status(200).json({ posts })
    }
}

module.exports = new PostController()