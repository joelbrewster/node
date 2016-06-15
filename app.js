// var express = require('express');
// var app = express();

// // app.set('view engine' 'pug');

// app.get('/', function (request, response) {
  //   // console.log(request);
  //   // responce.render("index", { title: 'Hey', message: 'Hello there!'});
  //   // response.send("Hello World!");
  // });

  // app.listen(3000, function () {
    //   console.log("Example app listening on port 3000");
    // });

var express = require('express');
var app = express();

app.set('view engine' 'pug');

app.get('/', function (request, response) {
  response.send("Hello World!");
  response.render("index", { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000");
});
