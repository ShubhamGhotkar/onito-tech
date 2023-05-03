import React, { useState } from "react";
import DataTable from "react-data-table-component";

import "./user-style-css.css";

const column = [
  {
    name: "Name",
    id: 1,
    selector: (row) => row.name,
  },
  {
    name: "Age/Sex",
    selector: (row) => row.name,
  },
  {
    name: "Mobile",
    selector: (row) => row.name,
  },
  {
    name: "Address",
    selector: (row) => row.name,
  },
  {
    name: "Govt Id",
    selector: (row) => row.name,
  },
  {
    name: "Guardian Details",
    selector: (row) => row.name,
  },
  {
    name: "Nationality",
    selector: (row) => row.name,
  },
];

const row = [
  {
    name: "shubham",
    agesex: "male",
    mobile: "12547851",
    address: "nah nddiu mskus",
    govtId: "adhar",
    guardianDetails: "garagjhsh",
    nationality: "indian",
  },
];
function UserList() {
  const [records, setRecord] = useState(row);

  const handleChange = (e) => {
    const newUser = row.filter((row) =>
      row.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );

    setRecord(newUser);
  };

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        fontSize: "14px",
        paddingTop: "2rem",
      },
    },
  };
  // const onChangeRowsPerPage = ()=>{}

  return (
    <div className="user-container">
      <div className="user-header ">
        <div className="select-entry">
          <span className="entry-span">Show</span>
          <select name="show-entry" id="show-entry">
            <option value="">10</option>
            <option value="">25</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
          <span className="entry-span">Entry</span>
        </div>
        <div className="user-header-input">
          <label for="search">Search</label>
          <input
            type="text"
            placeholder="Search Here"
            id="search"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="user-list ">
        <DataTable
          columns={column}
          data={records}
          fixedHeader
          pagination
          fixedHeaderScrollHeight="300px"
          // progressPending
          responsive
          dense
          // customTheme={style}
          // conditionalRowStyles={conditionalRowStyles}
          noHeader={false}
          customStyles={customStyles}
        ></DataTable>
      </div>
    </div>
  );
}

export default UserList;
