//'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // parses incoming req stream to `req.body`
const axios = require('axios'); // requests to API, responses get transform to schema and become arg for `saveData`
const db = require('./db');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
// parses the API data into `req.body`
app.use(bodyParser.urlencoded({ extended: true }));

// 7FGvLUBX0p9z5ic3t1txmqdycsKhNIh4 (not an API key)

// #######[ AXIOS API 'GET' ]#######
// curious about this one:
// https://api.shodan.io/tools/httpheaders?key={API_KEY}

const ipSearch = axios.get('https://api.shodan.io/shodan/host/206.82.85.197?key=7FGvLUBX0p9z5ic3t1txmqdycsKhNIh4')
  .then((response) => { // res.send(req.body.vulns)
    debugger;
 response.data.data.data.data.data.data;
// 
}).catch((error) => {
  console.log('Error: ', error);
});
  //console.log(req.body); // 206.82.85.197
  // res -> call db function
  // ip search end point:
  // https://api.shodan.io/shodan/host/{ip}?key={API_KEY}
  // input: will take ips separated by commas as input
  // output: will start the process of putting the vulns into db

// const dnsResolve = axios.get('https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}')
// .then()
// .catch((error) => {
//   console.log('Error: ', error);
// });
// takes the information parsed by `body-parser` residing in `req.body` (find vulns, docs loc in response)  
//res.send('hello world');
  // express 'GET':
  // dns resolve end point:
  // https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}
  // scrub the inputs for XSS and SQLi eventually
  // input: will take domain-name(s) (can be separated by commas)
  
app.get('/vulns', (req, res) => {
  db.queryVulns((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/hostip', (req, res) => {
  //const schemaData = req.body; // transform req.body into schema data
  //db.saveData(schemaData);
});

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}!`);
});