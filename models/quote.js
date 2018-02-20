const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  task_id: String,
  contractor_id: String,
  quote: String
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;