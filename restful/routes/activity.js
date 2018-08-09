const express = require('express');
const router = express.Router();

const activityMiddleWare = require('../middleWare/activityMiddleWare.js');
const activityList = activityMiddleWare.activityList;
const addActivity = activityMiddleWare.addActivity;
const delActivity = activityMiddleWare.delActivity;

router.get('/', activityList);

router.post('/', addActivity);

router.delete('/', delActivity);

module.exports = router;
