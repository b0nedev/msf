const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbCnf = require('../../config/mysqlCnf.js');
const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');
const bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(swaggerUi);
  res.render('index', { title: 'Express' });
});

// router.get('/test', (req, res, next) => {
//   res.send(bcrypt.hashSync("curturit1234", 10));
// });
//
// router.get('/test2/:id', (req, res, next) => {
//   res.send(bcrypt.compareSync('curturit1234', req.params.id));
// });

module.exports = router;
