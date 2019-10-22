//'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // parses incoming req stream to `req.body`
const axios = require('axios'); // for the requests to the db
const db = require('./db');

const PORT = 3000;
const app = express();

// bodyParser -> req.body
// bodyParser.urlencoded({ extended: true }) what is this method?

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser);
// the API requests go here:

// curious about this one:
//https://api.shodan.io/tools/httpheaders?key={YOUR_API_KEY}

module.exports.ipSearch = () {
  // ip search end point
  // https://api.shodan.io/shodan/host/{ip}?key={YOUR_API_KEY}

  // input: will take ips separated by commas as input
  // output: will start the process of putting the vulns into db

  // way to force propType `ip`? (not required tho)
};

module.exports.dnsResolve = async () {
  // dns resolve end point
  // https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}
  
  // scrub the inputs for XSS and SQLi

  // input: will take domain-name(s) (can be separated by commas)
  
};

// app.get('/items', (req, res) => { // selects all (*) from db in `items`
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

module.exports.
  app.listen(PORT, () => {
    console.log(`Listening on port :${PORT}!`);
  });
