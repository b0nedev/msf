const svrInfo = require('../../config/svrInfo.js');

const rand = require('../../lib/rand.js');
const jsonForm = require( '../../lib/jsonForm.js');

const crud = require('../../sql/dml.js');
const fsDml = require('../../sql/fsDml.js');

const jwt = require('jsonwebtoken');
const auth = require('../../lib/auth.js');

const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');

function friendList(req, res, next){

}

function addFriend(req, res, next){

}

function delFriend(req, res, next){

}

exports.friendList = friendList;
exports.addFriend = addFriend;
exports.delFriend = delFriend;
