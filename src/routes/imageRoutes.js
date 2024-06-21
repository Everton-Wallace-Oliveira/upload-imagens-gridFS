const express = require('express');
const router = express.Router();
const { uploadImage, getImage, upload } = require('../controllers/imageController');

router.post('/upload', upload.single('file'), uploadImage);

router.get('/:filename', getImage);

module.exports = router;
