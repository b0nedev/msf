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

const smtpTransport = nodeMailer.createTransport({
  host: 'smtp.daum.net',
  secure: true,
  auth: {
    user: svrInfo.admMailId,
    pass: svrInfo.admMailPassword
  }
});


/*
 - name: confirmCode
 - parameter: req, res, next
 - description: /users/code(post) confirm code callback function
*/
function confirmCode(req, res, next){
  let email = req.body.email;
  let code = rand.randNDigits(6);
  crud.rData('confirm_code', 'wodl', ['created_at',],
  {email: email}, 'created_at', (cb) => {
    let now = new Date().getTime();
    let createdAt;
    let interval;
    console.log(cb);
    if(cb.hasOwnProperty('created_at')){
      createdAt = cb.created_at.getTime();
      interval = now - createdAt;
      console.log(now);
      console.log(createdAt);
      console.log(interval);
    }

    if(cb.hasOwnProperty('created_at') && interval && interval < 30000)
      res.send('code is released 1m 2ea');
    else{
      let mailOpt = {
        from: 'info<' + svrInfo.admMailId + '>',
        to: req.body.email,
        subject: 'Culturit 회원 가입 인증 코드',
        text: '??????',
        html: '<p>C-' + code + '가 Culturit 인증 코드입니다.</p>'
      };
      smtpTransport.sendMail(mailOpt, (err, info) => {
        if(err) res.send(err);
        else{
          let now = new Date();
          let ccColVals = {email: req.body.email, code: code, created_at: now};
          dLog(info);
          crud.iData("confirm_code", ccColVals, (cb) => {
            if(cb.hasOwnProperty('insertId')){
               res.status(200).json(
                 jsonForm.codeOk(0, 'The confirm code is sended to email'));
            }
            else{
              res.status(403).json(
                jsonForm.codeDeny(0, 'You have to check your email for code'));
            }
          });
        }
      });
    }
  });
}


/*
 - name: signIn
 - parameter: req, res, next
 - description: /users/signIn(post) user signIn callback function
*/
function signIn(req, res, next){
  let email = req.body.email;
  let password = req.body.password;

  if(!email || !emailChker(email)){
    console.log('!!!1');
    res.status(403).json(jsonForm.signInDeny(0, 'The email Form is invalid'));
  }
  else{
    fsDml.chkAccount(req, (cb) => {
      if(cb){
        let expiredAt = ((new Date()).getTime() + svrInfo.expirePeriod);
        let userInfo = {usrId: cb.user_id, role: cb.role, expire: expiredAt};
        let token = jwt.sign(
          {user: userInfo},'secret', {expiresIn: Math.round(expiredAt/1000)});
        let authorization = "Bearer " + token;
        dLog(userInfo);
        dLog(token);
        res.set('authorization', authorization);
        res.status(200).json(jsonForm.signInOk(0, 'Account is Signed In'));
      }
      else
        res.status(403).json(jsonForm.signInDeny(1, 'Account info is invalid'));
    });
  }
}


function tmPwdEmail(email, tmPwd){
  let mailOpt = {
    from: 'info<' + svrInfo.admMailId + '>',
    to: email,
    subject: 'Culturit 회원 임시 비밀번호',
    text: '??????',
    html: '<p>새로운 임시 비밀번호는 ' + tmPwd + ' 입니다.</p>'
  };

  smtpTransport.sendMail(mailOpt, (err, info) => {
    if(err) res.send(err);
    else dLog(info);
  });
}

/*
 - name: findPwd
 - parameter: req, res, next
 - description: /users/pwQuery(post) user find password callback function
*/
function findPwd(req, res, next){
  fsDml.isEmail(req, (cb) => {
    if(cb){
      let email = req.body.email;
      fsDml.uTmpPwd(email, (cb2) => {
        if(cb2){
          tmPwdEmail(email, cb2);
          res.status(200).json(
            jsonForm.pwQueryOk(0, 'The temporary password is assigned'))
        }
        else
          res.status(403).json(
            jsonForm.pwQueryDeny(0, 'The email address is invalid')
          )
      });
    }
  });
}

exports.confirmCode = confirmCode;
exports.signIn = signIn;
exports.findPwd = findPwd;
