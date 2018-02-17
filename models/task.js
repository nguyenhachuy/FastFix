const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user_id: { type: String, required: true },
  username: String,
  contractor_id: String,
  contractorname: String,
  requestDescription: String,
  budget: Number,
  timeFrame: Number,
  status: String,
  openDate: Date,
  closeDate: Date,
  payment: Boolean,
  totalCost: Number,
  rate: Number,
  comment: String,
  jobTitle: String
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;