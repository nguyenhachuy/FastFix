const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contractorname: { type: String, required: true },
  address: String,
  zipCode: String,
  phone: String,
  email: String,
  licenseNumber: String,
  hourlyRate: String,
  qualifications: String,
  password: String,
  image: { data: Buffer, contentType: String },
  coverLocation: String,
  description: String,
  date: { type: Date, default: Date.now }
});


const Contractor = mongoose.model("Contractor", contractorSchema);

module.exports = Contractor;