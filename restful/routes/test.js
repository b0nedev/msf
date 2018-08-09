const express = require('express');
const router = express.Router();
const validChker = require('../../lib/validChker.js');
const auth = require('../../lib/auth.js');
const rand = require('../../lib/rand.js');
const fsDml = require('../../sql/fsDml.js');
const jwt = require('jsonwebtoken');
const svrInfo = require('../../config/svrInfo.js');

router.post('/aaa', (req, res, next) => {
  let url = svrInfo.fileServerUrl + '/upload/admin/profile';
  res.redirect(308, url);
});

router.post('/emailchk', (req, res, next) => {
  let email = req.body.email;
  let chker = validChker.emailChker(email);
  console.log(chker);
  res.send(chker);
});

router.post('/pwdchk', (req, res, next) => {
  let password = req.body.password;
  let chker = validChker.passwordChker(password);
  console.log(chker);
  res.send(chker);
});

router.post('/codechk', (req, res, next) => {
  let code = req.body.code;
  validChker.codeChker(req, (cb) => {
    console.log(cb);
    res.send(cb);
  });
});

router.get('/auth', (req, res, next) => {
  auth.makeUsrId(3, (cb) => {
    res.send(cb);
  });

  // let aId = auth.makeAnonyId(8);
  // res.send(aId);
});

router.get('/rand', (req, res, next) => {
  console.log('?????');
  let ch = rand.randNChNum(6);
  console.log(ch);
  res.send(ch);
});

router.post('/iUsers', (req, res, next) => {
  fsDml.iUsers(req, (cb) => {
    console.log(cb);
    res.send(JSON.stringify(cb));
  });
});

router.get('/token/:id', (req, res, next) => {
  let encodeToken = req.params.id.split('Bearer ')[1];
  console.log(encodeToken);
  //let token = auth.decodeToken(encodeToken);
  let token = jwt.decode(encodeToken);
  res.send(token);
});

router.get('/token', (req, res, next) => {
  // let authorization = req.headers.authorization;
  // console.log(authorization);
  // let encodedToken = authorization.split('Bearer ')[1];
  // console.log(encodedToken);
  // let token = jwt.decode(encodedToken);
  // console.log(token);
  // res.send(token);
  // let token = auth.decodeToken(req);
  // console.log(token);
  console.log(auth.decodeToken(req));
  res.send('');
});

router.get('/proto', (req, res, next) => {
  let result = {};
  for(let i=0;i<svrInfo.apiKinds.length;i++){
    result[(i + 1).toString()] = svrInfo.apiKinds[i];
  }
  res.send(result);
});

module.exports = router;
