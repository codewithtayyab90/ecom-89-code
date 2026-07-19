const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please Fill Title'],
        minLength:[3,"Title Must Be At Least 3 Characters"],
    },
    description:{
       type:String,
       required:[true,'PLease Fill Description'],
       minLength:[3,"Last Name Must Be At LEast 3 Characters"],
    },
    price:{
        type:Number,
        required:[true,'Please Fill Price'],
    },
    rating:{
        type:Number,
        required:[true,"Please Fill Rating"],
    },
    review:{
        type:String,
        required:[true, "Please Fill Review"],
        minLength:[3,"Review Must Be At Least 3 Characters"],
    }
})
const productModel = mongoose.model("product", productSchema);

module.exports = productModel;