const svrInfo = require('../config/svrInfo.js');
const apiKinds = svrInfo.apiKinds;

//json data format
function makeBaseForm(){
  return {
    kind: "",
    code: null,
    lang: "KR",
    status: {},
    snippet: {}
  }
}

//input date to json data format
function makeJsForm(kind, code, statusCode, msg, snippet){
  let jsForm = makeBaseForm();
  jsForm.kind = kind;
  jsForm.code = code;
  jsForm.status.code = statusCode;
  jsForm.status.message = msg;
  jsForm.snippet = snippet;
  return jsForm;
}

function myInfoOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[0], 1, statusCode, msg, snippet);
}

function myInfoDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[1], 2, statusCode, msg, snippet);
}

function signUpOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[2], 3, statusCode, msg, snippet);
}

function signUpDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[3], 4, statusCode, msg, snippet);
}

function editInfoOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[4], 5, statusCode, msg, snippet);
}

function editInfoDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[5], 6, statusCode, msg, snippet);
}

function editPwdOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[6], 7, statusCode, msg, snippet);
}

function editPwdDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[7], 8, statusCode, msg, snippet);
}

function withdrawlOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[8], 9, statusCode, msg, snippet);
}

function withdrawlDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[9], 10, statusCode, msg, snippet);
}

function codeOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[10], 11, statusCode, msg, snippet);
}

function codeDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[11], 12, statusCode, msg, snippet);
}

function signInOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[12], 13, statusCode, msg, snippet);
}

function signInDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[13], 14, statusCode, msg, snippet);
}

function pwQueryOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[14], 15, statusCode, msg, snippet);
}

function pwQueryDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[15], 16, statusCode, msg, snippet);
}

function friendListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[16], 17, statusCode, msg, snippet);
}

function friendListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[17], 18, statusCode, msg, snippet);
}

function addFriendOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[18], 19, statusCode, msg, snippet);
}

function addFriendDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[19], 20, statusCode, msg, snippet);
}

function delFriendOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[20], 21, statusCode, msg, snippet);
}

function delFriendDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[21], 22, statusCode, msg, snippet);
}

function noticeListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[22], 23, statusCode, msg, snippet);
}

function noticeListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[23], 24, statusCode, msg, snippet);
}

function noticeMainListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[24], 25, statusCode, msg, snippet);
}

function noticeMainListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[25], 26, statusCode, msg, snippet);
}

function noticeDetailOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[26], 27, statusCode, msg, snippet);
}

function noticeDetailDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[27], 28, statusCode, msg, snippet);
}

function noticeMainDetailOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[28], 29, statusCode, msg, snippet);
}

function noticeMainDetailDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[29], 30, statusCode, msg, snippet);
}

function editNoticeOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[30], 31, statusCode, msg, snippet);
}

function editNoticeDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[31], 32, statusCode, msg, snippet);
}

function editMainNoticeOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[32], 33, statusCode, msg, snippet);
}

function editMainNoticeDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[33], 34, statusCode, msg, snippet);
}

function delNoticeOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[34], 35, statusCode, msg, snippet);
}

function delNoticeDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[35], 36, statusCode, msg, snippet);
}

function recommendPrjListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[36], 37, statusCode, msg, snippet);
}

function recommendPrjListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[37], 38, statusCode, msg, snippet);
}

function addRecommendPrjOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[38], 39, statusCode, msg, snippet);
}

function addRecommendPrjDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[39], 40, statusCode, msg, snippet);
}

function delRecommendPrjOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[40], 41, statusCode, msg, snippet);
}

function delRecommendPrjOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[41], 42, statusCode, msg, snippet);
}

function recommendTagListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[42], 43, statusCode, msg, snippet);
}

function recommendTagListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[43], 44, statusCode, msg, snippet);
}

function addRecommendTagOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[44], 45, statusCode, msg, snippet);
}

function addRecommendTagDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[45], 46, statusCode, msg, snippet);
}

function delRecommendTagOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[46], 47, statusCode, msg, snippet);
}

function delRecommendTagDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[47], 48, statusCode, msg, snippet);
}

function recommendFriendListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[48], 49, statusCode, msg, snippet);
}

function recommendFriendListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[49], 50, statusCode, msg, snippet);
}

function addRecommendFriendOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[50], 51, statusCode, msg, snippet);
}

function addRecommendFriendOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[51], 52, statusCode, msg, snippet);
}

function delRecommendFriendOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[52], 53, statusCode, msg, snippet);
}

function delRecommendFriendDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[53], 54, statusCode, msg, snippet);
}

function activityListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[54], 55, statusCode, msg, snippet);
}

function activityListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[55], 56, statusCode, msg, snippet);
}

function addActivityOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[56], 57, statusCode, msg, snippet);
}

function addActivityDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[57], 58, statusCode, msg, snippet);
}

function delActivityOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[58], 59, statusCode, msg, snippet);
}

function delActivityDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[59], 60, statusCode, msg, snippet);
}

function templateListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[60], 61, statusCode, msg, snippet);
}

function templateListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[61], 62, statusCode, msg, snippet);
}

function addTemplateOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[62], 63, statusCode, msg, snippet);
}

function addTemplateDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[63], 64, statusCode, msg, snippet);
}

function modTemplateOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[64], 65, statusCode, msg, snippet);
}

function modTemplateOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[65], 66, statusCode, msg, snippet);
}

function delTemplateOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[66], 67, statusCode, msg, snippet);
}

function delTemplateOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[67], 68, statusCode, msg, snippet);
}

function projectListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[68], 69, statusCode, msg, snippet);
}

function projectListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[69], 70, statusCode, msg, snippet);
}

function addProjectOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[70], 71, statusCode, msg, snippet);
}

function addProjectDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[71], 72, statusCode, msg, snippet);
}

function modProjectOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[72], 73, statusCode, msg, snippet);
}

function modProjectDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[73], 74, statusCode, msg, snippet);
}

function delProjectOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[74], 75, statusCode, msg, snippet);
}

function delProjectDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[75], 76, statusCode, msg, snippet);
}

function contentListOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[76], 77, statusCode, msg, snippet);
}

function contentListDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[77], 78, statusCode, msg, snippet);
}

function addContentOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[78], 79, statusCode, msg, snippet);
}

function addContentDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[79], 80, statusCode, msg, snippet);
}

function delContentOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[80], 81, statusCode, msg, snippet);
}

function delContentDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[81], 82, statusCode, msg, snippet);
}

function addTeamOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[82], 83, statusCode, msg, snippet);
}

function addTeamDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[83], 84, statusCode, msg, snippet);
}

function delTeamOk(statusCode, msg, snippet){
  return makeJsForm(apiKinds[84], 85, statusCode, msg, snippet);
}

function delTeamDeny(statusCode, msg, snippet){
  return makeJsForm(apiKinds[85], 86, statusCode, msg, snippet);
}

