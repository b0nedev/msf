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


/*
 - name: noticeList
 - parameter: req, res, next
 - description: /users/notice(get) get notice list callback function
*/
function noticeList(req, res, next){
  let part = req.query.part;
  let language = req.query.language;

  if(['en', 'ko'].includes(language)){
    if(part === 'main'){
      fsDml.mainNoticeList(language, (cb) => {
        console.log(cb);
        res.status(200).json(jsonForm.noticeMainListOk(0, 'notices is loaded', cb));
      });
    }
    else if(part === 'list'){
      fsDml.listNoticeList(language, (cb) => {
        console.log(cb);
        res.status(200).json(jsonForm.noticeListOk(0, 'notices is loaded', cb));
      })
    }
    else
      res.status(403).json(jsonForm.noticeListDeny(0, 'That part value is invalid'));
  }
  else
    res.status(403).json(jsonForm.noticeListDeny(1, 'The language is not support'));
}

/*
 - name: postNotice
 - parameter: req, res, next
 - description: /users/notice(post) insert notices table and redirect file server
  callback function
*/
function postNotice(req, res, next){

}


/*
 - name: modNotice
 - parameter: req, res, next
 - description: /users/notice(put) update notices table and redirect file server
  callback function
*/
function modNotice(req, res, next){

}


/*
 - name: modNotice
 - parameter: req, res, next
 - description: /users/notice(put) update notices table and redirect file server
  callback function
*/
function delNotice(req, res, next){

}

exports.noticeList = noticeList;
exports.postNotice = postNotice;
exports.modNotice = modNotice;
exports.delNotice = delNotice;
