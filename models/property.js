import { model, Schema } from "mongoose";



const propertySchema = new Schema({
    area: {
        type: Schema.Types.ObjectId,
        ref: "Area",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    img: {
        type: url,
        required: true
    },
    bedrooms:{
        type: Number,
        required: true
    },
    bathrooms:{
        type: Number,
        required: true
    },
    createdAt: {
        type: "created_at"
    }
})