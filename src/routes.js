const { Router } = require('express')
const PostController = require('./controllers/post')
const path = require('path');
const upload = require('./config/multer');

const routes = new Router()

routes.get('/file/:filename', (req, res) => {
    return res.sendFile(path.join(__dirname, '../uploads', req.params.filename));
})

routes.post('/', upload.single('file'), PostController.create)

routes.get('/posts', PostController.findPosts)

module.exports = routes