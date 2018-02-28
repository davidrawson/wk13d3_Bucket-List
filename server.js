const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('client/src'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});