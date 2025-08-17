const express = require("express")


const router = express.Router()

router.post("/new", areaController.createArea)


router.put('/:id', areaController.updateArea)





module.exports = router