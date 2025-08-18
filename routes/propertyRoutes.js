
const express = require("express")


const router = express.Router()


const propertyController = require("../Controllers/Property")

router.post("/new", propertyController.crateProperty)
router.get("/", propertyController.getAllProperty)
router.get("/:id", propertyController.propertyDetails)
router.delete("/:id", propertyController.deleteProperty)
router.put("/:id", propertyController.updateProperty)

module.exports = router