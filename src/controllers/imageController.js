const { gfs } = require('../models');
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');
require("dotenv").config();


const storage = new GridFsStorage({
    url:`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yeoaway.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`    ,
    file: (req, file) => {
        return {
            bucketName: 'uploads', 
            filename: file.originalname
        };
    }
});

const upload = multer({ storage });

const uploadImage = (req, res) => {
    res.json({ file: req.file });
};



module.exports = {
    uploadImage,
    upload
};
