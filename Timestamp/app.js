var express = require("express");
var app = express();

function validateUnixTimeStamp(dateString) {
    return (new Date(dateString)).getTime() > 0;
}

function validateDate(dateString) {
    return true;
}

app.get('/:date', function (req, res) {
    // res.send('Req: ' + req.param("date"));
    var dateString = req.param("date");
    var obj = { "unix": null, "date": null};
    if (!validateDate(dateString) || !validateUnixTimeStamp(dateString)) {
        res.send(JSON.stringify(obj));
    } else {
        var obj = { "unix": 1, "date": 1};
        res.send(JSON.stringify(obj));
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000');
});