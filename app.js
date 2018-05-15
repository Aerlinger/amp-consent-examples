var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors({credentials: true, origin: 'localhost:3000'}));
app.use(express.static('public'));

app.post('/consent', function (req, res) {
  res.send({"promptIfUnknown": true});
});

app.get('/rtc', function(req, res) {
  res.set('AMP-Access-Control-Allow-Source-Origin', "http://localhost:3000");

  var targetingObject = req.params;

  if (Object.keys(targetingObject).length > 0)
    targetingObject = { "foo": ["val1", "val2"] };

  res.send({
    "targeting": targetingObject
  });
});


app.listen(3000);
