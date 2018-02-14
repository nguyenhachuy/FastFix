const router = require("express").Router();
const quoteController = require("../../controllers/quoteController");

// Matches with "/api/quote"
router
  .route("/")
  .get(quoteController.findAll)

// Matches with "/api/quote/contractor/:id"
router
  .route("/contractor/:id")
  .get(quoteController.findByContractorId)

// Matches with "/api/quote/id/:id"
router
  .route("/id/:id")
  .get(quoteController.findById)
  .put(quoteController.update)
  .delete(quoteController.remove);

module.exports = router;
