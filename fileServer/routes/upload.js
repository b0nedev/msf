const express = require('express');
const router = express.Router();

const uploadMiddleware = require('../middleware/uploadMiddleware.js');
const upAdminProfile = uploadMiddleware.upAdminProfile;
const upAdminHtml = uploadMiddleware.upAdminHtml;
const upAdminFile = uploadMiddleware.upAdminFile;
const upAdminImage = uploadMiddleware.upAdminImage;
const upExpertFile = uploadMiddleware.upExpertFile;
const upExpertVideo = uploadMiddleware.upExpertVideo;
const upExpertImage = uploadMiddleware.upExpertImage;
const upUserFile = uploadMiddleware.upUserFile;
const upUserImage = uploadMiddleware.upUserImage;

router.post('/admin/profile', upAdminProfile);

router.post('/admin/html', upAdminHtml);

router.post('/admin/file', upAdminFile);

router.post('/admin/image', upAdminImage);


router.post('/expert/file', upExpertFile);

router.post('/expert/video', upExpertVideo);

router.post('/expert/image', upExpertImage);


router.post('/user/file', upUserFile);

router.post('/user/image', upUserImage);

module.exports = router;
