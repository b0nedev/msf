const multer = require('multer');
const svrInfo = require('../../config/svrInfo');
const fsHandler = require('../../lib/fsHandler.js');
const auth = require('../../lib/auth.js');

var storage = multer.diskStorage({
  destination: setDestination,
  filename: mkFileName
});

var upload = multer({
  storage: storage,
  limits: {fileSize: svrInfo.uploadLImit},
//fileFilter: uploadFilter
}).single('userFile');

function setDestination(req, file, cb){
  let userId = auth.authz2Id(req);
  let basePath = svrInfo.accessFilePath;
  uploadPath = basePath + req.originalUrl + '/' + userId;
  fsHandler.mkDir(uploadPath);
  cb(null, uploadPath);
}

function mkFileName(req, file, cb){
  cb(null, 'cb.txt');
}

function uploadFile(req, res){
  upload(req, res, (err) => {
    if(err) console.log(err);
    else console.log('file upload ok?!');
  });
}

exports.uploadFile = uploadFile;
