var express = require('express');
var app = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'hbs');

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  var content = {
    message: "Hello World!",
    markup: '<a href="#">OMG a link</a>'
  };

  res.render('boilerplate', content);
});

app.post('/', function (req, res) {
  var content = {
    message: "Say what?",
    markup: '<a href="/">Return home</a>',
    enteredText: req.body.enteredText
  };

  res.render('boilerplate', content);
});

app.listen(3000);
