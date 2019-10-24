const mysql = require('mysql');

const options = {
  host: '34.66.188.153',
  user: 'steven',
  password: '0cXRO7Jvs3IxleMj',
  database: 'db_steven',
};

const connection = mysql.createConnection(options);

// PORT: 3306
// SHELL: mysql -h 34.66.188.153 -P 3306 -u steven -p'0cXRO7Jvs3IxleMj' db_steven
// Load Schema: mysql -h 34.66.188.153 -P 3306 -u steven -p'0cXRO7Jvs3IxleMj' < schema.sql

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// module.exports.queryVulns = (callback) => {
//   connection.query(`select * from 
//                   key_column_usage 
//                   where 
//                   referenced_table_name = 'ip' 
//                   and referenced_column_name = 'ip_id'`, 
//                   ).then().catch((err) => {
//                     console.log('Error from queryVulns: ', err);
//                   }); 
// };

module.exports.queryVulns = (callback) => {
  connection.query(`SELECT * FROM vulns;`, (err, vulns) => {
    if(err){
      callback(err, null);
    } else {
    callback(null, vulns);
    }
  });
};

module.exports.storeVulns = (ip, vuln) => {
  connection.query(`INSERT INTO vulns (ip, vuln)
                    VALUES ("${ ip }", "${ vuln }");`, (err) => {
                      if(err){
                        console.log('storeVulns has error: ', err);
                      }
                    });
};