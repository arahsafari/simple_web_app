const express = require('express');
const ip = require("ip");
const app = express();
const port = 3000;

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    ip_client = req.connection.remoteAddress
    ip_server = ip.address()
    s = parse('ip client %s ip server %s ', ip_client , ip_server);
    res.send(s)
  })

app.listen(port, '0.0.0.0');

