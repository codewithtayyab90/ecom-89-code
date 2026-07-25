const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true,'Username Is Required'],
        minLength:[3,"Username Must Be At LEast 3 Characters"],
        maxLength:[20,"Username Must Be At Most 20 Characters"]
    },
    email: {
       type: String,
       required:[true,'Email Is Required'],
       maxLength:[50,"Email Must Be At Most 50 Characters"]
   },
     password: {
        type: String,
        required:[true,'Password Is Required'],
        minLength:[8,"Password Must Be At LEast 8 Characters"],
    },
}
)

const authModel = mongoose.model('auth', userSchema)
module.exports = authModel