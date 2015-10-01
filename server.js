var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    path           = require('path'),
    app            = express();

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));
app.get('*', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});


var server = app.listen(3002, function() {
    var port = server.address().port;
    console.log('Zach is listening on port %s. Yes... always listening...', port);
});
