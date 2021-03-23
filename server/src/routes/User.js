const express = require('express');
const Auth = require('../middleware/Auth');
const UserEntity = require('../services/UserEntity');

const router = express.Router();

router.use(Auth);

router.post('/',
  (_, res) =>
    UserEntity.create(
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
    UserEntity.getByAuthId(res.locals.user.sub)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

module.exports = router;