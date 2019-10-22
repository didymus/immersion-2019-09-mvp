const mysql = require('mysql'); // node mysql

const connection = mysql.createConnection({
  host: '34.66.188.153',
  user: 'steven',
  password: '0cXRO7Jvs3IxleMj',
  database: 'db_steven', // c a u l d r o n
});

// PORT: 3306
// SHELL: mysql -h 34.66.188.153 -P 3306 -u steven -p'0cXRO7Jvs3IxleMj' db_steven

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
}); // connect

module.exports.queryVulns = (callback) => { // queries the DB
  connection.query(`select * from 
                  key_column_usage 
                  where 
                  referenced_table_name = 'hostip' 
                  and referenced_column_name = 'hostip_id'`, 
                  (err, vulns) => {
                    console.log(vulns); // HERE!
    if (err) {
      callback(err, null); // callback is the other function that interacts with this one?
    } else {
      callback(null, vulns); // vulns is the information from db
    }
  });
};

module.exports.saveData = () => {
 // connection. whatevertostore to db
};