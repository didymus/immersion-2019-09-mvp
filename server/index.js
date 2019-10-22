//'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // parses incoming req stream to `req.body`
const axios = require('axios'); // for the requests to the db
const db = require('./db');

const PORT = 3000;

const app = express();

// bodyParser -> req.body
// bodyParser.urlencoded({ extended: true }) what is this method? prolly wont need

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser);

// 7FGvLUBX0p9z5ic3t1txmqdycsKhNIh4

// #######[ EXPRESS API 'GET' ]#######
// curious about this one:
// https://api.shodan.io/tools/httpheaders?key={API_KEY}

module.exports.ipSearch = app.get('https://api.shodan.io/shodan/host/206.82.85.197?key=7FGvLUBX0p9z5ic3t1txmqdycsKhNIh4', (req, res) => {
  console.log(req.body); // 206.82.85.197
  res.send('hello world');
  // express 'GET'
  // ip search end point:
  // https://api.shodan.io/shodan/host/{ip}?key={API_KEY}

  // input: will take ips separated by commas as input
  // output: will start the process of putting the vulns into db

  // way to force propType `ip`? (not required tho)
});


module.exports.dnsResolve = app.get('https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}', (req, res) => {
// takes the information parsed by `body-parser` residing in `req.body` (find vulns, docs loc in response)  
res.send('hello world');
  // express 'GET':
  // dns resolve end point:
  // https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}
  
  // scrub the inputs for XSS and SQLi

  // input: will take domain-name(s) (can be separated by commas)
});
  

// #######[ AXIOS DB REQUESTS ]#######

// AXIOS 'GET'
// AXIOS 'POST'

// familiar.get('/vulns', (req, res) => { // selects all (*) from db in `items`
//   vulns.queryVulns((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

module.exports.familiar.listen(PORT, () => {
    console.log(`Listening on port :${PORT}!`);
});
