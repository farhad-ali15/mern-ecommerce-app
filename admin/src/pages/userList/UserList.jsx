import "./userList.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";
import { userRows } from "../../dummydata";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 160 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "string",

      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default UserList;
