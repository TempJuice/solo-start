var express =require('express');
var app = express();
var path = require('path');

var port = 5000;

//Where to retrieve static files
app.use(express.static('server/public'));

//Specify location of home page
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

//Server running
app.listen(port, function() {
  console.log('Listening on port: ', port);
});
