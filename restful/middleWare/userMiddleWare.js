const svrInfo = require('../../config/svrInfo.js');

const rand = require('../../lib/rand.js');
const jsonForm = require( '../../lib/jsonForm.js');

const crud = require('../../sql/dml.js');
const fsDml = require('../../sql/fsDml.js');

const auth = require('../../lib/auth.js');

const {emailChker, passwordChker, codeChker} = require('../../lib/validChker.js');

const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');


/*
 - name: myInfo
 - parameter: req, res, next
 - description: /users(get) myInfo callback function
*/
function myInfo(req, res, next){
  if(req.headers.hasOwnProperty('authorization')){
    let token = auth.decodeToken(req);
    let usrId = token.user.usrId;
    fsDml.usrInfo(usrId, (cb) => {
      if(cb)
        res.status(200).json(
          jsonForm.myInfoOk(0, 'myInfo is displayed', cb));
      else
        res.status(403).json(jsonForm.myInfoDeny(0, 'The user id is invalid'));
    });
  }
  else res.status(403).json(jsonForm.myInfoDeny(1, 'Please check your signIn status'));
}


/*
 - name: signUp
 - parameter: req, res, next
 - description: /users(post) signUp callback function
*/
function signUp(req, res, next){
  let email = req.body.email;
  let code = req.body.code;
  let password = req.body.password;
  let rePassword = req.body.rePassword;
  let term = req.body.term;

  console.log(email, code, password, rePassword, term);
  if(term){
    if(!email || !emailChker(email))
      res.status(403).json(jsonForm.signUpDeny(1, 'The email Form is invalid'));
    else if(!password || !passwordChker(password))
      res.status(403).json(jsonForm.signUpDeny(2, 'The password is invalid'));
    else if(password != rePassword)
      res.status(403).json(jsonForm.signUpDeny(3, 'Re password is not accord'));
    else{
      codeChker(req, (cb) => {
        if(cb){
          fsDml.iUsers(req, (cb2) => {
            if(cb2){
              dLog(cb2);
              res.status(200).json(
                jsonForm.signUpOk(0, 'The account is signed Up'));
            }
            else
              res.status(403).json(
                jsonForm.signUpDeny(0, 'The email is duplicated'));
          });
        }
        else
          res.status(403).json(jsonForm.signUpDeny(4, 'The code is invalid'));
      });
    }
  }
  else{
    dLog(term);
    res.status(403).json(jsonForm.signUpDeny(0, 'The term must be allowed!'));
  }
}


/*
 - name: editUsers
 - parameter: req, res, next
 - description: /users(put) editInfo callback function
*/
function editUsers(req, res, next){

}


/*
 - name: deleteUsers
 - parameter: req, res, next
 - description: /users(delete) withdrawl callback function
*/
function delUsers(req, res, next){

}

exports.myInfo = myInfo;
exports.signUp = signUp;
exports.editUsers = editUsers;
exports.delUsers = delUsers;
