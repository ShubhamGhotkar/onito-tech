import React from "react";
import "./style.css";
function ContactDetails() {
  return (
    <>
      <h2 className="h2-ele">Contact Details</h2>
      <div className="contact-details">
        <div className="contact-details-itm ">
          <label for="guardian-id">Guardian Details</label>
          <select name="guardian-id" id="guardian-id">
            <option value="">Enter Label</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Enter Guardian Name"
            id="guardian-id"
          />
        </div>
        <div className="contact-details-itm">
          <label for="emial">Email</label>
          <input type="email" placeholder="Enter Email" id="email" />
        </div>
        <div className="contact-details-itm">
          <label for="em-no">Emergency Contact Number</label>
          <input type="number" placeholder="Enter Emergency No" id="em-no" />
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
