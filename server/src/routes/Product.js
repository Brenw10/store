const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const ProductEntity = require('../services/ProductEntity');
const File = require('../services/File');

const router = express.Router();

router.post('/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      images: Joi.array().required().items(Joi.string().required()),
      sizes: Joi.array().items({
        name: Joi.string(),
        quantity: Joi.number(),
      }),
    }),
  }),
  (req, res) =>
    Promise.all(req.body.images.map(image => File.saveImage(image)))
      .then(images => ProductEntity.create({ ...req.body, images }))
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/',
  (_, res) =>
    ProductEntity.getAll()
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

router.get('/:category',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      category: Joi.string().required(),
    }),
  }),
  (req, res) =>
    ProductEntity.getByCategory(req.params.category)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

router.use(errors());

module.exports = router;