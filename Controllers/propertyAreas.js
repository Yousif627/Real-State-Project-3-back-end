const Areas = require('../models/area')
const {route} = require('../routes/areaRoutes')
async function createArea(req,res) {
    try{
        const createdArea = await Areas.create(req.body);
        res.status(201).json(createdArea);
    }catch(error){
        res.status(500).json('Failed to create Area')
    }
}
async function getArea(req,res) {
    try{
        const getArea = await Areas.find();
        res.status(201).json(getArea);
    }catch(error){
        res.status(500).json('Failed to get Area')
    }
}
async function updateArea (req,res){
    try{
        const areaUpdate = await Areas.findByIdAndUpdate(req.params.id)
        res.status(201).json(areaUpdate)
    }catch(error){
        res.status(500).json('Failed to Update area')
    }
}

module.exports = {
    createArea,
    getArea,
    updateArea
}