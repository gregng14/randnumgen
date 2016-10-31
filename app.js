var express = require('express'),
    path = require('path');
var bodyParser = require('body-parser');
//create our express app
var app = express();
//setup our app to use handlebars.js for templating
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//add some standard express middleware
app.use(bodyParser.json());

//routes
app.get('/', function(req, res) {
    res.render('index');
});

//have our app listen on port 3000
app.listen(3000);
console.log('Your app is now running at: http://127.0.0.1:3000/');