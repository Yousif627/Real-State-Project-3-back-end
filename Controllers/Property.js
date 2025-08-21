const Property = require('../models/Property')
const Area = require('../models/area')


async function crateProperty(req,res) {
    try{
        console.log(req.body)
        const CreateProperty = await Property.create(req.body);
        res.status(201).json(CreateProperty);

    }catch(error){
        res.status(500).json('Failed to create Property in Backend');
        console.log(error)
    }

}


async function getAllPropertys (req,res){
    try{
        const allPropertys = await Property.find();
        res.status(201).json(allPropertys)
        
    }catch(error){
        res.status(500).json('Failed to get all propertys')
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
        const propertyUpdate = await Property.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json(propertyUpdate)
    }catch(error){
        res.status(500).json('Failed to Update')
    }
}



module.exports =  {
    crateProperty,
    getAllPropertys,
    deleteProperty,
    updateProperty,
    propertyDetails
}