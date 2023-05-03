import React from "react";
import "./style.css";

function AdressDetails() {
  return (
    <>
      <h2 className="h2-ele">Address Details</h2>
      <div className="address-details">
        <div className="address-details-itm">
          <label for="address">Address</label>
          <input type="text" placeholder="Enter Address" id="address" />
        </div>

        <div className="address-details-itm ">
          <label for="state">State</label>
          <select name="state" id="state">
            <option value="">Enter State</option>
          </select>
        </div>
        <div className="address-details-itm city">
          <label for="city">City</label>
          <select name="city" id="city">
            <option value="">Enter city</option>
          </select>
        </div>
        <div className="address-details-itm ">
          <label for="country">Country</label>
          <select name="country" id="country">
            <option value="">Enter city</option>
          </select>
        </div>
        <div className="address-details-itm">
          <label for="pincode">Pincode</label>
          <input type="number" placeholder="Enter Pincode" id="pincode" />
        </div>
      </div>
    </>
  );
}

export default AdressDetails;
