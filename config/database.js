const mongoose = require("mongoose")
const conn = async()=>{
    const atlas = await mongoose.connect("mongodb+srv://userNovo:felicidade2233@fiaptecnico.73xj5.mongodb.net/test")
}
module.exports = conn