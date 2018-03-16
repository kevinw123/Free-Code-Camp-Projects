var express = require("express");
var app = express();

function validateUnixTimeStamp(dateString) {
    return (new Date(dateString)).getTime() > 0;
}

function validateDate(dateString) {
    return Date.parse(dateString) != NaN;
}

app.get('/:date', function (req, res) {
    var dateString = req.param("date");
    var obj = { "unix": null, "date": null};
    if (!validateDate(dateString) || !validateUnixTimeStamp(dateString)) {
        res.send(JSON.stringify(obj));
    } else {
        obj.unix = new Date(dateString).getTime();
        obj.date = dateString;
        res.send(JSON.stringify(obj));
    }
});

app.listen(3000, function () {
    console.log('App is listening on port 3000');
});