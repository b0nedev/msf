const svrInfo = require('../../config/svrInfo.js');

const rand = require('../../lib/rand.js');
const jsonForm = require( '../../lib/jsonForm.js');

const crud = require('../../sql/dml.js');
const fsDml = require('../../sql/fsDml.js');

const jwt = require('jsonwebtoken');
const auth = require('../../lib/auth.js');

const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');

function addTeam(req, res, next){

}

function delTeam(req, res, next){
  
}

exports.addTeam = addTeam;
exports.delTeam = delTeam;
