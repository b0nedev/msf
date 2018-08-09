const svrInfo = require('../../config/svrInfo.js');

const rand = require('../../lib/rand.js');
const jsonForm = require( '../../lib/jsonForm.js');

const crud = require('../../sql/dml.js');
const fsDml = require('../../sql/fsDml.js');

const jwt = require('jsonwebtoken');
const auth = require('../../lib/auth.js');

const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');

function recPrjList(req, res, next){
  let token = auth.decodeToken(req);
  let usrId = token.user.usrId;
  let language = req.query.language;

  if(['en', 'ko'].includes(language)){
    fsDml.recommendPrjList(language, usrId, (cb) => {
      console.log(cb);
      if(cb)
        res.status(200).json(
          jsonForm.recommendPrjListOk(0, 'The recommend Project is here', cb));
      else
        res.status(403).json(
          jsonForm.recommendPrjListDeny(0, 'The recommend project is not exist'));
    });
  }
  else
    res.status(403).json(
      jsonForm.recommendPrjListDeny(0, 'The language is not support'));
}

function addRecPrj(req, res, next){
  let usrId = req.body.userId;
  let prjId = req.body.prjId;
  let matchCode = req.body.matchCode;
  let matchPercent = req.body.matchPercent;

  fsDml.logRecPrj(usrId, prjId, matchCode, matchPercent, (cb) => {
    console.log(cb);
    if(cb)
      res.status(200).json(
        jsonForm.addRecommendPrjOk(0, 'recommend prjoject is added'));
    else
      res.status(403).json(
        jsonForm.addRecommendPrjDeny(0, 'Adding recommend project is failed'));
  });
}

function delRecPrj(req, res, next){

}

function recTagList(req, res, next){

}

function addRecTag(req, res, next){

}

function delRecTag(req, res, next){

}

function recFriendList(req, res, next){

}

function addRecFriend(req, res, next){

}

function delRecFriend(req, res, next){

}

exports.recPrjList = recPrjList;
exports.addRecPrj = addRecPrj;
exports.delRecPrj = delRecPrj;
exports.recTagList = recTagList;
exports.addRecTag = addRecTag;
exports.delRecTag = delRecTag;
exports.recFriendList = recFriendList;
exports.addRecFriend = addRecFriend;
exports.delRecFriend = delRecFriend;
