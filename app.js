var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.static('public'));
app.use(cors());

app.post('/consent', function (req, res) {
  var consentResponse = {"promptIfUnknown": true};

  res.send(consentResponse);
});

app.listen(3000);