exports.myInfoOk = myInfoOk; //1
exports.myInfoDeny = myInfoDeny; //2
exports.signUpOk = signUpOk; //3
exports.signUpDeny = signUpDeny; //4
exports.editInfoOk = editInfoOk; //5
exports.editInfoDeny = editInfoDeny; //6
exports.editPwdOk = editPwdOk; //7
exports.editPwdDeny = editPwdDeny; //8
exports.withdrawlOk = withdrawlOk; //9
exports.withdrawlDeny = withdrawlDeny; //10
exports.codeOk = codeOk; //11
exports.codeDeny = codeDeny; //12
exports.signInOk = signInOk; //13
exports.signInDeny = signInDeny //14
exports.pwQueryOk = pwQueryOk; //15
exports.pwQueryDeny = pwQueryDeny; //16
exports.friendListOk = friendListOk; //17
exports.friendListDeny = friendListDeny; //18
exports.addFriendOk = addFriendOk; //19
exports.addFriendDeny = addFriendDeny; //20
exports.delFriendOk = delFriendOk; //21
exports.delFriendDeny = delFriendDeny //22
exports.noticeListOk = noticeListOk; //23
exports.noticeListDeny = noticeListDeny; //24
exports.noticeMainListOk = noticeMainListOk; //25
exports.noticeMainListDeny = noticeMainListDeny; //26
exports.noticeDetailOk = noticeDetailOk; //27
exports.noticeDetailDeny = noticeDetailDeny; //28
exports.noticeMainDetailOk = noticeMainDetailOk; //29
exports.noticeMainDetailDeny = noticeMainDetailDeny; //30
exports.editNoticeOk = editNoticeOk; //31
exports.editNoticeDeny = editNoticeDeny; //32
exports.editMainNoticeOk = editMainNoticeOk; //33
exports.editMainNoticeDeny = editMainNoticeDeny; //34
exports.delNoticeOk = delNoticeOk; //35
exports.delNoticeDeny = delNoticeDeny; //36
exports.recommendPrjListOk = recommendPrjListOk; //37
exports.recommendPrjListDeny = recommendPrjListDeny; //38
exports.addRecommendPrjOk = addRecommendPrjOk; //39
exports.addRecommendPrjDeny = addRecommendPrjDeny; //40
exports.delRecommendPrjOk = delRecommendPrjOk; //41
exports.delRecommendPrjOk = delRecommendPrjOk; //42
exports.recommendTagListOk = recommendTagListOk; //43
exports.recommendTagListDeny = recommendTagListDeny; //44
exports.addRecommendTagOk = addRecommendTagOk; //45
exports.addRecommendTagDeny = addRecommendTagDeny; //46
exports.delRecommendTagOk = delRecommendTagOk; //47
exports.delRecommendTagDeny = delRecommendTagDeny; //48
exports.recommendFriendListOk = recommendFriendListOk; //49
exports.recommendFriendListDeny = recommendFriendListDeny; //50
exports.addRecommendFriendOk = addRecommendFriendOk; //51
exports.addRecommendFriendOk = addRecommendFriendOk; //52
exports.delRecommendFriendOk = delRecommendFriendOk; //53
exports.delRecommendFriendDeny = delRecommendFriendDeny; //54
exports.activityListOk = activityListOk; //55
exports.activityListDeny = activityListDeny; //56
exports.addActivityOk = addActivityOk; //57
exports.addActivityDeny = addActivityDeny; //58
exports.delActivityOk = delActivityOk; //59
exports.delActivityDeny = delActivityDeny; //60
exports.templateListOk = templateListOk; //61
exports.templateListDeny = templateListDeny; //62
exports.addTemplateOk = addTemplateOk; //63
exports.addTemplateDeny = addTemplateDeny; //64
exports.modTemplateOk = modTemplateOk; //65
exports.modTemplateOk = modTemplateOk; //66
exports.delTemplateOk = delTemplateOk; //67
exports.delTemplateOk = delTemplateOk; //68
exports.projectListOk = projectListOk //69
exports.projectListDeny = projectListDeny; //70
exports.addProjectOk = addProjectOk; //71
exports.addProjectDeny = addProjectDeny; //72
exports.modProjectOk = modProjectOk; //73
exports.modProjectDeny = modProjectDeny; //74
exports.delProjectOk = delProjectOk; //75
exports.delProjectDeny = delProjectDeny; //76
exports.contentListOk = contentListOk; //77
exports.contentListDeny = contentListDeny; //78
exports.addContentOk = addContentOk; //79
exports.addContentDeny = addContentDeny; //80
exports.delContentOk = delContentOk; //81
exports.delContentDeny = delContentDeny; //82
exports.addTeamOk = addTeamOk; //83
exports.addTeamDeny = addTeamDeny; //84
exports.delTeamOk = delTeamOk; //85
exports.delTeamDeny = delTeamDeny; //86
