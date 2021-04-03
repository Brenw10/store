const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const Auth = require('../middleware/Auth');
const UserEntity = require('../services/UserEntity');

const router = express.Router();

router.use(Auth);

router.post('/',
  celebrate({
    [Segments.BODY]: Joi.object({
      state: Joi.string().required(),
      city: Joi.string().required(),
      address: Joi.string().required(),
      number: Joi.string().required(),
      district: Joi.string().required(),
      complement: Joi.string().allow(''),
    }),
  }),
  (req, res) =>
    UserEntity.getByAuthId(res.locals.user.sub)
      .then(user => UserEntity.setAddress(user._id, req.body))
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;