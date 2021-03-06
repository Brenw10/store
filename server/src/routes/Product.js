const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const ProductEntity = require('../services/ProductEntity');
const File = require('../services/File');
const Auth = require('../middleware/Auth');
const Admin = require('../middleware/Admin');

const router = express.Router();

router.post('/', Auth, Admin,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      images: Joi.array().required().items(Joi.string().required()),
      sizes: Joi.array().min(1).required().items({
        name: Joi.string().required(),
        quantity: Joi.number().integer().min(0).required(),
      }),
    }),
  }),
  (req, res) =>
    Promise.all(req.body.images.map(image => File.saveImage(image)))
      .then(images => ProductEntity.create({ ...req.body, images }))
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.put('/:_id', Auth, Admin,
  celebrate({
    [Segments.PARAMS]: Joi.object({
      _id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      sizes: Joi.array().min(1).required().items({
        _id: Joi.string(),
        name: Joi.string().required(),
        quantity: Joi.number().integer().min(0).required(),
      }),
    }),
  }),
  (req, res) =>
    ProductEntity.update(req.params._id, req.body)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

router.get('/', Auth, Admin,
  (_, res) =>
    ProductEntity.getAll()
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/category/:category', Auth, Admin,
  celebrate({
    [Segments.PARAMS]: Joi.object({
      category: Joi.string().required(),
    }),
  }),
  (req, res) =>
    ProductEntity.getByCategory(req.params.category)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/:_id',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      _id: Joi.string().required(),
    }),
  }),
  (req, res) =>
    ProductEntity.getById(req.params._id)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;