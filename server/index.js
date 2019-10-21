//'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const items = require('./db');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// curious about this one:
//https://api.shodan.io/tools/httpheaders?key={YOUR_API_KEY}

module.exports.ipSearch = (){
  // ip search
  //https://api.shodan.io/shodan/host/{ip}?key={YOUR_API_KEY}
}

module.exports.dnsResolve = async(){
  // dns resolve
  //https://api.shodan.io/dns/resolve?hostnames={hostnames}&key={YOUR_API_KEY}
}

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
