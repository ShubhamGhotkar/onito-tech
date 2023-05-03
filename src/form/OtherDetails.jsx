import React from "react";
import "./style.css";

function OtherDetails() {
  return (
    <>
      <h2 className="h2-ele">Other Details</h2>
      <div className="other-details">
        <div className="other-details-itm">
          <label for="occupation">Occupation</label>
          <input type="text" placeholder="Enter Occupation" id="occupation" />
        </div>
        <div className="other-details-itm ">
          <label for="religion">Religion</label>
          <select name="religion" id="religion">
            <option value="">Enter Religion</option>
          </select>
        </div>
        <div className="other-details-itm maritial-status">
          <label for="maritial-status">Maritial Status</label>
          <select name="maritial-status" id="maritial-status">
            <option value="">Enter Maritial Status</option>
            <option value="maried">Maried</option>
            <option value="unmaried">UnMaried</option>
          </select>
        </div>
        <div className="other-details-itm ">
          <label for="blood-group">Blood Group</label>
          <select name="blood-group" id="blood-group">
            <option value="">Enter Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="other-details-itm ">
          <label for="nationlity">Nationlity</label>
          <select name="nationlity" id="nationlity">
            <option value="">Enter Nationlity</option>
            <option value="indian">Indian</option>
          </select>
        </div>
      </div>
      <div className="button">
        <button className="cancle btn">Cancle(ESC)</button>
        <button className="submit btn">Submit(.. S)</button>
      </div>
    </>
  );
}

export default OtherDetails;
