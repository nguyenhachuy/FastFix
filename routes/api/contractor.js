const router = require("express").Router();
const contractorController = require("../../controllers/contractorController");

// Matches with "/api/contractor"
router
  .route("contractor/")
  .get(contractorController.findAll)

// Matches with "/api/contractor/:id"
router
  .route("contractor/:id")
  .get(contractorController.findById)
  .put(contractorController.update)
  .delete(contractorController.remove);

module.exports = router;
