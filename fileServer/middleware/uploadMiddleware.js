const uploadFile = require('../lib/upload.js').uploadFile;


function upAdminProfile(req, res, next){
  uploadFile(req, res);
  res.send('req.file');
}

function upAdminHtml(req, res, next){

}

function upAdminFile(req, res, next){

}

function upAdminImage(req, res, next){

}

function upExpertFile(req, res, next){

}

function upExpertVideo(req, res, next){

}

function upExpertImage(req, res, next){

}

function upUserFile(req, res, next){

}

function upUserImage(req, res, next){

}

exports.upAdminProfile = upAdminProfile;
exports.upAdminHtml = upAdminHtml;
exports.upAdminFile = upAdminFile;
exports.upAdminImage = upAdminImage;
exports.upExpertFile = upExpertFile;
exports.upExpertVideo = upExpertVideo;
exports.upExpertImage = upExpertImage;
exports.upUserFile = upUserFile;
exports.upUserImage = upUserImage;
