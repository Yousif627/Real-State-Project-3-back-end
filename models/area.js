const { Schema, model }=  require("mongoose");



const areaSchema = new Schema({
    img:{
        type: String,
        // required: true
    },
    location: {
        type: String,
        required: true
    }
})

const Areas = model("Areas", areaSchema)

module.exports = Areas
