import React, { useState } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
