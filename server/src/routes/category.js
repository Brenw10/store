const express = require('express');

const router = express.Router();

router.post('/', (_, res) =>
  res.send({ category: true })
);

module.exports = router;