const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', (_, res) => res.send({ test: true }));

app.listen(port);