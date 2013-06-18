var express = require('express');
var app = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  var content = {
    message: "Hello World!",
    markup: '<a href="#">OMG a link</a>'
  };
  
  res.render('index', content);
});

app.listen(3000);
