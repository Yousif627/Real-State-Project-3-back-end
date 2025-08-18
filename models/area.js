const { Schema, model }=  require("mongoose");



const areaSchema = new Schema({
    img:{
        type: String,
        // required: true
    },
    Area: {
        type: String,
        required: true
    }
})

const Area = model("Area", areaSchema)

module.exports = Area
