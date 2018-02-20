const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  task_id: String,
  jobTitle: String,
  contractor_id: String,
  contractorname: String,
  quote: String
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;