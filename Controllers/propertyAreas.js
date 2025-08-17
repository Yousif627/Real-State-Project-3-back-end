const Areas = require('../models/PropertyAreas')

async function createArea(req,res) {
    try{
        const createdArea = await Areas.create(req.body);
        res.status(201).json(createdArea);
    }catch(error){
        res.status(500).json('Failed to create Area')
    }
}


async function getAllAreas(req,res){
    try{
        const allAreas = await Areas.find()
        res.status(201).json(allAreas)
    }catch(error){
        res.status(500).json('Failed to get all areas')    
    }
}

async function updateArea (req,res){
    try{

    }catch(error){
        res.status(500).json('Failed to Update area')
    }
}