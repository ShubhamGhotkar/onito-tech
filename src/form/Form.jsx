import React from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AdressDetails from "./AdressDetails";
import OtherDetails from "./OtherDetails";

import "./style.css";

function Form() {
  return (
    <div className="container">
      <form>
        <PersonalDetails />
        <ContactDetails />
        <AdressDetails />
        <OtherDetails />
      </form>
    </div>
  );
}

export default Form;
