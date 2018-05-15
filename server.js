var express = require('express');
var cors = require('cors');

var server = express();

server.use(cors({credentials: true, origin: 'localhost:3000'}));
server.use(express.static('public'));

/**
 * Consent endpoint required by checkConsentHref in amp-consent
 */
server.post('/consent', function (req, res) {
  res.send({"promptIfUnknown": true});
});

/**
 * Provide a dynamic RTC endpoint by echoing request's query params to RTC targeting object
 */
server.get('/rtc', function(req, res) {
  res.set('AMP-Access-Control-Allow-Source-Origin', "http://localhost:3000");

  var targetingObject = req.query;

  if (Object.keys(targetingObject).length == 0)
    targetingObject = { "foo": ["val1", "val2"] };

  res.send({
    "targeting": targetingObject
  });
});


server.listen(3000);
