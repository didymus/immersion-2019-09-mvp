const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.66.188.153',
  user: 'steven',
  password: '0cXRO7Jvs3IxleMj',
  database: 'db_steven', // c a u l d r o n
});

// PORT: 3306
// SHELL: mysql -h 34.66.188.153 -P 3306 -u steven -p'0cXRO7Jvs3IxleMj' db_steven

connection.connect(); // connect

module.exports.queryVulns = (callback) => { // queries the DB
  connection.query('select ', (err, vulns) => { // FIX QUERY STATEMENT
    if (err) {
      callback(err, null);
    } else {
      callback(null, vulns);
    }
  });
};

connection.end(); // end connection
