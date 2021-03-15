const express = require('express');
const cors = require('cors');
const Product = require('./src/routes/Product');
const ProductSale = require('./src/routes/ProductSale');
const Category = require('./src/routes/Category');
const User = require('./src/routes/User');

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use('/public', express.static(__dirname + '/public'));

app.use('/user', User);
app.use('/product/sale', ProductSale);
app.use('/product', Product);
app.use('/category', Category);

app.listen(port);