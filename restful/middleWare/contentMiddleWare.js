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

function contentList(req, res, next){

}

function addContent(req, res, next){

}

function delContent(req, res, next){

}

exports.contentList = contentList;
exports.addContent = addContent;
exports.delContent = delContent;
