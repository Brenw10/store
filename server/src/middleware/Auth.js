const express = require('express');
const Auth = require('../services/Auth');

const router = express.Router();

router.use(async function (req, res, next) {
  try {
    const user = await Auth.getUser(req.headers.authorization);
    if (user.sub) {
      res.locals.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(401);
  }
});

module.exports = router;