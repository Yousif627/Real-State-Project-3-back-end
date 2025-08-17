const express = require("express")


const router = express.Router()

const areaController = require("../Controllers/propertyAreas")

router.post("/new", areaController.createArea)


router.put('/:id', areaController.updateArea)



module.exports = router