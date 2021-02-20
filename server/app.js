const express = require('express');
const cors = require('cors');
const product = require('./src/routes/product');
const category = require('./src/routes/category');

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.use('/product', product);
app.use('/category', category);

app.listen(port);