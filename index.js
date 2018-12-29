const math = require('./services/math');

const request = require('request');

const express = require('express');

const app = express();

const port = 3000;

app.get('/math/add', (req, res) => {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = math.add(a, b);
    const returnObj = {};
    returnObj.result = result;

    if (a === NaN || b === NaN) {
        throw new Error('you must enter a number')
    }
    res.json(returnObj);
});

app.get('/math/multiply', (req, res) => {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = math.mulitply(a, b);
    const returnObj = {};
    returnObj.result = result;

    if (a === NaN || b === NaN) {
        throw new Error('you must enter a number')
    }
    res.json(returnObj);

});

app.get('/gif', (req, res) => {

    const apiKey = 'AkRKip6jh2ycngwr57ZoTd5WlTzcDTr2';
    request(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.search}`, {encoding: null}, function (err, response, body) {

        res.contentType('gif')
        res.json(body);
    });

});


//  FINAL STEP
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});