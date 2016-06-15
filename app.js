var express = require('express');
var app = express();

app.set('view engine' 'pug');

app.get('/', function (request, response) {
  console.log(request);
  response.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
