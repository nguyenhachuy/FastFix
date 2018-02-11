const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/task"
router
  .route("/")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/task/user/:id"
router
  .route("/user/:id")
  .get(taskController.findByUserId)

// Matches with "/api/task/contractor/:id"
router
  .route("/contractor/:id")
  .get(taskController.findByContractorId)

// Matches with "/api/task/available"
router
  .route("/available")
  .get(taskController.findAvailable)
  
// Matches with "/api/task/id/:id"
router
  .route("/id/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);


module.exports = router;
