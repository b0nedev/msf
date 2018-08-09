const auth = require('../lib/auth.js');
const crud = require('./dml.js');
const iData = crud.iData;
const uData = crud.uData;
const fsHandler = require('../lib/fsHandler.js');
const svrInfo = require('../config/svrInfo.js');
const rand = require('../lib/rand.js');
const columns = require('../config/columns.js');
const { dLog, iLog, wLog, eLog } = require('../lib/importLog.js');

function url2Table(req){
  let [up, usrType, fileType] = fsHandler.pathDiv(req.originalUrl);
  if(usrType == 'culturit'){
    if(fileType == 'profile') return 'ctrit_templates';
    else if(fileType == 'image') return 'template_img';
    else if(fileType == 'file') return 'ctrit_templates';
    else if(fileType == 'category') return 'activity_category';
  }
  else if(usrType == 'expert'){
    if(fileType == 'profile') return 'users';
    else return 'ref_prj_files';
  }
  else if(usrType == 'user'){
    if(fileType == 'profile') return 'users';
    else if(fileType == 'file') return 'ref_cont_files';
  }
}

function url2TableDn(req){
  let [up, usrType, fileType] = fsHandler.pathDiv(req.originalUrl);
  if(usrType == 'culturit'){
    if(fileType == 'profile') return 'ctrit_templates';
    else if(fileType == 'image') return 'template_img';
    else if(fileType == 'file') return 'ctrit_templates';
  }
  else if(usrType == 'expert'){
    if(fileType == 'profile') return 'users';
    else if(fileType == 'image') return 'expert_prj';
    else return 'ref_prj_files';
  }
  else if(usrType == 'user'){
    if(fileType == 'profile') return 'users';
    else if(fileType == 'file') return 'ref_cont_files';
    else if(fileType == 'category') return 'activity_category';
  }
}

function getUpCol(req){
  let [up, pathUsrType, pathFileType] = fsHandler.pathDiv(req.originalUrl);
  console.log(up);
  console.log(pathUsrType);
  console.log(pathFileType);
  if(pathUsrType == 'culturit'){
    if(pathFileType == 'image')
      return columns.upTmplImgCol;
    else if(pathFileType == 'file')
      return columns.upTmplCol;
    else if(pathFileType == 'category')
      return columns.upCateCol;
  }
  else if(pathUsrType == 'expert') return columns.upPrjCol;
  else if(pathUsrType == 'user')
    return columns.upContCol;
}

function getUpVal(req, keyId){
  let now = new Date();
  let fileType = fsHandler.getFileType(req.file.originalname);
  let fileCode = 2;
  if (fileType == 'file') fileCode = 0;
  else if(fileType == 'video') fileCode = 1;
  dLog('tp:' + fileType);
  dLog('cd:' + fileCode);
  let [up, pathUsrType, pathFileType] = fsHandler.pathDiv(req.originalUrl);
  //"template_id", "url", "created_at"
  let upTmplImgVal = [keyId, req.file.path, now];
  //"title", "description", "description", "template_url", "created_at"
  let upTmplVal = [req.body.title, req.body.description, req.file.path, now];
  //"category_name", "url", "created_at"
  let upCateVal = [req.body.categoryName, req.file.path, now];
  //"prj_id", "ref_url", "file_type", "approval", "size_type", "created_at"
  let upPrjVal = [keyId, req.file.path, fileCode, 0, 0, now];
  //"user_img", "modified_at"
  let upUsersVal = [req.file.path, now];
  //"play_id", "ref_url", "created_at"
  let upContVal = [keyId, req.file.path, now];
  if(pathUsrType == 'culturit'){
    if(pathFileType == 'image')
      return upTmplVal;
    else if(pathFileType == 'file')
      return upTmplVal;
    else if(pathFileType == 'category')
      return upCateVal;
  }
  else if(pathUsrType == 'expert'){
    return upPrjVal;
  }
  else if(pathUsrType == 'user')
    return upContVal;
}

function mergeColVal(cols, vals){
  let colsLength = cols.length;
  let valsLength = vals.length;
  let colVals = {};

  try{
    if(colsLength == valsLength){
      for(i=0;i<colsLength;i++){
        colVals[cols[i]] = vals[i];
      }
      console.log(colVals);
      return colVals;
    }
    else return 0;
  }
  catch(exception){
    console.log('===mergeColVal exception');
    console.log(exception);
  }
}
// const onePrjById = crud.onePrjById;
// const onePlayById = crud.onePlayById;
//find prj_id from expert_id
function onePrjById(usrId, cb){
  crud.rData('expert_prj', 'w', ["prj_id",], {expert_id: usrId}, '', (cb2) => {
    console.log(cb2);
    cb(cb2.prj_id);
  })
}

function onePlayById(prj_id, usrId, cb){
  crud.rData('user_plyalists', 'w', ["play_id",], {prj_id: prj_id, user_id: usrId}, '', (cb2) => {
    console.log(cb2);
    cb(cb2.play_id);
  });
}

