const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
require('./autos.routes').setup(app);
app.listen(port);

console.log('API gestart op http://localhost:' + port);
