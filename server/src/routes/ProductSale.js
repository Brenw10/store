const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const ProductSaleEntity = require('../services/ProductSaleEntity');

const router = express.Router();

router.get('/',
  (_, res) =>
    ProductSaleEntity.getAllForSale()
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
    ProductSaleEntity.getForSaleByCategory(req.params.category)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;