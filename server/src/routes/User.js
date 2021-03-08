const express = require('express');
const Auth = require('../routes/Auth');

const router = express.Router();

router.use(Auth);

router.post('/', (_, res) => res.send(res.locals.user));

module.exports = router;