function logUpload(req){
  let [up, pathUsrType, pathFileType] = fsHandler.pathDiv(req.originalUrl);
  let cols = getUpCol(req);
  let vals = [];
  let colVals  = {};
  dLog('===LoadUpload===');
  dLog('file>' + JSON.stringify(req.file));
  let table = url2Table(req);
  dLog('table> ' + table);
  dLog('prjUp Columns>' + cols);
  dLog(pathUsrType);
  dLog(pathFileType);
  try{
    if(pathUsrType == 'expert'){
      onePrjById('expert2', (cb) => {
        let prj_id = cb;
        vals = getUpVal(req, prj_id);
        dLog('prjUp Values>' + vals);
        colVals = mergeColVal(cols, vals);
        iData(table, colVals, (cb2) => {
          dLog('log upload result>' + JSON.stringify(cb2));
        });
      });
    }
    else if(pathUsrType == 'culturit'){
      if(pathFileType == 'image'){
        let tmplId = req.body.templateId;
        vals = getUpVal(req, tmplId);
        dLog('prjUp Values>' + vals);
        colVals = mergeColVal(cols, vals);
        iData(table, colVals, (cb) => {
          dLog('log upload result>' + JSON.stringify(cb2));
        });
      }
      else if(pathFileType == 'category'){
        let categoryName = req.body.categoryName;
        vals = getUpVal(req, '');
        dLog('prjUp Values>' + vals);
        colVals = mergeColVal(cols, vals);
        iData(table, colVals, 'n', (cb2) => {
          dLog('log upload result>' + JSON.stringify(cb2));
        });
      }
      else{
        vals = getUpVal(req, '');
        dLog('prjUp Values>' + vals);
        colVals = mergeColVal(cols, vals);
        crud.iData(table, colVals, (cb) => {
          dLog('log upload result>' + JSON.stringify(cb));
        });
      }
    }
    else if(pathUsrType == 'user'){
      onePlayById(1, (cb) => {
        let playId = cb;
        vals = getUpVal(req, playId);
        dLog('prjUp Values>' + vals);
        colVals = mergeColVal(cols, vals);
        iData(table, colVals, 'n', (cb2) => {
          dLog('log upload result>' + JSON.stringify(cb2));
        });
      });
    }
  }
  catch(exception){
    console.log('===logUpload exception');
    console.log(exception);
  }
}

function logUpload2(req){
  let [up, pathUsrType, pathFileType] = fsHandler.pathDiv(req.originalUrl);
  try{

  }
  catch(exception){

  }
}

function req2KeyId(req){
  let [up, usrType, fileType] = fsHandler.pathDiv(req.originalUrl);
  if(usrType == 'culturit') return {template_id: ''};
  else if(usrType == 'expert'){
    if(fileType == 'profile') return {user_id: ''};
    else return {prj_id: ''};

  }
  else if(usrType == 'user'){
    if(fileType == 'profile') return {user_id: ''};
    else if(fileType == 'file') return {play_id: ''};
    else if(fileType == 'category') return {category_id: ''};
  }
}

function dnCol(req){
  let [up, usrType, fileType] = fsHandler.pathDiv(req.originalUrl);
  if(usrType == 'culturit' && fileType == 'file') return ["template_url",];
  else return ["url",];
}

function condValue(req){
  let [up, usrType, fileType] = fsHandler.pathDiv(req.originalUrl);
  if(usrType == 'culturit' || usrType == 'expert'){
    if(fileType == 'profile')
      return auth.decodeToken(req).user.userId;
    else return req.params.id;
  }
  else return req.params.id;
}

function getDownUrl(req, cb){
  let table = url2TableDn(req);
  let whereKV = req2KeyId(req);
  let col = dnCol(req);
  console.log(table);
  console.log(whereKV);
  whereKV[Object.keys(whereKV)[0]] = condValue(req);
  crud.rData(table, 'wodl', col, whereKV, col[0], (cb2) => {
    cb(cb2.url);
  });
}

function chkEmail(email, role, cb){
  crud.rData('users', 'w', ['email',], {email: email}, '', (cb2) => {
    dLog('===chkEmail===');
    dLog('input: ' + email);
    dLog('db: ' + cb2.email);
    if(cb2.hasOwnProperty('email')) cb(0)
    else{
      console.log('?!?!?!?');
      auth.makeUsrId(role, (cb3) => {
        console.log(cb3);
        cb(cb3);
      });
    }
  });
}

/*
  cols: user_id, email, anonymous_name, password, role,
        status, created_at, accessed_at
*/
function iUsers(req, cb){
  let email = req.body.email;
  let password = req.body.password;
  let role = 3; // 3: users
  let status = 0;
  let createdAt = new Date();

  let anonymousName = auth.makeAnonyId(svrInfo.anonyNameLen);

  chkEmail(email, role, (cb2) => {
    if(cb2){
      let userId = cb2;
      let colVals = {
        user_id: userId, email: email, anonymous_name: anonymousName,
        password: password, role: role, status: status, created_at: createdAt,
        accessed_at: createdAt
      }
      crud.iData('users', colVals, (cb3) => {
        dLog(cb3);
        cb(cb3);
      });
    }
    else{
      dLog('The email is duplicated!');
      cb(0)
    }
  });
}

