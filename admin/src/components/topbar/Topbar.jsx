import React from "react";
import "./topbar.css";
import {
  CircleNotificationsOutlined,
  Language,
  SettingsOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to={"/"}>
            <span className="logo">adminlogo</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <CircleNotificationsOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <Link to={"/login"}>
            <div className="topbarIconContainer">
              <SettingsOutlined />
            </div>
          </Link>
          <img
            src="https://cdn.pixabay.com/photo/2020/02/06/01/52/frame-4822807__480.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
