import {model, Schema} from "mongoose";


const areaSchema = new Schema({
    img:{
        type: url,
        required: true
    },
    name: {
        type: Schema,
        required: true
    }
})

const Areas = model("Area", areaSchema)

module.exports = Areas
