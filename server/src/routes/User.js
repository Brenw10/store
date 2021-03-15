const express = require('express');
const Auth = require('../middleware/Auth');
const User = require('../services/User');

const router = express.Router();

router.use(Auth);

router.post('/',
  (_, res) =>
    User.create(
      res.locals.user.sub,
      {
        ...res.locals.user,
        image: res.locals.user.picture,
        authId: res.locals.user.sub
      }
    )
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/',
  (_, res) =>
    User.getByAuthId(res.locals.user.sub)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

module.exports = router;