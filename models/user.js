const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  address: String,
  zipCode: String,
  phone: String,
  email: String,
  password: String,
  image: { data: Buffer, contentType: String },
  date: { type: Date, default: Date.now },
  // User or Contractor
  attribute: String,
  // For User
  billingInfo: String,
  // For Contractor
  licenseNumber: String,
  hourlyRate: String,
  qualifications: String,
  coverLocation: String,
  description: String
});


const User = mongoose.model("User", userSchema);

module.exports = User;

