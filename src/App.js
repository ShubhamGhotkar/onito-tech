import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Form from "./form/Form";
// import UserList from "./userList/UserList";
function App() {
  return (
    <div className="container">
      <form>
        <h2 className="h2-ele">Personal Details</h2>
        <div className="personal-details">
          <div className="personal-details-itm">
            <label for="name">Name</label>
            <input type="text" placeholder="Enter Name" id="name" />
          </div>
          <div className="personal-details-itm">
            <label for="date-or-birth">
              Date of Birth or Age<span>*</span>
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY or Age in Years"
              id="date-or-birth"
            />
          </div>
          <div className="personal-details-itm ">
            <label for="sex">
              sex<span>*</span>
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
              sex<span>*</span>
            </label>
            <select name="govt-id" id="govt-id">
              <option value="">ID Type</option>
              <option value="adhar">Adhar</option>
              <option value="pan">Pan</option>
            </select>
            <input type="text" placeholder="Enter Govt ID" id="govt-id-input" />
          </div>
        </div>

        {/* CONTACT DETAILS */}
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
        {/* ADRESS DETAILS */}
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
        {/* OTHER DETAILS */}
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
      </form>
    </div>
    // <Routes>
    //   <Route path="/set" element={<Form />} />
    //   {/* <Route path="/userlist" element={<UserList />} /> */}
    // </Routes>
  );
}

export default App;
