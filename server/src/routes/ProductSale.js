const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const ProductEntity = require('../services/ProductEntity');

const router = express.Router();

router.get('/',
  (_, res) =>
    ProductEntity.getAllForSale()
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.get('/category/:category',
  celebrate({
    [Segments.PARAMS]: Joi.object({
      category: Joi.string().required(),
    }),
  }),
  (req, res) =>
    ProductEntity.getForSaleByCategory(req.params.category)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;