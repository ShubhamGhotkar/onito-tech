const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
  personalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personal - detail",
    required: true,
  },
  contactDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contact-detail",
    required: false,
  },
  addressDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address-detail",
    required: false,
  },
  otherDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "other-detail",
    required: false,
  },
 
});

const userDetails = mongoose.model("form-detail", userDetailsSchema);

module.exports = userDetails;
