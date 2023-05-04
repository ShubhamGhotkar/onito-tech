const mongoose = require("mongoose");

const personalDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  dateOfBirthOrAge: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: false,
  },
  govtIssueId: {
    adhar: {
      type: String,
      required: false,
    },
    pan: {
      type: String,
      required: false,
    },
  },
});

const personalDetail = mongoose.model("personal-detail", personalDetailsSchema);

module.exports = personalDetail;
