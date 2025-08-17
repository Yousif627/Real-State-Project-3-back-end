const express = require("express")

const router = express.Router()

const propertyController = require("../Controllers/Property")


router.post('/new', propertyController.crateProperty)


router.get('/', propertyController.getAllPropertys)


router.get('/:id', propertyController.popertysDetails)


router.delete('/:id', propertyController.deleteProperty)


router.put('/:id', propertyController.updateProperty)

module.exports = router







