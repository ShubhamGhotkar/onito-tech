const mongoose = require("mongoose");

const otherDetailsSchema = mongoose.Schema({
  occupation: {
    type: String,
    required: false,
  },
  religion: {
    type: String,
    required: false,
  },
  maritalStatus: {
    type: String,
    required: false,
  },
  bloodGroup: {
    type: String,
    required: false,
  },
  nationlity: {
    type: String,
    required: false,
  },
});

const otherDetails = mongoose.model("other-detail", otherDetailsSchema);

module.exports = otherDetails;
