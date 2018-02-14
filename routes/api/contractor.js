const router = require("express").Router();
const contractorController = require("../../controllers/contractorController");

// Matches with "/api/contractor"
router
  .route("/")
  .get(contractorController.findAll)

// Matches with "/api/contractor/id/:id"
router
  .route("/id/:id")
  .get(contractorController.findByID)
  .put(contractorController.update)
  .delete(contractorController.remove);

// Matches with "/api/contractor/name/:name"
router
  .route("/name/:name")
  .get(contractorController.findByName)

module.exports = router;
