const svrInfo = require('../../config/svrInfo.js');

const rand = require('../../lib/rand.js');
const jsonForm = require( '../../lib/jsonForm.js');

const crud = require('../../sql/dml.js');
const fsDml = require('../../sql/fsDml.js');

const jwt = require('jsonwebtoken');
const auth = require('../../lib/auth.js');

const nodeMailer = require('nodemailer');
const {emailChker, passwordChker, codeChker} = require('../../lib/validChker.js');

const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');

function templateList(req, res, next){

}

function addTemplate(req, res, next){

}

function modTemplate(req, res, next){

}

function delTemplate(req, res, next){

}

exports.templateList = templateList;
exports.addTemplate = addTemplate;
exports.modTemplate = modTemplate;
exports.delTemplate = delTemplate;
