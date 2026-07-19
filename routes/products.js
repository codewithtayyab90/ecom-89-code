const express = require('express')
const router = express.Router()
const { createProduct, getProduct, getProductById, deleteProduct, editProduct} = require('../Controller/products')
router.post('/create', createProduct)
router.get('/products', getProduct)
router.get("/products/:id", getProductById)
router.delete("/products/:id", deleteProduct)
router.patch("/products/:id", editProduct)
module.exports = router