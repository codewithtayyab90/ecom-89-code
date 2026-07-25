const express = require('express')
const router = express.Router()
const { createProduct, getProduct, getProductById, deleteProduct, editProduct} = require('../Controller/products')
router.post('/create', createProduct)
router.get('/', getProduct)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.patch("/:id", editProduct)
module.exports = router