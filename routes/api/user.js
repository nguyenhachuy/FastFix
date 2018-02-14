const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)

// Matches with "/api/user/id/:id"
router
  .route("/id/:id")
  .get(userController.findByID)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/name/:name"
router
  .route("/name/:name")
  .get(userController.findByName)

module.exports = router;
