const express = require('express');
const cors = require('cors');
const product = require('./src/routes/product');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/product', product);

app.listen(port);