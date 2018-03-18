var express = require("express");
var app = express();

app.get('/', function (req, res) {
    var host = req.headers["host"];
    var userAgent = req.headers["user-agent"];
    var language = req.headers["accept-language"];

    var response = {
        host,
        userAgent,
        language
    }
    res.send(JSON.stringify(response));
});

app.listen(3000, function () {
    console.log('App is listening on port 3000');
});