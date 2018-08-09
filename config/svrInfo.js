module.exports = {
  url: "http://localhost:3000",
  fileServerUrl: "http://localhost:3001",
//  uploadLimit: 209715200
  accessFilePath: "a4sg32cvf/pqk8dj1ed/",
  uploadLImit: 209715200,
  expirePeriod: 259200000,
  comAccessPermit: ['/users/signIn', '/test'],
  accessPermit:{
    admin: '*',
    expert: [
      '/download/expert/profile', '/download/expert/image', '/download/expert/file',
      '/download/expert/video', '/download/user/profile', '/download/user/file',
      '/download/user/category', '/download/culturit/profile', '/download/culturit/image',
      '/download/culturit/file'
    ],
    user: [
      '/download/expert/profile', '/download/expert/image', '/download/expert/file',
      '/download/expert/video', '/download/user/profile', '/download/user/file',
      '/download/user/category'
    ]
  },
  writePermit: {
    admin: '*',
    expert: [
      '/upload/expert/profile', '/upload/expert/image', '/upload/expert/file',
      '/upload/expert/video', '/upload/user/file'
    ],
    user: [
      '/upload/user/profile', '/upload/user/file'
    ]
  },
  dangerExt: [
    'jsp', 'php', 'asp', 'exe', 'aspx', 'htaccess', 'cer', 'cdx', 'asa',
    'php3', 'html', 'htm', 'war'
  ],
  logLevel: 0, //0:debug, 1:info, 2: warn 3: err
  admMailId: "info@ctr-it.com",
  admMailPassword: "curturit1234",
  codeValidInterval: 3600000,
  anonyNameLen: 8,
  apiKinds: [
    "file#myInfo#ok", "file#myInfo#deny", "file#signUp#ok", "file#signUp#deny",//4
    "file#editInfo#ok", "file#editInfo#deny", "file#editPwd#ok", "file#editPwd#deny",//8
    "file#withdrawl#ok", "file#withdrawl#deny", "file#code#ok", "file#code#deny",//12
    "file#signIn#ok", "file#signIn#deny", "file#pwQuery#ok", "file#pwQuery#deny",//16
    "file#friendList#ok", "file#friendList#deny", "file#addFriend#ok",//19
    "file#addFriend#deny", "file#delFriend#ok", "file#delFriend#deny",//22
    "file#noticeList#ok", "file#noticeList#deny", "file#noticeMainList#ok",//25
    "file#noticeMainList#deny", "file#noticeDetail#ok", "file#noticeDetail#deny",//28
    "file#noticeMainDetail#ok", "file##noticeMainDetail#fail", //30
    "file#editNotice#ok", "file#editNotice#deny", "file#editMainNotice#ok", //33
    "file#editMainNotice#deny", "file#delNotice#ok", "file#delNotice#deny", //36
    "file#recommendPrjList#ok", "file#recommendPrjList#deny", "file#addRecommendPrj#ok", //39
    "file#addRecommendPrj#deny", "file#delRecommendPrj#ok", "file#delRecommendPrj#deny", //42
    "file#recommendTagList#ok", "file#recommendTagList#deny", "file#addRecommendTag#ok", //45
    "file#addRecommendTag#deny", "file#delRecommendTag#ok", "file#delRecommendTag#deny", //48
    "file#recommendFriendList#ok", "file#recommendFriendList#deny", //50
    "file#addRecommendFriend#ok", "file#addRecommendFriend#deny", //52
    "file#delRecommendFriend#ok", "file#delRecommendFriend#deny", //54
    "file#activityList#ok", "file#activityList#deny", "file#addActivity#ok", //57
    "file#addActivity#deny", "file#delActivity#ok", "file#delActivity#deny", //60
    "file#templateList#ok", "file#templateList#deny", "file#addTemplate#ok", //63
    "file#addTemplate#deny", "file#modTemplate#ok", "file#modTemplate#deny", //66
    "file#delTemplate#ok", "file#delTemplate#deny", "file#projectList#ok", , //69
    "file#projectList#deny", "file#addProject#ok", "file#addProject#deny", //72
    "file#modProject#ok", "file#modProject#deny", "file#delProject#ok", //75
    "file#delProject#deny", "file#contentList#ok", "file#contentList#deny", //78
    "file#addConetnt#ok", "file#addConetnt#deny", //80
    "file#delContent#ok", "file#delContent#deny", //82
    "file#addTeam#ok", "file#addTeam#deny", "file#delTeam#ok", "file#delTeam#deny" //86
  ]
}
