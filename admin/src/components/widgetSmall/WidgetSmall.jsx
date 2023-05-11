import { Visibility } from "@mui/icons-material";
import "./widgetSmall.css";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods.js";

function WidgetSmall() {
  const [users, setUsers] = useState([]);

  const getUsers = async (req, res) => {
    try {
      const res = await userRequest.get("/users/?new=true");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://t4.ftcdn.net/jpg/01/06/92/47/360_F_106924759_7qPPu6bZNN2O4al1ExdEWBdHUcpKMwuJ.jpg"
              }
              alt=""
              className="widgetSmImage"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.userName}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSmall;
