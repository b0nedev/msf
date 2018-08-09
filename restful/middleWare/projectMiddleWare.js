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

function prjList(req, res, next){

}

function addPrj(req, res, next){
  
}

function modPrj(req, res, next){

}

function delPrj(req, res, next){

}

exports.prjList = prjList;
exports.addPrj = addPrj;
exports.modPrj = modPrj;
exports.delPrj = delPrj;
