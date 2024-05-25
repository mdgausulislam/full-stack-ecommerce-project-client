const express = require('express');
const { getProduct, createProducts } = require('../controllers/product');
const router = express.Router();


router.get('/all-Product', getProduct)
router.post('/all-Product/create', createProducts)

module.exports = router;