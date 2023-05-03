const express = require("express");
const router = express.Router();
require("../Database/databaseConnect");

const userList = require("../Model/userDetails");

router.post("/post-user", async (req, res) => {
  try {
    const {
      name,
      dateOfBirthOrAge,
      sex,
      mobile,
      govtIssueId,
      adhar,
      pan,
      occupation,
      religion,
      maritalStatus,
      bloodGroup,
      nationlity,
      guardianDetails,
      email,
      emergencyContactNo,
      address,
      state,
      city,
      country,
      pincode,
    } = req.body;
    if (!name || !dateOfBirthOrAge || sex)
      return res.status(422).json({ error: `Input Field Required` });

    const newUser = new userList({
      name,
      dateOfBirthOrAge,
      sex,
      mobile,
      govtIssueId,
      adhar,
      pan,
      occupation,
      religion,
      maritalStatus,
      bloodGroup,
      nationlity,
      guardianDetails,
      email,
      emergencyContactNo,
      address,
      state,
      city,
      country,
      pincode,
    });

    await newUser.save();
    res.status(201).json({ message: `user Added SucessFully` });
  } catch (err) {
    res.status(400).json({ message: `Failed To Add user` });
    console.log(err);
  }
});

router.get("/user-list", (req, res) => {
  userList
    .find()
    .then((user) => res.send(user))
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || "Error occur in get Method" })
    );
});
module.exports = router;
