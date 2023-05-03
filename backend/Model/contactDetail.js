const mongoose = require("mongoose");

const contactDetailSchema = mongoose.Schema({
  guardianDetails: {
    prefix: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
  email: {
    type: String,
    required: false,
  },
  emergencyContactNo: {
    type: Number,
    required: false,
  },
});

const contactDetail = mongoose.model("contact-detail", contactDetailSchema);

module.exports = contactDetail;
