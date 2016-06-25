var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node-modules'));

app.listen(3000);
console.log('server running at http://localhost:3000');
