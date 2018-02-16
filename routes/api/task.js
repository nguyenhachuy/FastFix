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
  .get(taskController.findByUserID);

// Matches with "/api/task/user/:id"
router
  .route("/username/:name")
  .get(taskController.findByUserName);

// Matches with "/api/task/contractor/:id"
router
  .route("/contractor/:id")
  .get(taskController.findByContractorID);

// Matches with "/api/task/available"
router
  .route("/available")
  .get(taskController.findAvailable);

// Matches with "/api/task/available/userid/:id"
router
  .route("/available/userid/:id")
  .get(taskController.findAvailableByUserID);

// Matches with "/api/task/available/username/:name"
router
  .route("/available/username/:name")
  .get(taskController.findAvailableByUserName);

// Matches with "/api/task/available/contractorid/:id"
router
  .route("/available/contractorid/:id")
  .get(taskController.findAvailableByContractorID);

// Matches with "/api/task/available/username/:name"
router
  .route("/available/contractorname/:name")
  .get(taskController.findAvailableByContractorName);

// Matches with "/api/task/inprogress"
router
  .route("/inprogress")
  .get(taskController.findInProgress);

// Matches with "/api/task/inprogress/userid/:id"
router
  .route("/inprogress/userid/:id")
  .get(taskController.findInProgressByUserID);

// Matches with "/api/task/inprogress/username/:name"
router
  .route("/inprogress/username/:name")
  .get(taskController.findInProgressByUserName);

// Matches with "/api/task/inprogress/contractorid/:id"
router
  .route("/inprogress/contractorid/:id")
  .get(taskController.findInProgressByContractorID);

// Matches with "/api/task/inprogress/username/:name"
router
  .route("/inprogress/contractorname/:name")
  .get(taskController.findInProgressByContractorName);

// Matches with "/api/task/closed"
router
  .route("/closed")
  .get(taskController.findClosed);

// Matches with "/api/task/closed/userid/:id"
router
  .route("/closed/userid/:id")
  .get(taskController.findClosedByUserID);

// Matches with "/api/task/closed/username/:name"
router
  .route("/closed/username/:name")
  .get(taskController.findClosedByUserName);

// Matches with "/api/task/closed/contractorid/:id"
router
  .route("/closed/contractorid/:id")
  .get(taskController.findClosedByContractorID);

// Matches with "/api/task/closed/username/:name"
router
  .route("/closed/contractorname/:name")
  .get(taskController.findClosedByContractorName);

// Matches with "/api/task/id/:id"
router
  .route("/id/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);


module.exports = router;
