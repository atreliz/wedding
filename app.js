var app = require('express')()
  , server = require('http').createServer(app)
  , fs = require('fs');


/* SERVER AND FILES CODE*/
server.listen(8080);

console.log("http://localhost:8080");
console.log(__dirname);

//this will server static files to client, as img, js,css..
/*app.configure(function () {
    
   // app.use('/client', express.static(__dirname + '/client'));
    app.use('client',app.router);    
});*/

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});



