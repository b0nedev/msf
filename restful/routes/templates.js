const express = require('express');
const router = express.Router();

const templateMiddleWare = require('../middleWare/templateMiddleWare.js');
const templateList = templateMiddleWare.templateList;
const addTemplate = templateMiddleWare.addTemplate;
const modTemplate = templateMiddleWare.modTemplate;
const delTemplate = templateMiddleWare.delTemplate

router.get('/', templateList);

router.post('/', addTemplate);

router.put('/', modTemplate);

router.delete('/', delTemplate);

module.exports = router;
