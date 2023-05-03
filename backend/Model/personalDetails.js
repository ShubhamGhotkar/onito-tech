const mongoose = require("mongoose");

const personalDetailsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirthOrAge: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
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
