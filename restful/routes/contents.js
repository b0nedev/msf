const express = require('express');
const router = express.Router();

const contentMiddleWare = require('../middleWare/contentMiddleWare.js');
const contentList = contentMiddleWare.contentList;
const addContent = contentMiddleWare.addContent;
const delContent = contentMiddleWare.delContent;

router.get('/', contentList);

router.post('/', addContent);

router.delete('/', delContent);

module.exports = router;
