const multer = require('multer');

const filename = (req, file, callback) => {
    callback(null, 'img_' + Date.now().toString() + '.' + file.mimetype.split('/')[1])
}

const storage = multer.diskStorage({
    destination: './public/images',
    filename: filename
})

const upload = multer({
    storage: storage
});

module.exports = (req, res, next) => {
    upload.single('profileImage')(req, res, (err) => {
        if (err) {
            throw err;
        }
        if (req.file && req.file.filename) {
            req.body.profileImage = req.file.filename;
        }
        next()
    });
}