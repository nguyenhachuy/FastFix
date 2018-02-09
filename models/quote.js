const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  task_id: { type: String, required: true },
  contractor_id: { type: String, required: true },
  quote: String
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;