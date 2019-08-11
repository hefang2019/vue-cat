const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: "string",
    password: "string"
})
console.log(mongoose.model('user', schema))
module.exports = mongoose.model('user', schema)