function chkAccount(req, cb){
  let email = req.body.email;
  let password = req.body.password;

  crud.rData('users', 'w', ['user_id','password', 'role'], {email: email}, '', (cb2) => {
    if(!cb2.hasOwnProperty('password')) cb(false);
    else{
      if(cb2.password == password) cb(cb2);
      else cb(false);
    }
  });
}

function isEmail(req, cb){
  let email = req.body.email;

  crud.rData('users', 'w', ['user_id', 'role'], {email: email}, '', (cb2) =>{
    if(cb2.hasOwnProperty('user_id')) cb(true);
    else cb(false);
  });
}

function uTmpPwd(email, cb){
  let tmPwd = rand.randNChNum(8);
  crud.uData('users', {tmp_password: tmPwd}, {email: email}, (cb2) =>{
    dLog('uTmpPwd');
    dLog(cb2);
    if(cb2.hasOwnProperty('affectedRows')){
      dLog(cb2);
      cb(tmPwd);
    }
    else cb(false);
  });
}

function usrInfo(usrId, cb){
  crud.usersJoinBodySize(usrId, (cb2) => {
    if(cb2) cb(cb2);
    else cb(false);
  });
}

function mainNoticeList(lang, cb){
  let mainNoticeList = [];
  let noticeUrl;
  crud.noticesJoinCategory('', (cb2) => {
    for(let row of cb2){
      if(lang == 'ko')
        noticeUrl = row.main_url_ko;
      else if(lang == 'en')
        noticeUrl = row.main_url_en;
      else
        noticeUrl = '';

      mainNoticeList.push(
        {
          title: row.title, noticeUrl: noticeUrl,
          iconUrl: row.url, createdAt: row.created_at
        }
      )
    }
    if(['ko', 'en'].includes(lang)) cb(mainNoticeList);
    else cb(false);
  });
}

function listNoticeList(lang, cb){
  let listNoticeList = [];
  let noticeUrl;
  crud.noticesJoinCategory('', (cb2) => {
    for(let row of cb2){
      if(lang == 'ko')
        noticeUrl = row.url_ko;
      else if(lang == 'en')
        noticeUrl = row.url_en;
      else
        noticeUrl = '';

      listNoticeList.push(
        {
          title: row.title, noticeUrl: noticeUrl,
          iconUrl: row.url, createdAt: row.created_at
        }
      )
    }
    if(['ko', 'en'].includes(lang)) cb(listNoticeList);
    else cb(false);
  });
}

function detailNoticeList(notice_id, lang, cb){
  let noticeUrl;
  crud.noticesJoinCategory(notice_id, (cb2) => {
    console.log(cb2);
    if(lang === 'ko') noticeUrl = cb2[0].url_ko;
    else if(lang === 'en') noticeUrl = cb2[0].url_en;
    if(['ko', 'en'].includes(lang)){
      cb({
        title: cb2[0].title, noticeUrl: noticeUrl,
        iconUrl: cb2[0].url, createdAt: cb2[0].created_at
      });
    }
    else cb(false);
  });
}

function recommendPrjList(language, usrId, cb){
  let recPrjList = [];
  let matchName;
  crud.recPrjJoinCateJoinPrj(usrId, (cb2) => {
    for(let row of cb2){
      if(language === 'en')
        matchName = row.matching_name_en;
      else if(language === 'ko')
        matchName = row.matching_name_ko;
      recPrjList.push({
        prjId: row.prj_id, expertId: row.expert_id, tmplId: row.tmpl_id,
        title: row.title, description: row.description, userId: row.user_id,
        matchName: matchName, matchPercent: row.matching_percent,
        url: row.url, createdAt: row.created_at
      });
    }

    cb(recPrjList);
  });
}

function logRecPrj(usrId, prjId, mId, mPercent, cb){
  let now = new Date();
  let recPrjColVals = {
    user_id: usrId, prj_id: prjId, matching_code: mId,
    matching_percent: mPercent, created_at: now
  }
  crud.iData('recommend_prj', recPrjColVals, (cb2) => {
    console.log(cb2);
    cb(cb2);
  });
}

exports.url2Table = url2Table;
exports.getUpCol = getUpCol;
exports.getUpVal = getUpVal;
exports.mergeColVal = mergeColVal;
exports.onePrjById = onePrjById;
exports.logUpload = logUpload;
exports.getDownUrl = getDownUrl;
exports.iUsers = iUsers;
exports.chkAccount = chkAccount;
exports.isEmail = isEmail;
exports.uTmpPwd = uTmpPwd;
exports.usrInfo = usrInfo;
exports.mainNoticeList = mainNoticeList;
exports.listNoticeList = listNoticeList;
exports.detailNoticeList = detailNoticeList;
exports.recommendPrjList = recommendPrjList;
exports.logRecPrj = logRecPrj;
