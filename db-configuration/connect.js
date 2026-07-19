const mongoose = require('mongoose')

function connectMDB(){
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Oh Jee Oye Connected to MongoDB')
    }).catch((err) => {
        console.log('Oh Nahi MongoDB Is Not Connected', err)
    })
}
module.exports = connectMDB