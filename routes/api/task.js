const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/task"
router
  .route("task/")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/task/:id"
router
  .route("task/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

// Matches with "/api/task/user/:id"
router
  .route("task/user/:id")
  .get(taskController.findByUserId)

// Matches with "/api/task/contractor/:id"
router
  .route("task/contractor/:id")
  .get(taskController.findByContractorId)

module.exports = router;
