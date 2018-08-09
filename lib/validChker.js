const crud = require('../sql/dml.js');
const svrInfo = require('../config/svrInfo.js');
const {dLog, iLog, wLog, eLog} = require('./importLog.js');

function chkChCnt(msg){
  let chCnt = 0;
  let chCode = 0;
  if(typeof(msg) == 'string'){
    for(i=0;i<msg.length;i++){
      chCode = msg[i].charCodeAt()
      if((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122))
        chCnt += 1;
    }
  }
  return chCnt;
}

function chkNumCnt(msg){
  let numCnt = 0;
  let numCode = 0;
  if(typeof(msg) == 'string'){
    for(i=0;i<msg.length;i++){
      numCode = msg[i].charCodeAt();
      if(numCode >= 48 && numCode <= 57) numCnt += 1;
    }
  }
  return numCnt;
}

function chkSpecialCnt(msg){
  let specialChList = "!@#$%^&*()_+-=~`<>,.?/;:\|";
  let sChCnt = 0;
  if(typeof(msg) == 'string'){
    for(i=0;i<msg.length;i++){
      if(specialChList.includes(msg[i])) sChCnt += 1;
    }
  }
  return sChCnt;
}

function emailChker(email){
  let emailForm = new RegExp('\\w+([-_.]?\\w)*@\\w+[-_.]\\w+([-_.]?\\w)?');
  let isValid = emailForm.test(email);
  return isValid;
}

function passwordChker(password){
  if(password.length < 6) return false;
  else{
    if(chkChCnt(password) < 2) return false;
    else if(chkNumCnt(password) < 2) return false;
    else if(chkSpecialCnt(password) < 2) return false;
    else return true;
  }
}

function codeChker(req, cb){
  let email = req.body.email;
  let code = req.body.code;
  crud.rData('confirm_code', 'wodl', ['code', 'created_at'],
  {email: email}, 'created_at', (cb2)=>{
    if(cb2.hasOwnProperty('code')){
      let now = new Date().getTime();
      let codeTime = cb2.created_at.getTime();
      let gapCodeTime = now - codeTime;
      dLog(gapCodeTime);
      if(gapCodeTime > svrInfo.codeValidInterval) cb(false);
      else{
        if(cb2.code == code) cb(true);
        else cb(false)
      }
    }
    else cb(false);

  });
}

exports.emailChker = emailChker;
exports.passwordChker = passwordChker;
exports.codeChker = codeChker;
