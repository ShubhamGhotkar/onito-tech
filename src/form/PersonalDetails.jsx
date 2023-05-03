import React from "react";
import "./style.css";

function PersonalDetails() {
  return (
    <>
      <h2 className="h2-ele">Personal Details</h2>
      <div className="personal-details">
        <div className="personal-details-itm">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Name" id="name" />
        </div>
        <div className="personal-details-itm">
          <label for="date-or-birth">
            Date of Birth or Age<span className="start-style">*</span>
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY or Age in Years"
            id="date-or-birth"
          />
        </div>
        <div className="personal-details-itm ">
          <label for="sex">
            sex<span className="start-style">*</span>
          </label>
          <select name="sex" id="sex">
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="personal-details-itm">
          <label for="mobile">Mobile</label>
          <input type="number" placeholder="Enter Mobile" id="mobile" />
        </div>
        <div className="personal-details-itm grid-class-item">
          <label for="govt-id">
            sex<span className="start-style">*</span>
          </label>
          <select name="govt-id" id="govt-id">
            <option value="">ID Type</option>
            <option value="adhar">Adhar</option>
            <option value="pan">Pan</option>
          </select>
          <input type="text" placeholder="Enter Govt ID" id="govt-id-input" />
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
