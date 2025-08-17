import {model, Schema} from "mongoose";


const areaSchema = new Schema({
    img:{

    },
    name: {
        type: Schema,
        required: true
    }
})

const Area = model("Area", areaSchema)

module.exports = Area
