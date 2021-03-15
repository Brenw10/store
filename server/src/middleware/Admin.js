const express = require('express');
const User = require('../services/User');

const router = express.Router();

router.use(async function (_, res, next) {
  const isAdmin = await User.isAdmin(res.locals.user.sub);
  if (isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;