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

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports.queryVulns = (callback) => {
  connection.query(`select * from 
                  key_column_usage 
                  where 
                  referenced_table_name = 'hostip' 
                  and referenced_column_name = 'hostip_id'`, 
                  ).then().catch((err) => {
                    console.log('Error from queryVulns: ', err);
                  }); 
};

// if (err) {
//   callback(err, null);
// } else {
//   console.log('############ queryVulns ############');
//   callback(null, vulns);
// }

module.exports.storeVulns = (vulns) => {
  // let sql = 'INSERT INTO  () VALUES ()';
  // connection.query(`write blahblah sql`,
  //   (err, results, fields) => {
  //     if (err) {
  //       console.log('Error: ', err);
  //     } else {
  //       console.log('*************** DATA STORED ***************');
  //     }
  //   });
  connection.query(`write something`)
    .then((data) => {
      console.log('********** storeVulns', data);
    }).catch((err) => {
      console.log('Error from storeVulns: ', err);
    });
};