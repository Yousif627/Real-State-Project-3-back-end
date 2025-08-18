const express = require("express")


const router = express.Router()

const areaController = require("../Controllers/propertyAreas")

router.post("/new", areaController.createArea)

router.get("/", areaController.getArea)


router.put('/:id', areaController.updateArea)



module.exports = router