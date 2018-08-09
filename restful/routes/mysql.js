const mysql = require('mysql');
const dbcnf = require('../../config/mysqlCnf.js');
const {dLog, iLog, wLog, eLog} = require('../../lib/importLog.js');

let db = mysql.createPool(dbcnf);
db.getConnection((err) => {
  if(err){
    eLog('mysql db connection is failed!');
  }
  else{
    iLog('mysql db connection is success!');
  }
});

module.exports.db = db;
