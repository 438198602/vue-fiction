const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router/index');
app.use(bodyParser.urlencoded({extended:false}))  
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200); /让options请求快速返回/
    }
    else {
        next();
    }
});
app.use('/api', router);
let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});