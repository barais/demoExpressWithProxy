var proxy = require('express-http-proxy');
const express = require('express');
const app = express();

app.use(express.static('public'));


app.use('/api', proxy('http://IPOFYOURESP:4000/api'));

app.get('/myfunction', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
