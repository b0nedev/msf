const express = require('express');
const router = express.Router();
const projectMiddleWare = require('../middleWare/projectMiddleWare.js');
const prjList = projectMiddleWare.prjList;
const addPrj = projectMiddleWare.addPrj;
const modPrj = projectMiddleWare.modPrj;
const delPrj = projectMiddleWare.delPrj;

const teamMiddleWare = require('../middleWare/teamMiddleWare');
const addTeam = teamMiddleWare.addTeam;
const delTeam = teamMiddleWare.delTeam;

router.get('/', prjList);

router.post('/', addPrj);

router.put('/', modPrj);

router.delete('/', delPrj);

router.post('/team', addTeam);

router.delete('/team', delTeam);

module.exports = router;
