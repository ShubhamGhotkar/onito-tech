const mongoose = require("mongoose");

const addressDetailsSchema = mongoose.Schema({
  address: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: false,
  },
});

const addressDetails = mongoose.model("address-detail", addressDetailsSchema);

module.exports = addressDetails;
