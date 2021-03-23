const express = require('express');
const UserEntity = require('../services/UserEntity');

const router = express.Router();

router.use(async function (_, res, next) {
  const isAdmin = await UserEntity.isAdmin(res.locals.user.sub);
  if (isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;