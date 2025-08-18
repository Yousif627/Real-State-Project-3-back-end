const Property = require('../models/property')
const Area = require("../models/area")

async function crateProperty(req,res) {
    try{
        const CreateProperty = await Property.create(req.body);
        res.status(201).json(CreateProperty);

    }catch(error){
        res.status(500).json('Failed to create Property');
    }

}


async function getAllProperty (req,res){
    try{
        const allProperty = await Property.find().populate('area');
        res.status(201).json(allProperty)
    }catch(error){
        res.status(500).json('Failed to get all property')
    }
}

async function propertyDetails (req,res){
    try{
        const propertyDetails = await Property.findById(req.params.id)

        res.status(201).json(propertyDetails)
    }catch(error){
        res.status(500).json('Failed to get Details')
    }
}

async function deleteProperty (req,res){
    try{
        const propertyDelete = await Property.findByIdAndDelete(req.params.id)
            res.status(201).json(propertyDelete)
        
    }catch(error){
        res.status(500).json('Failed to Delete')

    }
}

async function updateProperty (req,res) {
    try{
        const propertyUpdate = await Property.findByIdAndUpdate(req.params.id)
        res.status(201).json(propertyUpdate)
    }catch(error){
        res.status(500).json('Failed to Update')
    }
}



module.exports =  {
    crateProperty,
    getAllProperty,
    deleteProperty,
    updateProperty,
    propertyDetails

}