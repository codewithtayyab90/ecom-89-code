const productModel = require('../models/Product')
const createProduct = async (req, res) =>{
    console.log("BODY:", req.body)
    const {title, description, price, rating, review} = req.body
    const createdProduct = await productModel.create({title:title, description:description, price:price, rating:rating, review:review})
    res.send(createdProduct)
}
const getProduct = async (req, res) =>{
    const data = await productModel.find({}) 
    res.send(data)
}
const getProductById = async (req, res) =>{
    const singleProduct = await productModel.findById(req.params.id)
    res.send(singleProduct);
}
const deleteProduct = async (req, res) =>{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)
    res.send(deletedProduct, "Product Deleted Successfully");
}
const editProduct = async (req, res) =>{
    const id = req.params.id;
    const body = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(id, body);
    res.send(updatedProduct, "Product Updated Successfully");
}
module.exports = {
    createProduct,
    getProduct,
    getProductById,
    deleteProduct,
    editProduct
}