const router = require("express").Router();
const taskRoutes = require("./task");
const userRoutes = require("./user");
const contractorRoutes = require("./contractor");

// task routes
router.use("/task", taskRoutes);
router.use("/user", userRoutes);
router.use("/contractor", contractorRoutes);

module.exports = router;
