const router = require("express").Router();
const taskRoutes = require("./task");
const userRoutes = require("./user");
//const contractorRoutes = require("./contractor");
const quoteRoutes = require("./quote");

// task routes
router.use("/task", taskRoutes);
router.use("/user", userRoutes);
//router.use("/contractor", contractorRoutes);
router.use("/quote", quoteRoutes);

module.exports = router;
