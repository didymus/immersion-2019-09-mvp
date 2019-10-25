//'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // parses incoming req stream to `req.body`
const axios = require('axios'); // requests to API, responses get transform to schema and become arg for `saveData`
const { storeVulns, queryVulns } = require('./db');

//const PORT = 3000;

const app = express();

app.use('/', express.static('client/dist'));
// parses the API data into `req.body`
app.use(bodyParser.urlencoded({ extended: true }));

// #######[ AXIOS API 'GET' ]#######
// curious about this one:
// https://api.shodan.io/tools/httpheaders?key={API_KEY}

const ip = '206.82.85.197';

const ipSearch = axios.get(`https://api.shodan.io/shodan/host/${ ip }?key=${ process.env.key }`)
  .then((response) => {
   //debugger;
   //console.log('Vulnerabilities: ', response.data.vulns); // (w/o docs [array])
   //console.log('Documentation: ', response.data.data[0].vulns); // (w docs {object}) 
   response.data.vulns.forEach(vuln => {
     storeVulns(`${ ip }`, vuln); // ended up just doing it this way due to time-constraints
   });
}).catch((error) => {
  console.log('Error: ', error);
});

  // response can call db function
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
  
app.get('/items', (req, res) => {
  queryVulns((err, vulns) => {
    if (err) {
      res.sendStatus(500);
    } else {
        res.end(JSON.stringify(vulns));
    }
  })
});

app.listen(process.env.PORT || 3000); //, () => {
  //console.log(`Listening on port :${PORT}!`);
//});