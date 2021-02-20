const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const CategoryEntity = require('../services/CategoryEntity');

const router = express.Router();

router.post('/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) =>
    CategoryEntity.create(req.body)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.put('/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      _id: Joi.string().required(),
      name: Joi.string().required(),
      categories: Joi.array().items(Joi.string()),
    }),
  }),
  (req, res) =>
    CategoryEntity.update(req.body)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/',
  (_, res) =>
    CategoryEntity.getAll()
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;